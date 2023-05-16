import mongoose from 'mongoose';

const connectToDatabase = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URI);
		console.log('Connection established');
	} catch (error) {
		console.log('Error connecting to Database', error);
		throw error;
	}
};

export default connectToDatabase;
