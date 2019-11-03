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
            console.log(`Debt created, id`, response)
            return `Debt created`
         },
         err => {
            console.log(err)
            return false
         })
}

const updateDebt = ({ id, customerName, description, amount }) => {
   return knex('debts')
      .where('id', id)
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
               return `Debts not found`
            }
            return `Debt updated`
         },
         err => {
            console.log(err)
            return false
         }
      )
}

const deleteDebt = ({ id }) => {
   return knex('debts')
      .where('id', id)
      .del()
      .then(
         response => {
            if (response === 0) {
               return `Debt not found`
            }
            return `Debt deleted`
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
   updateDebt,
   deleteDebt
}