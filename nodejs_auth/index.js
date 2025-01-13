const express = require('express')
const mongoose = require('mongoose')
const app = express();
const authRouter = require('./routes/auth')
const homeRouter = require('./routes/home')
const adminRouter = require('./routes/admin')
const imageRouter = require('./routes/image')

require('dotenv').config();

app.use(express.json())
app.use('/auth',authRouter);
app.use('/admin',adminRouter);
app.use('/admin',adminRouter);
app.use('/image',imageRouter);
app.use('/',homeRouter)
// app.use(express.urlencoded({ extended: false }));
mongoose.connect(process.env.MONGO_URL).then(i=>console.log("DB connected")).catch(err=>{console.log(err);process.exit(1);});
const PORT = process.env.PORT 
app.listen(PORT,()=>console.log(`App running on ${PORT}`));
