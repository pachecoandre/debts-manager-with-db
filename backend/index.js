const express = require('express')
const app = express()
const { getDebts, getCustomerDebts, createDebt, updateDebt, deleteDebt } = require('./database/queries')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });

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

app.post('/updateDebt', async (req, res) => {
   const updated = await updateDebt(req.body)
   if (updated) {
      return res.send(updated)
   }
   res.status(400)
})

app.post('/deleteDebt', async (req, res) => {
   const deleted = await deleteDebt(req.body)
   if (deleted) {
      return res.send(deleted)
   }
   res.status(400)
})

app.listen(3001, () => console.log('Server running on port 3001'))
