# API falsa

Para fortalecer los conceptos de hacer nuestra propia API, vamos a crear una API que genere un usuario aleatorio en una solicitud GET. Utilizaremos Postman para hacer nuestras solicitudes GET.

En esta tarea, usaremos 2 bibliotecas javascript para crear una API simple que genere un Usuario y/o Compañía dependiendo de la ruta:

-   Express (servidor)
-   Faker (generador de datos falsos)
    Sigue adelante y ejecuta la lista de verificación a continuación utilizando las 2 clases a continuación:

#### class Usuario

-   \_id
-   apellido
-   primer nombre
-   número de teléfono
-   Email
-   contraseña

#### class Empresa

-   \_id
-   nombre
-   dirección
-   calle
-   ciudad
-   estado
-   código postal
-   país

## Faker

La biblioteca faker tiene una tonelada de métodos que podemos usar para llenar campos específicos con datos generados aleatoriamente. Consulta la documentación de Faker y busca entre los métodos para elegir los que usarías para completar cada campo.

### Aquí hay un ejemplo de cómo podemos usar faker

```bash
class Product {
  constructor() {
    this.name = faker.commerce.productName();
    this.price = "$" + faker.commerce.price();
    this.department = faker.commerce.department();
  }
}
```

## Indicaciones

-   Crea una nueva carpeta de proyecto "Faker_API" y con su terminal, navega a tu nueva carpeta

-   Crea un archivo package.json usando el comando "npm init -y" en tu terminal

-   Instala express y faker

-   Crear un archivo server.js

-   En tu archivo server.js, importa express y faker

-   Crea 2 clases: Usuario, Empresa con los mismos atributos que se enumeran arriba

-   Crea una ruta api "/api/users/new" que devuelva un nuevo usuario

-   Crea una ruta api "/api/companies/new" que devuelva una nueva compañía

-   Crea una ruta api "/api/user/company" que devuelva tanto un nuevo usuario como una nueva compañía

-   Ejecuta tu archivo server.js usando nodemon

-   Usando Postman, prueba tus nuevas rutas GET
