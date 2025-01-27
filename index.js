const express = require('express');
const sequelize = require('./database/sequelize');
const app = express();
const port = 5646;

// Import the product router
const router = require('./routes/productRouter');

// Middleware
app.use(express.json());
app.use(router)


    // Test database connection
     const server = async()=>{
        
        try {
            await sequelize.authenticate();
            console.log('Database connection has been established successfully.');
        } catch (dbError) {
            console.error('Unable to connect to the database:', dbError);
        }
    
}

server();
app.listen(port, async (err) => {
    if (err) {
        console.error('Failed to start the server:', err);
        return;
    }
    console.log(`My server is up and running on port ${port}`);
})
