const express = require('express');
const app = express();

const db = require('./config/db.config');
const config = require('./config/app.config');
const userRouter = require('./routes/user.route');
const adminRouter = require('./routes/admin.route');
const productRouter = require('./routes/product.route');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

db.connect();

app.use('/user', userRouter);

app.use('/admin', adminRouter);

app.use('/products', productRouter);



app.listen(config.PORT, ()=>{
    console.log(`Server is listening on port ${config.PORT}`);
});