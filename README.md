# reignTest
Repo de GitHub para las pruebas de Reign

## Estructura
Este repo consta de una estructura tools y doc, donde para el flujo de tools, estará separado por la herramienta en donde se trabajo cada proyecto, seguidamente, encontraremos las carpetas del client-side y server-side.

*-server:*
Se trata de un servicio desarrollado en node, el cual tiene multiples funcionalidades, la primera es la de consultar a la api https://hn.algolia.com/api/v1/search_by_date?query=nodejs que retornará data relacionadas a articulos escritos por usuarios, luego, el servicio, debe conectarse con la base de datos, que es MongoDB Atlas y guardar los datos que trajo de la primera llamada, asimismo, el servicio cada hora, actualiza los datos contenidos en la base de datos y tiene endpoints para la consulta de los mismos

*-client:*
Se trata del front-end desarrollado en Angular8 donde se debe listar los articulos que tenemos guardados en la base de datos. Y al colocarnos sobre ellos, poder visualizar el icono de borrar, para su eventual eliminación.

## Pre-requisitos
- Ultima versión de Node instalada
- npm instalado
- Cuenta activa en mongoatlas
- nodemon instalado (https://www.npmjs.com/package/nodemon)

## Instalación
La instalación debe hacerse en la secuencia que se establece en la siguiente parte

### MongoDB Atlas
- Se debe crear un cluster y guardar el nombre en tools/visualstudiocode/server/servernode/config.js en la variable *mongoclustername*
- Crear usuario y contraseña y colocarlos en tools/visualstudiocode/server/servernode/config.js en la variable *mongouser* y *mongopass*
- Crear url de conexion y copiar todo el string luego del @ en tools/visualstudiocode/server/servernode/config.js en la variable *mongostring*
- Agregar la Ip del computador donde se esta instalando al ip-whitelist de mondoDB Atlas

### Server
Leer el instructivo en doc/server.txt

### Client
Leer el instructivo en doc/client.txt

### CONTACTO
Cualquier duda pueden escribirme a leonelvelizaponte@gmail.com


### Anotaciones
- El cliente puede parametrizarse (si hubieran mas rutas a las cuales llaman, se podria proporcionar un archivo file.conf donde se podrian manejar de mejor manera las url)
- El borrado, solo ocurre visualmente, ya que no hay llamado a Base de Datos, esto puede mejorarse agregando un flag de eliminación para poder manejar luego la duplicaciòn de los datos con las llamadas que hace el servicio cada hora
