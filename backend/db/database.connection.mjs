import mongoose from 'mongoose';

async function connect() {
    console.log('connecting to localhost on PORT 27017 on users Database'.yellow.bold);

    mongoose.connection.on('connected', () => {
        console.log('connection established'.yellow.bold);
    });

    mongoose.connection.on('err', () => {
        console.log('failed to connect'.red.bold);
    });

    const mongoose_2 = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        family: 4, // use IPv4 only.
    });

    return mongoose_2;
}

export const mongoose_3 = await connect();
