

const express = require('express');
// const cookieParser=require('cookie-parser')
const dataRoutes = require('./routesfolder/apis'); 

const app = express();
// app.use(cookieParser())
app.use(express.json()); 

app.use( dataRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



