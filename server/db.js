
const mongoose =  require("mongoose");
const mongoURL = process.env.MONGODB_URL;

const connectToMongo=async()=>{
  try {
    // console.log(mongoURL)
    await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("connected to mongodb");
} catch (error) {
    console.error("Error connecting to mongodb:", error);
}
}
module.exports= connectToMongo;