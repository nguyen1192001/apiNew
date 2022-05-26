const mongoose = require('mongoose')
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://nguyen1192001:nguyen1192001@products.uhr37.mongodb.net/databaseNewWebsite?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            
            useUnifiedTopology: true
        });
        console.log('connect successfully!!!')
    } catch (error) {
        console.log('connect faillue !!!',error)
    }
}




module.exports = { connect }