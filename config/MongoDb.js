import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://sangare:sangare123+moussa@care.jydkr.mongodb.net/test', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;
