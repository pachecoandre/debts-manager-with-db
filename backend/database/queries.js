const knex = require('./connection')

const getDebts = () => {
   return knex(`debts`)
      .select(`*`)
      .then(response => response)
}

const getCustomerDebts = (customerName, callback) => {
   return knex(`debts`)
      .select(`*`)
      .where(`customer_name`, `=`, customerName)
      .then(response => callback(response))
}

const createDebt = (customerName) => {
   return knex('debts')
      .insert({
         customer_name: customerName,
         description,
         amount,
         date
      }).then(
         response => console.log(`Criado dívida de ${customerName}`),
         err => console.log(err))
}

const updateDebt = ({ id, customerName, description, amount} ) => {
   return knex('debts')
      .where('id', '=', id)
      .update({
         id,
         customer_name: customerName,
         description,
         amount
      })
      .then(
         response => console.log(`Dívida id ${id} de ${customerName} atualizada`),
         err => console.log(err)
      )
}

module.exports = {
   getDebts,
   getCustomerDebts,
   createDebt,
   updateDebt
}