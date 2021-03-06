import React from 'react'
import Modal from 'react-modal'
import Dropdown from './Dropdown'
import './EditModal.css'
import './App.css'

Modal.setAppElement(document.getElementById('root'));

const EditModal = (props) => (
   <Modal
      className='modal'
      isOpen={!!props.debtUnderEdition}
      onRequestClose={props.handleClearDebtUnderEdition}
      contentLabel="Editar produto"
   >
      <h3>Editar Produto</h3>
      <form onSubmit={props.handleSaveChanges}>
         <div className="label">
            <div>Cliente</div>
            <Dropdown
               customers={props.customers}
               inputName="customerName"
               defaultValue={props.debtUnderEdition ? props.debtUnderEdition.customer_name : ""} />
            </div>
            <div className="label">
               <div>Descrição</div>
            <input
               type="text"
               name='description'
               placeholder='Descrição'
               defaultValue={props.debtUnderEdition ? props.debtUnderEdition.description : ""}
            />
            </div>
            <div className="label">
               <div>Valor</div>
            <input
               type="number"
               name='value'
               placeholder='Valor'
               step="any"
               defaultValue={props.debtUnderEdition ? props.debtUnderEdition.amount : ""}
               required
            />
            </div>
            <div className="modal-submit-buttons">
            <input className="save-changes-button" type="submit" value="OK"></input>
            <button className="cancel-changes-button" onClick={props.handleClearDebtUnderEdition}>Cancelar</button>
         </div>
      </form>
   </Modal>
)

export default EditModal