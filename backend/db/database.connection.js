import mongoose from 'mongoose';

async function connect() {
	console.log('connecting to localhost on PORT 27017 on users Database'.white.bold);

	mongoose.connection.on('connected', () => {
		console.log('database'.cyan.bold, 'connection established'.white.bold);
	});

	mongoose.connection.on('err', () => {
		console.log('database failed to connect'.red.bold);
	});

	return mongoose.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		family: 4, // use IPv4 only.
	});
}

export const mongooseInstance = await connect();
