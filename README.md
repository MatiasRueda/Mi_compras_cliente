# Mi compras cliente
![Static Badge](https://img.shields.io/badge/Estado%20-%20Terminado%20-%20green)

## Introducción
Proyecto personal para aplicar mis conocimientos en React Typescript, patrón en componentes ( Smart y Dumb components ) y Jest. Además de utilizar nuevas dependencias ( framer-motion, entre otras... ). La pagina ofrece al cliente la posibilidad de comprar los distintos productos ( algunos en oferta ), se puede crear un usuario y se puede modificar, canjear a través de puntos ( que se consiguen con las compras ) y además también poder suscribirse. 

## Tipo de proyecto
Proyecto individual.

## Tecnologías utilizadas
  - React
  - CSS
  - Typescript
  - Jest

## Estructura 

```
Mi_compras_cliente
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ App.tsx
│  ├─ asset
│  │  └─ style
│  │     ├─ App.css
│  │     ├─ Busqueda.css
│  │     ├─ Canje.css
│  │     ├─ Carrito.css
│  │     ├─ Footer.css
│  │     ├─ Header.css
│  │     ├─ Ingresar.css
│  │     ├─ Inicio.css
│  │     ├─ Novedades.css
│  │     ├─ Perfil.css
│  │     ├─ ProductoDetalles.css
│  │     ├─ Registrarse.css
│  │     └─ Suscripciones.css
│  ├─ auxiliar
│  │  ├─ encontrarOfertas.ts
│  │  ├─ mensajes.ts
│  │  ├─ path.ts
│  │  └─ type.ts
│  ├─ component
│  │  ├─ animation
│  │  │  ├─ AFade.tsx
│  │  │  ├─ ALayout.tsx
│  │  │  ├─ AProducto.tsx
│  │  │  ├─ ASeccion.tsx
│  │  │  ├─ ASliderOfertas.tsx
│  │  │  └─ ASlideShow.tsx
│  │  ├─ dumb
│  │  │  ├─ DAyuda.tsx
│  │  │  ├─ DCanje.tsx
│  │  │  ├─ DCarrito.tsx
│  │  │  ├─ DCompras.tsx
│  │  │  ├─ DDescuento.tsx
│  │  │  ├─ DInfo.tsx
│  │  │  ├─ DInfoUsuario.tsx
│  │  │  ├─ DNovedad.tsx
│  │  │  ├─ DNumeroPagina.tsx
│  │  │  ├─ DOferta.tsx
│  │  │  ├─ DOfertas.tsx
│  │  │  ├─ DOpcion.tsx
│  │  │  ├─ DPrecio.tsx
│  │  │  ├─ DPrecioDescontado.tsx
│  │  │  ├─ DProducto.tsx
│  │  │  ├─ DProductoCompra.tsx
│  │  │  ├─ DProductoDetalles.tsx
│  │  │  ├─ DRedes.tsx
│  │  │  ├─ DSugerencia.tsx
│  │  │  └─ DSuscripcion.tsx
│  │  └─ smart
│  │     ├─ SActulizarInfoUsuario.tsx
│  │     ├─ SBusqueda.tsx
│  │     ├─ SCanjes.tsx
│  │     ├─ SCarga.tsx
│  │     ├─ SCarrito.tsx
│  │     ├─ SCompras.tsx
│  │     ├─ SDescuentos.tsx
│  │     ├─ SFormulario.tsx
│  │     ├─ SFormularioActualizar.tsx
│  │     ├─ SFormularioBusqueda.tsx
│  │     ├─ SFormularioLogin.tsx
│  │     ├─ SFormularioRegister.tsx
│  │     ├─ SInformacion.tsx
│  │     ├─ SIngresar.tsx
│  │     ├─ SInput.tsx
│  │     ├─ SNavs.tsx
│  │     ├─ SNovedades.tsx
│  │     ├─ SOfertas.tsx
│  │     ├─ SOpciones.tsx
│  │     ├─ SPerfil.tsx
│  │     ├─ SPrecio.tsx
│  │     ├─ SProductoDetalles.tsx
│  │     ├─ SProductoEspecifico.tsx
│  │     ├─ SProductos.tsx
│  │     ├─ SRegistrarse.tsx
│  │     ├─ SRoutes.tsx
│  │     ├─ SSuscripcion.tsx
│  │     └─ SVerificar.tsx
│  ├─ hook
│  │  ├─ useEnviarSolicitud.ts
│  │  ├─ useObtenerInformacion.ts
│  │  └─ useScrollTop.ts
│  ├─ main.tsx
│  ├─ page
│  │  ├─ Busqueda.tsx
│  │  ├─ Canjes.tsx
│  │  ├─ Carrito.tsx
│  │  ├─ Footer.tsx
│  │  ├─ Header.tsx
│  │  ├─ Ingresar.tsx
│  │  ├─ Inicio.tsx
│  │  ├─ Novedades.tsx
│  │  ├─ Perfil.tsx
│  │  ├─ ProductoDetalles.tsx
│  │  ├─ Registrarse.tsx
│  │  └─ Suscripciones.tsx
│  └─ test
│     ├─ aulixiliar
│     │  └─ ejemplos.ts
│     └─ Component
│        ├─ Carrito.test.tsx
│        ├─ Compras.test.tsx
│        ├─ Descuentos.test.tsx
│        ├─ FormularioBusqueda.test.tsx
│        ├─ FormularioLogin.test.tsx
│        ├─ FormularioRegister.test.tsx
│        ├─ InfoUsuario.test.tsx
│        ├─ Novedad.test.tsx
│        ├─ Oferta.test.tsx
│        ├─ Ofertas.test.tsx
│        ├─ Precio.test.tsx
│        ├─ PrecioDescontado.test.tsx
│        ├─ ProductoDetalles.test.tsx
│        ├─ Redes.test.tsx
│        ├─ Sugerencias.test.tsx
│        └─ Suscripcion.test.tsx
├─ tsconfig.json
├─ tsconfig.node.json
├─ tsconfig.spec.json
└─ vite.config.ts

```

## Instalación 
Es necesario instalar nodeJS, para eso es necesario ir a la siguiente pagina y descargarlo:
https://nodejs.org/en

Una vez clonado el repositorio o descargado el zip ( y después de extraerlo ). 
Abrir la terminal en la carpeta donde se clono ( o se extrajo ) y escribir el siguiente comando.
```
npm i
```
Esto instalara las dependencias que el proyecto necesita


## Uso
Para poder utilizar el proyecto es necesario tener una conexión a un server , que a su vez tenga conexión a una base de datos y aplicar el siguiente comando:
```
npm run dev
```
Para poder correr los test escriba el siguiente comando:
```
npm run test
```
En caso de querer ver la pagina con server incluido y poder comprar: https://sprightly-bienenstitch-598a97.netlify.app

> [!NOTE]
> Tanto el servidor como la base de datos pueden ser lentas. Porfavor tenga paciencia.
