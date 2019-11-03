const express = require('express')
const axios = require('axios')
const app = express()
const { getDebts, getCustomerDebts, createDebt, updateDebt, deleteDebt } = require('./database/queries')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
 });

app.get('/customers', async (req, res) => {
   let nextPage = true;
   let url = 'https://swapi.co/api/people'
   let customers = []

   while (nextPage) {

      const response = await axios.get(url)
         .catch((error) => console.log(error))

      if (!response.data) {
         return nextPage = false
      }

      const recordsOnPage = response.data.results.map((element) => {
         return element.name
      })
      customers = [...customers, ...recordsOnPage]

      if (response.data.next) {
         url = response.data.next
      } else {
         nextPage = false
      }
   }
   res.send(customers.sort())
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
