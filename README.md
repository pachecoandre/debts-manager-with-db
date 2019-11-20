## Instructions To Run Locally

### Clone the project
`git clone git@github.com:andrexlab/debts-manager-with-db.git`<br>
<br>

### Database Configuration
Prerequisite: [MySQL Database](https://dev.mysql.com/downloads/mysql/)
1. Make sure the database is running
1. Run the `backend/scripts/schema.sql` file
1. Change the database user and password in the `backend/database/connection.js` accordingly
<br>

### Backend
Prerequisite: [node.js](https://nodejs.org)<br>
In the backend folder, run:<br>
`npm install`<br>
`npm run start`<br>
<br>

### Frontend
Prerequisite: [yarn](https://yarnpkg.com)<br>
In the frontend folder, run:<br>
`yarn install`<br>
`yarn run start`<br>
Your browser should open on `http://localhost:3000/` page.
