const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/product", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Hey nerd, Mongo's here"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

