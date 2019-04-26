* Instalar las dependencias de Next.
    npm install next react react-dom

* Crear los scripts para correr el proyecto en dev y prod, esto se realiza en package.json:
    "dev":"next",
    "build":"next build",
    "start":"next start"

NOTA: Next ya tiene pre-configuraciones que facilitan el desarrollo y la ejecución del código, no necesariamente igual a React

* Para poder utilizar la función fetch en node.js:
    npm add isomorphic-fetch

NOTA: Si queremos utilizar una función que no está en node.js, podemos intentar buscar el paquete que comienza con 'isomorphic' y el nombre de la función.

* Para diseñar las rutas URL: https://github.com/fridays/next-routes
    npm install next-routes

* Para utilizar slugify
    npm install slugify

* Para implementar un loader al momento de cargar una página
    npm install nprogress

* Para publicar la aplicaicón en NOW
    npm install -g now
    Lugo de instalar lo anterior, ejecutar: now --public
