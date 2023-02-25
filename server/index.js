const app=require("./app");
const { connected } = require('./config/db')
const PORT=process.env.PORT || 1200;
app.listen(PORT, ()=>{
    connected();
    console.log(`Server is running at port ${PORT}`)
})