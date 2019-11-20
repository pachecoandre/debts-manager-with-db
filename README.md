## Instructions to Run Locally

### Clone the project
`git clone git@github.com:andrexlab/debts-manager-with-db.git`<br>

### Database Configuration
Prerequisite: [MySQL Database](https://dev.mysql.com/downloads/mysql/)
1. Make sure the database is running
1. Run the SQL script in the file `backend/scripts/schema.sql`
1. Change the database's user and password accordingly in the file `backend/database/connection.js`

### Backend
Prerequisite: [node.js](https://nodejs.org)<br>
In the backend folder, run:<br>
`npm install`<br>
`npm run start`<br>

### Frontend
Prerequisite: [yarn](https://yarnpkg.com)<br>
In the frontend folder, run:<br>
`yarn install`<br>
`yarn run start`<br>
Your browser should open on `http://localhost:3000/`
