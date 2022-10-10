export default (async function () {
    const { mongoose_3: mongoose } = await import('../db/database.connection.mjs');
    const { Schema } = mongoose;

    const UserSchema = new Schema(
        {
            name: {
                type: String,
                trim: true,
                minLength: [3, 'Must be at least 3, got {VALUE}'],
                maxLength: [24, 'Must be at most 24, got {VALUE}'],
                required: [true, 'Name is Required'],
            },
            username: {
                type: String,
                trim: true,
                unique: true,
                minLength: [6, 'Must be at least 6, got {VALUE}'],
                maxLength: [12, 'Must  be at most, got {VALUE}'],
                required: [true, 'Username is Required'],
            },
            email: {
                type: String,
                trim: true,
                unique: true,
                required: [true, 'Email is Required'],
                match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Invalid Email Address'],
            },
            password: {
                type: String,
                trim: true,
                // minLength: [8, 'Must be at least 8, got {VALUE}'],
                // maxLength: [15, 'Must be at most 15, got {VALUE}'],
                required: [true, 'Password is Required'],
            },
        },
        {
            autoIndex: true,
            timestamps: true,
        }
    );

    // param 1 is the name of the model
    // param 2 is the Schema
    // we are creating a document from a model.
    // you can provide a 3 param for model, which is the name of the collection(optional, inferred from model name).
    // to obtain the name of the collection, you should pluralize the name of the model and lowercase it.
    return mongoose.model('User', UserSchema, 'users');
})();
