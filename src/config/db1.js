const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/myDb').then(()=> console.log('database connected')).
mongoose.connect('mongodb://localhost:27017/contact_db').then(()=> console.log('MongoDB connection SUCCESS')).

catch(e => console.log(e.message));