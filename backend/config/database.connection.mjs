import mongoose from 'mongoose';

export async function connect() {
    console.log('connecting to localhost on PORT 27017 on users Database'.yellow.bold);

    mongoose.connection.on('connected', () => {
        console.log('connection established'.yellow.bold);
    });

    mongoose.connection.on('err', () => {
        console.log('failed to connect'.red.bold);
    });

    const sameMongoose = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        family: 4, // use IPv4 only,
    });

    return sameMongoose;

    // mongoose2 is the same object as mongoose because connect return 'this'
    // const mongoose2 = await mongoose.connect(
    //     'mongodb://localhost:27017/users',
    //     {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //         family: 4, // use IPv4 only,
    //     },
    //     err => {
    //         if (err) {
    //             console.error('failed to connect'.red.toUpperCase().bold);
    //         }
    //     }
    // );
    // return mongoose2.connection;
}
