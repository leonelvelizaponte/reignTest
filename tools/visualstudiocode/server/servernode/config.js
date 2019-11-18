//ESTO ES PARA CUANDO trabajamos en el localhost
module.exports = {
    port: 3001,
    serverdata: 'https://hn.algolia.com/api/v1/search_by_date?query=nodejs',
    mongouser: 'atlasAdmin',
    mongopass: 'atlasAdmin',
    mongostring: 'cluster0-8gtfa.mongodb.net/test?retryWrites=true&w=majority', //Cuando creas el string de conexion de mongoatlas, parte del string es @calgo-18jqbr.mongodb.net/test... se debe colocar todo luego del @
    mongoclustername: 'Cluster0',
}