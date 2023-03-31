const mongoose=require('mongoose')
mongoose.set('strictQuery', false)
const uri = "mongodb+srv://shivanigupta777:shivanigupta777@cluster0.tzq1ity.mongodb.net/?retryWrites=true&w=majority"
async function getConnection() {
    await mongoose.connect(uri, (err)=>{
        if(err){
            console.log("Connection to mongoDB failed");
        }
        else{
            console.log("Connected to MongoDB successfully");
        }
    })
}
module.exports = getConnection
