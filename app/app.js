const mongoose = require('mongoose');
const { Attendance, Employee, Systems } = require('./db/model.js');
require('dotenv').config();

// Connecting to database
mongoose.connect(process.env.MONGOURI,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
    });

    const connection = mongoose.connection;
    connection.once('open', () => console.log('MongoDB Success -- Database Connection Successfully Done!'));
    connection.on('error', (err) => {
        console.log('MongoDB Error -- Connection Error: ' + err);
        process.exit();
    });