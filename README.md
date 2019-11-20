## Instructions to run localhost

### Clone the project
Run the command:
`git clone git@github.com:andrexlab/debts-manager-with-db.git`

### Database Configuration
Prerequisites: [MySQL Database](https://dev.mysql.com/downloads/mysql/)
Optional: [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
1. Make sure the database is running
1. In the Workbench go to --> File --> Run SQL Script...
1. Open the backend/scripts/schema.sql file and run the script

### Backend
Prerequisites: [node.js](https://nodejs.org)
In the backend folder, run:
`npm install`
`npm run start`

### Frontend
Prerequisites: [yarn](https://yarnpkg.com)
In the frontend folder, run:
`yarn install`
`yarn run start`
Your browser should open automatically on http://localhost:3000/
