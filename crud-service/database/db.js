import mongoose from "mongoose";

mongoose.set("strictQuery", false);
const Connection = async (username, password) => {
  const URL = `mongodb+srv://${username}:${password}@crud-app.y9gvngt.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error while connecting with the database ", error);
  }
};

export default Connection;
