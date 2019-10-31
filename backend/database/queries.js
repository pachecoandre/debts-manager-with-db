const knex = require('./connection')

const getDebts = () => {
   return knex(`debts`)
      .select(`*`)
      .then(response => {
         return response
      },
      err => {
         return false
      })
}

const getCustomerDebts = (customerName) => {
   return knex(`debts`)
      .select(`*`)
      .where(`customer_name`, customerName)
      .then(response => response)
}

const createDebt = ({ customerName, description, amount }) => {
   return knex('debts')
      .insert({
         customer_name: customerName,
         description,
         amount,
         date: new Date()
      }).then(
         response => {
            console.log(`Criado dívida:`, response)
            return `Debt created`
         },
         err => {
            console.log(err)
            return false
         })
}

const updateDebt = ({ id, customerName, description, amount} ) => {
   return knex('debts')
      .where('id', '=', id)
      .update({
         id,
         customer_name: customerName,
         description,
         amount,
         date: new Date()
      })
      .then(
         response => {
            if (response === 0) {
               return `Dívida não encontrada`   
            }
            return `Dívida atualizada`
         },
         err => {
            console.log(err)
            return false
         }
      )
}

module.exports = {
   getDebts,
   getCustomerDebts,
   createDebt,
   updateDebt
}