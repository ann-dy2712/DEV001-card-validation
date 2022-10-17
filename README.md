# Tarjeta de crédito válida

## 1. Proyecto

Proyecto enfocado  en validación de tarjetas de crédito mediante el Algoritmo de Lunh. El Algoritmo de Luhn,
también llamado algoritmo de módulo 10, es un método de suma de verificación, se utiliza para validar números de identificación; como el IMEI de los celulares, tarjetas de crédito, etc.
En el proyecto se utiliza HTML, CSS y Javascript, cuenta con una interfaz donde se pueden ingresar los datos de cualquier tarjeta de crédito para adquirir una membresía la cuál permite tener el privilegio de comprar productos de cuidado personal de una marca distribuidora. Al momento de ingresar los datos de cualquier tarjeta de crédito y darle a ¨Obtener membresía se despliega una alerta que indica si la compra fue exitosa o rechazada, aqui es donde se realiza la función isValid, no se permite ingresar menos de 13 dígitos ni más de 16 y solo permite valores númericos, luego de esto gracias a la función Maskify se enmascaran todos los dígitos de la tarjeta excepto los últimos 4. También se ejecuta la función de detección de Franquicia, si inicia con 4 es Visa, si inicia con 5 es Mastercard. [![Editando-DEV001-card-validation-README-md-en-principal-ann-dy2712-DEV001-card-validation-Google.png](https://i.postimg.cc/9Q7JGjnQ/Editando-DEV001-card-validation-README-md-en-principal-ann-dy2712-DEV001-card-validation-Google.png)](https://postimg.cc/k27QmLC0)





## 2. Prototitpo

Se realiza Protipo en la plataforma Figma, este prototipo no se siguió en su totalidad ya que al momento de crear la interfaz por practicidad se le realizaron cambios. 
https://www.figma.com/file/CjIaEZzToUZSRI18a0Mpqn/Untitled?node-id=0%3A1


## 3. Público Objetivo

El proyecto va dirigido a personas de cualquier edad que desean adquirir una membresía de descuento para invertir en productos para el cuidado de la salud y maquillaje a precio de mayorista, se les otorga un 45% de descuento al adquirir la membresía en la marca distribuidora Andy cosmetics.


## 4. ¨Problemas que resuelve

Te ayuda a generar ganancias de manera inmediata, ya que el cuidado personal y maquillaje siempre es un mercado muy redituable .


***

## 5. Consideraciones técnicas
El boilerplate sobre el cual se trabajó y de realizaron las modificaciones es el siguiente.


```text
./
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── README.md
├── package.json
├── src
│   ├── validator.js
│   ├── index.html
│   ├── index.js
│   └── style.css
└── test
    ├── .eslintrc
    └── validator.spec.js
```


### Descripción de scripts / archivos

* `README.md`: debe explicar la información necesaria para el uso de tu aplicación web,
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.
* `src/index.html`: este es el punto de entrada a tu aplicación. Este archivo
  debe contener tu _markup_ (HTML) e incluir el CSS y JavaScript necesario.
* `src/style.css`: este archivo debe contener las reglas de estilo. Queremos que escribas tus
propias reglas, por eso NO está permitido el uso de frameworks de CSS (Bootstrap, Materialize, etc).
* `src/validator.js`: acá debes implementar el objeto `validator`, el cual ya está
  _exportado_ en el _boilerplate_. Este objeto (`validator`) debe contener dos
  métodos:
  - `validator.isValid(creditCardNumber)`: `creditCardNumber` es un `string`
     con el número de tarjeta que se va a verificar. Esta función debe retornar un
     `boolean` dependiendo si es válida de acuerdo al [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn).
  - `validator.maskify(creditCardNumber)`: `creditCardNumber` es un `string` con
    el número de tarjeta y esta función debe retornar un `string` donde todos menos
    los últimos cuatro caracteres sean reemplazados por un numeral (`#`) o 🐱.
    Esta función deberá siempre mantener los últimos cuatro caracteres intactos, aún
    cuando el `string` sea de menor longitud.

    Ejemplo de uso

    ```js
    maskify('4556364607935616') === '############5616'
    maskify(     '64607935616') ===      '#######5616'
    maskify(               '1') ===                '1'
    maskify(               '')  ===                ''
    ```
* `src/index.js`: acá debes escuchar eventos del DOM, invocar `validator.isValid()`
  y `validator.maskify()` según sea necesario y actualizar el resultado en la UI (interfaz de usuario).
* `test/validator.spec.js`: este archivo contiene algunos tests de ejemplo y acá
  tendrás que implementar los tests para `validator.isValid()` y `validator.maskify()`.

El _boilerplate_ incluye tareas que ejecutan [eslint](https://eslint.org/) y
[htmlhint](https://github.com/yaniswang/HTMLHint) para verificar el `HTML` y
`JavaScript` con respecto a una guías de estilos. Ambas tareas se ejecutan
automáticamente antes de ejecutar las pruebas (tests) cuando usamos el comando
`npm run test`. En el caso de `JavaScript` estamos usando un archivo de
configuración de `eslint` que se llama `.eslintrc` que contiene un mínimo de
información sobre el parser que usar (qué version de JavaScript/ECMAScript), el
entorno (browser en este caso) y las [reglas recomendadas (`"eslint:recommended"`)](https://eslint.org/docs/rules/).
En cuanto a reglas/guías de estilo en sí,
usaremos las recomendaciones _por defecto_ de tanto `eslint` como `htmlhint`.
