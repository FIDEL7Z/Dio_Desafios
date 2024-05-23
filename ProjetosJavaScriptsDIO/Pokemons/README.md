# Pokédex

## Descrição

Esta é uma Pokédex criada utilizando JavaScript, CSS e a API PokeAPI. Ela permite visualizar informações sobre todos os Pokémon de todas as gerações, utilizando paginação para facilitar a navegação.

## Recursos

- **API PokeAPI:** Utiliza a API oficial de Pokémon para obter informações sobre os Pokémon, incluindo estatísticas, tipos, habilidades, etc.
- **JavaScript:** O JavaScript é usado para consumir a API, modelar os dados e criar a funcionalidade de paginação.
- **CSS com animações:** O CSS é utilizado para estilizar a Pokédex, incluindo animações para tornar a experiência mais dinâmica e atraente.
- **Responsivo:** A Pokédex é responsiva, o que significa que é otimizada para visualização em dispositivos móveis, tablets e desktops.
- **Paginação:** A funcionalidade de paginação permite navegar facilmente entre os diferentes Pokémon de todas as gerações.

## Como usar

1. Clone este repositório em sua máquina local.
2. Abra o arquivo `index.html` em seu navegador da web.
3. Navegue pela Pokédex usando os controles de página e barra de rolagem.
4. Explore as informações detalhadas de cada Pokémons.

## Exemplo de código

```javascript
// Exemplo de código JavaScript para consumir a API PokeAPI e exibir informações sobre um Pokémon

pokeApi.getPokemons = async (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
            
    return fetch(url)
                .then((response)=> response.json())
                .then((jsonBody)=> jsonBody.results)
                .then((pokemons)=> pokemons.map(pokeApi.getPokemonsDetails ))
                .then((detailRequests)=> Promise.all(detailRequests))
                .then((pokemonsDetails)=>pokemonsDetails)
}


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.types[0]}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class="types">
                         ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}" 
                         alt="${pokemon.name}">
                </div>
            </li>
        `).join('');
        pokemonList.innerHTML += newHtml;
    });
}
