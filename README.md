# api-con-sql-react
Página que toma datos de una base de datos de MySQL y los utiliza en front-end, desarrollado con React

En el archivo "Demostración del funcionamiento.mp4" se puede ver la aplicación en funcionamiento, tanto 
la api con los datos de la base MySQL como la aplicación de React que interactúa con la misma.

Para que el proyecto funcione correctamente, debe existir una base de datos MySQL creada, en el puerto 
3306, el usuario debe ser "root", la contraseña, "contrasena", y la base de datos, "discos". Además esa
base de datos debe estar seleccionada en MySQL workbench (mediante el comando "use discos;") Además, en 
dicha base de datos debe existir una tabla con título "new_table", con columnas id (primary key,
autoincremental), titulo, artista y fecha. También se pueden modificar esos valores en los archivos 
"rutas.js" y "server.js".

Una vez configurada la base de datos, se debe iniciar la API de la carpeta "back" y la aplicación de 
React, en la carpeta "front". Es posible iniciar ambas con el comando "npm run start" en consola, dentro 
de las respectivas carpetas.
