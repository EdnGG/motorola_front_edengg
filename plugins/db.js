import mongoose from "mongoose";
mongoose.set("strictQuery", true);

async function connectToDatabase() {
    try {
        const uri = process.env.URI_MONGO_CLOUD || process.env.URI_MONGO_LOCAL;
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(
            `\x1b[34m ***************************************** \x1b[0m`
        );
        console.log(`\x1b[34m ** SUCCESSFULLY CONNECT TO MONGODB ** \x1b[0m`);
        console.log(
            `\x1b[34m ***************************************** \x1b[0m`
        );
    } catch (error) {
        console.log(`\x1b[31m ************************** \x1b[0m`);
        console.log(
            `\x1b[31m ** ERROR CONNECTING TO MONGODB ${error.message} **\x1b[0m`
        );
        console.log(`\x1b[31m ************************** \x1b[0m`);
    }
}

connectToDatabase();
