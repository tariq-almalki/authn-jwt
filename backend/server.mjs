import express from 'express';
import * as dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';

// docker run --name redis-container -dp [127.0.0.1:]6379:6379 redis
// you need to run redis server to connect to.

dotenv.config({
	path: './config/.env',
});

// routes
const { usersRouter } = await import('./routes/usersRoutes.js');
const { signInSignOutRouter } = await import('./routes/signInSignOutRoutes.js');

const app = express();

if (process.env.NODE_ENV === 'development') {
	app.use(
		morgan('dev', {
			// this option is used for logging requests instead of responses.
			// immediate: true,
		})
	);
}

// "app.use" does partial matching, so '/' will match '/', '/users', ...
// other METHOD() does specific matching, if you use '/' then '/' will match only.
app.use('/', usersRouter);
app.use('/', signInSignOutRouter);

app.listen(process.env.PORT, () => {
	console.log('server'.yellow.bold, ' started at PORT 5500'.white.bold);
});
