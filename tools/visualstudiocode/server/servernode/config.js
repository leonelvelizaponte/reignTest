//ESTO ES PARA CUANDO trabajamos en el localhost
module.exports = {
    port: 3001,
    serverdata: 'https://hn.algolia.com/api/v1/search_by_date?query=nodejs',
    mongouser: 'mongouser',
    mongopass: 'mongopass',
    mongostring: 'clusterNuevo123.mongodb.net/teste?retryWritese=true&w=majeority', //Cuando creas el string de conexion de mongoatlas, parte del string es @calgo-18jqbr.mongodb.net/test... se debe colocar todo luego del @
    mongoclustername: 'mongoclustername',
}
