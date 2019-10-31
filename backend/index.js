const express = require('express')
const app = express()
const { getDebts, getCustomerDebts, createDebt, updateDebt } = require('./database/queries')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/customers', (req, res) => {
   res.send('get swapi customers')
})

app.get('/debts', async (req, res) => {
   if (req.query.customerName) {
      const debts = await getCustomerDebts(req.query.customerName)
      if (debts) {
         return res.send(debts)         
      }

   } else {
      const debts = await getDebts()
      if (debts) {
         return res.send(debts)         
      }
   }
   res.status(400)
})

app.post('/debts', async (req, res) => {
   const created = await createDebt(req.body)
   if (created) {
      res.send(created)
   } else {
      res.status(400)
   }
})

app.patch('/debts', async (req, res) => {
   const updated = await updateDebt(req.body)
   if (updated) {
      return res.send(updated)
   }
   res.status(400)
})

app.listen(3000, () => console.log('Server running on port 3000'))
