import axios from 'axios'

export default class CustomersService {

   async getUsers() {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users/')
         .catch((error) => console.log(error))
      return response
   }

   async getDebts() {
      const response = await axios.get('http://localhost:3001/debts')
         .catch((error) => console.log(error))
      return response
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

   async getSwapiUsers() {

      let nextPage = true;
      let url = 'https://swapi.co/api/people'
      let customers = []

      while (nextPage) {

         const response = await axios.get(url)
            .catch((error) => console.log(error))

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
      console.log(customers)
      return customers
   }
}

