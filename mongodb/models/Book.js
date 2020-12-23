const MongoClient = require('mongodb');
const Schema = MongoClient.Schema;

const BookSchema = new Schema({
    title: String
});


module.exports = mongoose.model('book',BookSchema);