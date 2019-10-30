const express = require('express')
const app = express()
const { getDebts, getCustomersDebts, createDebt, updateDebt } = require('./database/queries')

app.get('/customers', (req, res) => {
   res.send('get swapi customers')
})

app.get('/debts', async (req, res) => {
   if (req.query.customerName) {
      const debts = await getCustomerDebts(req.query.customerName)
      res.send(debts)
      
   } else {
      const debts = await getDebts()
      res.send(debts)
   }
})

app.post('/debts', async (req, res) => {
   const created = await createDebt(req.body.customerName)
   res.send(created)
})

app.patch('/debts', async (req, res) => {
   const updated = await updateDebt(req.body)
   res.send(updated)
})

app.listen(3000, () => console.log('Server running on port 3000'))
