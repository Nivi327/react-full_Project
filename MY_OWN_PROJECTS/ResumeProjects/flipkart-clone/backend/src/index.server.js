const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const env = require('dotenv');

const app = express();

const userRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');

env.config();

mongoose.connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.mcnjjm0.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser:true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('DB Connected');
    });

app.use(express.json());

app.use('/api', userRoutes);
app.use('/api', categoryRoutes);

app.use('/api/admin', adminRoutes);


app.listen(process.env.PORT, () => {
    console.log('server listening in port 3010');
});