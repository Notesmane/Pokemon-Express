// require express
// set express()to a variable
// set a variable of portto 3000
// set your app to listen to the port and include a console.log(), so that you can tell when your server is running
// include a get route /that will res.send('Welcome to the Pokemon App!');so that when you got to localhost:3000, you will see Welcome to the Pokemon App!

const express = require('express');


const app = express();
const PORT = 3000;

app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

app.get('/', (req, res) => {
    console.log(req.method, req.url);
    next();
})

// route to make sure everything is working
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
});














app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})