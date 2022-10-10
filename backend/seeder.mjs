import dotenv from 'dotenv';
import colors from 'colors';
import { default as users } from './dummy-data/users.mjs';

dotenv.config({
    path: './config/.env',
});

const { default: promiseUser } = await import('./models/User.mjs');

const User = await promiseUser;

async function importData() {
    try {
        await User.create(users);
        console.log('Data Imported...'.yellow.bold);
        process.exit();
    } catch (error) {
        console.log(error);
    }
}

async function deleteData() {
    try {
        await User.deleteMany();
        console.log('Data Deleted...'.yellow.bold);
        process.exit();
    } catch (error) {
        console.log(error);
    }
}

if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
} else {
    console.log('Wrong arguments, try again.'.red.bold);
}
