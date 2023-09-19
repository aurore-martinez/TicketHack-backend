const mongoose = require("mongoose")
const connectionString = "mongodb+srv://admin:8UyEEBCZ28sqzV4N@cluster0.gqth7f6.mongodb.net/tickethack";
// mongoose.set("strictQuery", true)

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Successfully connected to the Database 🥳 !"))
  .catch((errorMessage) => console.error(errorMessage))