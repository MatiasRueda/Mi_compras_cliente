# Mi compras cliente
![Static Badge](https://img.shields.io/badge/Estado%20-%20Terminado%20-%20green)

## Introducción
Proyecto personal para aplicar mis conocimientos en React Typescript. </br>
La pagina ofrece al cliente la posibilidad de comprar los distintos productos ( algunos en oferta ), se puede crear un usuario y se puede modificar, canjear a través de puntos ( que se consiguen con las compras ) y además también poder suscribirse. 

## Tipo de proyecto
Proyecto individual.

## Capturas de pantalla
<img src="https://i.postimg.cc/zfN3FLXf/Mi-Compras.png"/>

## Estrategias
### Smart y Dumb Component
Se separaron los componentes que se utilizan en el proyecto en smart  y dumb component según la responsabilidad que tengan. Esto lo hice con el objetivo de obtener un código mas conciso y una mejor legibilidad </br> 
Smart:  Tendrán la lógica del componente, operaciones complejas , gestionan eventos y acciones del usuario.</br>
Dumb: No manejan la lógica, se encargan únicamente de la presentación.

### Carpeta Auxiliar
En esta carpeta guardo distintos types o variables constantes que usare a lo largo de todo el proyecto, de esta forma evito repetir código y con las variable contantes definidas evito tener cadenas mágicas 

### Test
Realizo varios test automaticos sobre distintos componentes. Estos test los hice con el fin de poder realizar cambios sobre estos componentes (refactorizarlos) y luego asegurarme que todos los componentes funcionen de la misma forma.

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
Antes de descargar o clonar el repositorio es necesario que usted instale Node (https://nodejs.org/en). </br>
Una vez descargado o clonado el repositorio, abra la terminal en la ruta donde se encuentra el proyecto y escriba el siguiente comando.
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

</br>

> [!NOTE]
> Tanto el servidor como la base de datos pueden ser lentas. Porfavor tenga paciencia.
