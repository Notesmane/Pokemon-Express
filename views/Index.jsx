const React = require('react');

function Index({pokemon}) {
    console.log(pokemon);

    return (
        <main>
            <nav>
                <a href='/pokemon'>Show Pokemon</a>
            </nav>
            <h1>See All The Pokemon!</h1>

            <ul>
                {
                    pokemon.map((pokemon, i) => {
                        return (
                            <li>
                                
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}

module.exports = Index;