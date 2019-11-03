import React from 'react'
import moment from 'moment'
import './Table.css'

const Table = (props) => {

   if (props.debts.length === 0) {
      return (
         <div className="center-text"><i>Nenhuma dívida cadastrada</i></div>
      )
   } else {
      return (
         <div className="debts-table">
            <table className="main-table" align="center">
               <thead>
                  <tr>
                     <th>Cliente</th>
                     <th className="desc-column">Descrição</th>
                     <th className="num-column">Valor</th>
                     <th className="date-column">Data</th>
                     <th></th>
                  </tr>
               </thead>
               <tbody>
                  {
                     props.debts.map((item) => (
                        <tr key={item.id}>
                           <td>
                              <button className="customer-button" onClick={(e) => props.handleListCustomerDebts(item.customer_name)}>
                                 {item.customer_name}
                              </button>
                           </td>
                           <td className="desc-column">{item.description}</td>
                           <td className="num-column">{item.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                           <td className="date-column">{moment().format('DD/MM/YYYY')}</td>
                           <td className="actions-column">
                              <button className='remove-button' onClick={(e) => {
                                 props.handleDeleteDebt(item.id)
                              }}
                              >
                                 remover
                              </button>
                              <button className='edit-button' onClick={(e) => {
                                 props.handleEditDebt(item)
                              }}
                              >
                                 editar
                              </button>
                           </td>
                        </tr>
                     ))
                  }
               </tbody>
            </table>
         </div>
      )
   }
}

export default Table