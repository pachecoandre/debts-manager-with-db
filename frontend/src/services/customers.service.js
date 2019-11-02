import axios from 'axios'

export default class CustomersService {

   async getUsers() {
      const response = await axios.get('http://localhost:3001/customers')
         .catch((error) => console.log(error))
      if (response && response.data) {
         return response.data
      }
      console.log(`Could not get users from https://swapi.co/api/people/`)
      return []
   }

   async getDebts() {
      const response = await axios.get('http://localhost:3001/debts')
         .catch((error) => console.log(error))

      if (response && response.data) {
         return response.data
      }
      console.log(`Could not get debts from database`)
      return []
   }

   async createDebt({ customerName, description, amount }) {
      const response = await axios.post('http://localhost:3001/debts', {
         customerName,
         description,
         amount
      })
         .catch((error) => console.log(error))
      return response
   }

   async updateDebt({ id, customerName, description, amount }) {
      const response = await axios.post('http://localhost:3001/updateDebt', {
         id,
         customerName,
         description,
         amount
      })
         .catch((error) => console.log(error))
      return response
   }

   async deleteDebt(id) {
      const response = await axios.post('http://localhost:3001/deleteDebt', {
         id
      })
         .catch((error) => console.log(error))
      return response
   }
}

