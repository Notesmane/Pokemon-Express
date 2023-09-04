const React = require('react');

function Show(props) { // or you can do: 
    //    Show(props) {
      const {poke} = props; // these are the same things
    return(
        <main>
            <h1>Show Fruit Page</h1>

            The {fruit.name} is {fruit.color}
            {fruit.readyToEat ? " Its ready to eat!" : "It is not ready to eat... Cant touch this"} 
        </main>
    )
}

// this is the export system for Node.js
module.exports = Show; 