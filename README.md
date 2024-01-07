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

## Capturas de pantalla
<img src="https://i.postimg.cc/Qd2dxFWb/Memotest1.png"/>
<img src="https://i.postimg.cc/4NvDhnMP/Memotest2.png"/>

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
Antes de descargar o clonar el repositorio es necesario que usted instale Node (https://nodejs.org/en).
Una vez descargado o clanado el repositorio, abra la terminal en la ruta donde se encuentra el proyecto y escriba el siguiente comando.
```
npm i
```
Esto instalara las dependencias que necesite el proyecto


## Uso
En caso de haber seguido los pasos de la instalación solo debe ejecutar el siguiente comando:
```
npm run dev
```
y dirigirse a la dirección que se muestra en consola

Para poder correr los test escriba el siguiente comando:
```
npm run test
```
En caso de saltarse los paso de instalación y querer probar el proyecto en linea visitar el siguiente link: https://sprightly-bienenstitch-598a97.netlify.app

> [!NOTE]
> Tanto el servidor como la base de datos pueden ser lentas. Porfavor tenga paciencia.
