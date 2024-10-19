// Require the mongose library
const mongoose = require('mongoose');

// module.exports = {
//   connect:()=> mongoose.connect('mongodb://localhost:27017/sem_7').then(()=>console.log("mongoose connected")).catch((e)=>console.log("failed"))
// };


module.exports = {
  connect:()=> mongoose.connect("mongodb+srv://dipankarmtmh:Dip9547%40@cluster0.xvr5e.mongodb.net/sem_7?retryWrites=true&w=majority&appName=Cluster0")
  .then(()=>console.log("mongoose connected")).catch((e) => console.error("failed to connect to mongoose:", e.message))
};



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://dipankarmtmh:Dip9547%40@cluster0.xvr5e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// module.exports=run().catch(console.dir);
