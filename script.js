async function main(nomeDigitado) {

    infos.innerHTML = ''
    img_pokemon.setAttribute('src', ''); img_pokemon_shiny.setAttribute('src', '')

    const nome = nomeDigitado
        .trim()
        .toLowerCase()  // remove acentos: "Pokémon" -> "pokemon"
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove pontos e apóstrofos: "Mr. Mime" -> "Mr Mime"
        .replace(/[.']/g, '')                              // espaços viram hífen: "mr mime" -> "mr-mime"
        .replace(/\s+/g, '-')

        if (nomeDigitado === '') {
        return null
    }

    try {
        
        botao.setAttribute('disabled', '')
        botao.textContent = 'Carregando'

        const pokedex = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`) 
        
        if (!pokedex.ok) {
            
            if (pokedex.status === 404 || pokedex.status === 400) {
                console.log(`HTTP ${pokedex.status}`)
                input.value = '❌Pokemon não encontrado'
                botao.removeAttribute('disabled', '')
                botao.textContent = 'Encontrar'
            }

            else {
            input.value = '❌Ocorreu um erro'
            botao.removeAttribute('disabled', '')
            botao.textContent = 'Encontrar'
            throw new Error(`HTTP ${pokedex.status}`)
            }
        }
        
        retangulo.removeAttribute('hidden', '')
        const pokemon = await pokedex.json()
        
        const linhas = [
            `Nome: ${capitalize(pokemon.name)}`,
            `Tipo: ${capitalize(pokemon.types[0].type.name)}`,
            `Pontos de Vida: ${pokemon.stats[0].base_stat}❤️`,
            `Pontos de Ataque: ${pokemon.stats[1].base_stat}⚔️`,
            `Pontos de Defesa: ${pokemon.stats[2].base_stat}🛡️`,
            `Velocidade: ${pokemon.stats[5].base_stat}💨`,
        ]

        for (const texto of linhas) {
            const elemento = document.createElement('ul')
            elemento.textContent = texto
            infos.append(elemento)
        }

        img_pokemon.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`)
        img_pokemon_shiny.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${pokemon.id}.png`)
        botao.removeAttribute('disabled', '')
        botao.textContent = 'Encontrar'
        input.value = '✅ Encontrado com sucesso!'
    }

    catch (error) {
        console.log(error)
        input.value = '❌Ocorreu um erro'
        botao.removeAttribute('disabled', '')
        botao.textContent = 'Encontrar'
    }
}

function capitalize(str) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const botao = document.querySelector('#botao')
const input = document.querySelector('#input')
const infos = document.querySelector('#infos')
const img_pokemon = document.querySelector('#img_pokemon')
const img_pokemon_shiny = document.querySelector('#img_pokemon_shiny')
const retangulo = document.querySelector('#retangulo')

botao.addEventListener('click', () => main(input.value))
