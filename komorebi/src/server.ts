import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();
const app = express();

app.get('/ping', (request, response) => {
	response.send('Hello');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log('Server up and running');
});
