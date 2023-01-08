const mongoose = require('mongoose')

const url = `mongodb+srv://type-serverside:IDPqMHH19jcvBjDm@type-cluster.rpqmdi6.mongodb.net/?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}

async function connectDatabase(){
    await mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. ${err}`);
    })

}

module.exports = {connectDatabase}


