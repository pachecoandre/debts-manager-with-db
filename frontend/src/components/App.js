import React, { Component } from 'react'
import CustomersService from '../services/customers.service'
import Dropdown from './Dropdown'
import Table from './Table'
import EditModal from './EditModal'
import ListModal from './ListModal'
import add from '../img/add.png'
import loading from '../img/loading.gif'
import './App.css'

export default class DebtsPage extends Component {
   state = {
      customers: [],
      debts: [],
      debtUnderEdition: undefined,
      listingSomeonesDebts: undefined
   }

   constructor() {
      super()
      this.service = new CustomersService()
   }

   componentDidMount() {
      this.getCustomers()
      this.getDebts()
   }

   async getCustomers() {
      const names = await this.service.getUsers()
      this.setState(() => ({ customers: names }))
   }

   async getDebts() {
      const response = await this.service.getDebts()
      this.setState(() => ({ debts: response }))
   }

   handleDeleteDebt = async (debtToRemove) => {
      await this.service.deleteDebt(debtToRemove)
      this.getDebts()
   }

   handleEditDebt = (debtToEdit) => {
      this.setState(() => {
         return ({ debtUnderEdition: debtToEdit })
      })
   }

   handleClearDebtUnderEdition = () => {
      this.setState(() => ({ debtUnderEdition: undefined }))
   }

   handleSaveChanges = async (e) => {
      e.preventDefault()
      const debt = {
         id: this.state.debtUnderEdition.id,
         customerName: e.target.elements.customerName.value,
         description: e.target.elements.description.value.trim(),
         amount: e.target.elements.value.value
      }

      await this.service.updateDebt(debt)
      this.setState(() => ({ debtUnderEdition: undefined }))
      this.getDebts()
   }

   handleListCustomerDebts = (customerName) => {
      this.setState(() => ({ listingSomeonesDebts: customerName }))
   }

   handleClearListingSomeonesDebts = () => {
      this.setState(() => ({ listingSomeonesDebts: undefined }))
   }

   handleNewDebt = async (e) => {
      e.preventDefault()
      const customerName = e.target.elements.customerName.value
      const description = e.target.elements.description.value.trim()
      const amount = e.target.elements.value.value
      const debt = {
         customerName,
         description,
         amount
      }
      // clear inputs
      e.target.elements.description.value = ''
      e.target.elements.value.value = ''

      await this.service.createDebt(debt)
      this.getDebts()
   }

   render() {
      return (
         <div className="main">
            <div className="header"><h2>Gerenciador de Dívidas</h2></div>
            <div className="input-bar-container">
               <form onSubmit={this.handleNewDebt}>
                  <div className="input-bar">
                     <div className="label">
                        Cliente <span>{this.state.customers.length === 0 ? <img src={loading} alt=" carregando..." /> : ""}</span>
                        <Dropdown customers={this.state.customers} inputName="customerName" />
                     </div>
                     <div className="label">
                        Descrição
                        <input type="text" name="description" placeholder=""></input>
                     </div>
                     <div className="label">
                        Valor
                        <input type="number" name='value' placeholder="" step="any" required></input>
                     </div>
                     <button className='add-button' type="submit"><img name="add-debt" alt="Enviar" src={add}></img></button>
                  </div>
               </form>
            </div>
            <Table
               debts={this.state.debts}
               customers={this.state.customers}
               handleClearDebtUnderEdition={this.handleClearDebtUnderEdition}
               handleDeleteDebt={this.handleDeleteDebt}
               handleEditDebt={this.handleEditDebt}
               handleListCustomerDebts={this.handleListCustomerDebts}
               handleNewDebt={this.handleNewDebt}
               className="customer-table"
            />
            <EditModal
               customers={this.state.customers}
               handleSaveChanges={this.handleSaveChanges}
               debtUnderEdition={this.state.debtUnderEdition}
               handleClearDebtUnderEdition={this.handleClearDebtUnderEdition} />

            <ListModal
               debts={this.state.debts}
               handleListCustomerDebts={this.handleListCustomerDebts}
               handleClearListingSomeonesDebts={this.handleClearListingSomeonesDebts}
               listingSomeonesDebts={this.state.listingSomeonesDebts} />
         </div>
      )
   }
}