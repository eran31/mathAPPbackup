let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig = require('./database/db');

//require("dotenv").config();

//const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

let configDB = "mongodb+srv://Admin:chicool1984@mathapp.okhhcyl.mongodb.net/mathApp?retryWrites=true&w=majority"
//let configDB = `mongodb+srv://${DB_USER}:${DB_PASSWOR}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`
// Express Route

const studentRoute = require('./routes/Student.route')
const teacherRoute = require('./routes/Teacher.route')


// Configure mongoDB Database
//mongoose.set('useNewUrlParser', true);
//mongoose.set('useFindAndModify', false);
//mongoose.set('useCreateIndex', true);
//mongoose.set('useUnifiedTopology', true);
const app = express();

// Connecting MongoDB Database
mongoose.Promise = global.Promise;
//mongoose.connect(dbConfig.db).then(() => {
mongoose.connect(configDB).then(() => {
console.log('Database successfully connected!')
//app.listen(8000,()=>console.log("i'm Listenning"))
},
error => {
	console.log('Could not connect to database : ' + error)
}
)

//server static files from the react app
app.use(express.static('Client/build'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));
app.use(cors());
app.use('/students', studentRoute)
app.use('/teachers',teacherRoute)
app.use('/api/teachers',teacherRoute);
app.use('/api/students',studentRoute);
// PORT
const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
console.log('Connected to port ' + port)
})

// 404 Error
app.use((req, res, next) => {
res.status(404).send('Error 404!')
});

app.use(function (err, req, res, next) {
console.error(err.message);
if (!err.statusCode) err.statusCode = 500;
res.status(err.statusCode).send(err.message);
});


app.get('/api/ROUTE',(res,req)=>{


});

/*app.get('*', (req,res)=>{
	const index = path.join(__dirname, 'Client/build', 'index.html');
	res.sendFile(index);
});*/
/*if (process.env.PORT) {
    app.use(express.static(path.resolve(process.cwd(), 'Client/build/index.html')))
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(process.cwd(), 'Client/build/index.html'))
    })
  }
*/
