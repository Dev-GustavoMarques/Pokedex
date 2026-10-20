

async function main(pokemon) {


    try {
        const pokedex = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`) 
    }

    catch (error) {
        console.log(error)
    }

}


