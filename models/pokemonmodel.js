const mongoose = require('mongoose');


//^ =========== creating a schema definition

const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    readyToEat: Boolean
})
//^ =========== end of creating a schema definition




//& ================== creating a model

const Poke = mongoose.model('Poke', pokemonSchema);

module.exports = Poke;

//& ================== end of creating a model