export const Categorias = [
  {
    "id": 1,
    "categoria": "televisores"
  },
  {
    "id": 2,
    "categoria": "computadoras"
  },
  {
    "id": 3,
    "categoria": "Notebooks"
  },
  {
    "id": 4,
    "categoria": "celulares"
  },
  {
    "id": 5,
    "categoria": "Tablets"
  },
  {
    "id": 6,
    "categoria": "Componentes",
    "subCategoria": ["motherboard", "tarjeta grafica", "ram", "procesadores", "fuente de energia", "almacenamiento", "gabinetes", "refrigeracion"]
  },
  {
    "id": 7,
    "categoria": "Perifericos",
    "subCategoria": ["teclado", "mouse", "auriculares", "camara", "microfono", "almacenamiento portatil", "mousepad", "parlantes"]
  },
  {
    "id": 8,
    "categoria": "Monitores"
  },
  {
    "id": 9,
    "categoria": "Impresoras"
  },
  {
    "id": 10,
    "categoria": "Accesorios",
    "subCategoria": ["cables", "cargadores", "hub usb"]
  },
  {
    "id": 11,
    "categoria": "Sillas"
  }
]

const Productos = [
  {
    "id": 1,
    "titulo": "Pc AMD Ryzen 3 3200g 8Gb SSD 240",
    "descripcion": "PC ideal para uso hogareño y de oficina, excelente relación entre precio y potencia.",
    "precio": 259990,
    "categoria": "Computadoras",
    "imagenPrincipal": "computadoras/compu-1.jpg"
  },
  {
    "id": 2,
    "titulo": "Pc Intel I3 10105 SSD 240Gb 8Gb",
    "descripcion": "Esta PC es ideal para una estación de trabajo en la oficina o estudios en el hogar. Potenciada con un SSD para darte la mejor velocidad y rendimiento en cualquiera sea la tarea que realices. Procesador Intel Core i3 para múltiples tareas sin relantizar el sistema. ",
    "precio": 359990,
    "categoria": "Computadoras",
    "imagenPrincipal": "computadoras/compu-2.jpg",
  },
  {
    "id": 3,
    "titulo": "Pc AMD Ryzen 5 5600GT 8Gb SSD 240Gb",
    "descripcion": "Esta PC ​está equipada con la última generación de procesadores AMD Ryzen. Con notables mejoras en el rendimiento, optimización de consumos y un grán soporte a largo plazo que te permite actualizar tu equipo por más tiempo. Utilizá esta Pc para editar imágenes, jugar, producir contenido y más.",
    "precio": 438889,
    "categoria": "Computadoras",
    "imagenPrincipal": "computadoras/compu-3.jpg",
  },
  {
    "id": 4,
    "titulo": "Pc AMD Ryzen 3 3200g 8Gb SSD 240Gb + Monitor 22",
    "descripcion": "Este equipo posee armado realizado por Venex. Debe contemplar una demora de entrega adicional de 24hs luego de realizar el pedido y pago de la misma",
    "precio": 409990,
    "categoria": "Computadoras",
    "imagenPrincipal": "computadoras/compu-4.jpg",
  },
  {
    "id": 5,
    "titulo": "Pc AMD Gamer Kairos Essential Ryzen 5 5600GT 16Gb SSD 480Gb",
    "descripcion": "Descubre la potencia de la PC AMD Gamer Kairos Essential: diseñada para ofrecerte una experiencia de juego inigualable. Equipada con un procesador Ryzen 5 5600GT, 16GB de RAM y un SSD de 480GB, esta máquina está lista para llevar tus juegos al siguiente nivel. Disfruta de gráficos impresionantes, tiempos de carga ultrarrápidos y un rendimiento fluido en cada partida. ¡Hazte con la Kairos Essential y domina el campo de batalla!",
    "precio": 459990,
    "categoria": "Computadoras",
    "imagenPrincipal": "computadoras/compu-5.jpg",
  },
  {
    "id": 6,
    "titulo": "Con dimensiones realmente diminutas y poco más de medio kilo, las Mini PCs Banghó Cubic presentan un diseño ultracompacto y moderno, que complementa cualquier oficina, hogar o punto de venta.",
    "precio": 577489,
    "categoria": "Computadoras",
    "imagenPrincipal": "computadoras/compu-6.png",
  },
  {
    "id": 7,
    "titulo": "PC AIO Lite Bangho E27 i3 12100 8Gb SSD 480Gb 27 W11",
    "descripcion": "All In One Banghó Lite E27 I3, ofrece la mejor experiencia visual con resolución Full HD de 27. Equipado con un Procesador Intel Core i3 de 12ava Generación, 8GB de RAM, disco sólido de 480Gb y Windows 11 Home.",
    "precio": 849990,
    "categoria": "Computadoras",
    "imagenPrincipal": "computadoras/compu-7.png",
  },
  {
    "id": 8,
    "titulo": "Pc Intel i9 12900 16Gb SSD 240Gb + Monitor 22",
    "descripcion": "Este equipo posee armado realizado por Venex. Debe contemplar una demora de entrega adicional de 24hs luego de realizar el pedido y pago de la misma.",
    "precio": 1039990,
    "categoria": "Computadoras",
    "imagenPrincipal": "computadoras/compu-8.jpg",
  },
  {
    "id": 9,
    "titulo": "Mini PC Asus Core i5 1135G7 Barebone",
    "descripcion": "La mini PC ASUS PN63-S1 ofrece un rendimiento potente en un formato compacto. Ideal para espacios reducidos y tareas multitarea exigentes.",
    "precio": 843149  ,
    "categoria": "Computadoras",
    "imagenPrincipal": "computadoras/compu-9.png",
  },
  {
    "id": 10,
    "titulo": "Pc AMD Ryzen 5 8600G 32Gb SSD 480Gb",
    "descripcion": "Este equipo posee armado realizado por Venex. Debe contemplar una demora de entrega adicional de 24hs luego de realizar el pedido y pago de la misma.",
    "precio": 739189,
    "categoria": "Computadoras",
    "imagenPrincipal": "computadoras/compu-10.jpg",
  },
  {
    "id": 11,
    "titulo": 'Notebook Geobook Celeron N4500 4Gb 128Gb 14.1 W11 + Headset +...',
    "descripcion": "El GeoBook 14X cuenta con 4 GB de RAM DDR4 y una CPU Intel Jasperlake N4500 con una GPU integrada. Esta combinación garantiza no solo un rendimiento fluido y con capacidad de respuesta para juegos, sino también una multitarea eficiente para tareas escolares y proyectos.",
    "precio": 279990,
    "categoria": "Notebooks",
    "imagenPrincipal": "notebooks/note-1.jpg",
  },
  {
    "id": 12,
    "titulo": 'Notebook Noblex Celeron N4020C 4Gb 128Gb 14.1 HD W11',
    "descripcion": "Si buscas una Notebook potente y confiable este modelo es ideal para vos, con su procesador Intel Celeron y su generosa capacidad de almacenamiento, esta computadora portátil te brinda un rendimiento excepcional para todas tus tareas diarias.",
    "precio": 339990,
    "categoria": "Notebooks",
    "imagenPrincipal": "notebooks/note-2.jpg",

  },
  {
    "id": 13,
    "titulo": 'Notebook Asus E410MA Intel Celeron N4020 4Gb 128Gb EMMC 14 HD...',
    "descripcion": "¡Dale un impulso a tu productividad con la Notebook Asus E410MA! Equipada con un procesador Intel Celeron N4020, 4GB de RAM y 128GB de almacenamiento eMMC, esta notebook es perfecta para tus tareas diarias y mucho más. Su pantalla de 14 pulgadas HD te ofrece una experiencia visual clara y vibrante, mientras que el sistema operativo Windows 11 te brinda las últimas innovaciones en tecnología y seguridad.",
    "precio": 389990,
    "categoria": "Notebooks",
    "imagenPrincipal": "notebooks/note-3.jpg",

  },
  {
    "id": 14,
    "titulo": 'Notebook Bangho MAX L5 i3 Intel Core i3 1215U 8Gb SSD 240Gb...',
    "descripcion": "Notebook Bangho MAX L5 con procesador Intel Core i3-1215U, 8GB de RAM, y 240GB SSD. Pantalla de 15.6 ideal para tareas diarias",
    "precio": 589990,
    "categoria": "Notebooks",
    "imagenPrincipal": "notebooks/note-4.jpg",
  },
  {
    "id": 15,
    "titulo": 'Notebook Asus X515EA i3 1115G4 8Gb SSD 256Gb 15.6 Free FHD',
    "descripcion": "La Asus Notebook X515 implementa Las ultimas tecnologias, para que disfrutes de una experiencia de usuario espectacular.",
    "precio": 644990,
    "categoria": "Notebooks",
    "imagenPrincipal": "notebooks/note-5.jpg",
  },
  {
    "id": 16,
    "titulo": 'Notebook HP 250 Intel core i3 1315U 8Gb SSD 256Gb 15.6 Free',
    "descripcion": "Con la Notebook HP 250 G10, disfruta de un rendimiento confiable y eficiente para todas tus tareas diarias. Equipada con un procesador Intel Core i3 1315U, 8GB de RAM y un SSD de 256GB, esta notebook te ofrece la velocidad y capacidad que necesitas para trabajar, estudiar o entretenerte sin interrupciones. Su pantalla de 15.6 pulgadas proporciona una experiencia visual amplia y clara, ideal para cualquier actividad.",
    "precio": 661990,
    "categoria": "Notebooks",
    "imagenPrincipal": "notebooks/note-6.jpg",
  },
  {
    "id": 17,
    "titulo": 'Notebook Lenovo V15 G2 i3 1115G4 8Gb 1Tb 15.6 FHD Free',
    "descripcion": "Disfruta de un rendimiento confiable y eficiente para todas tus tareas diarias.",
    "precio": 675990,
    "cateogria": "Notebooks",
    "imagenPrincipal": "notebooks/note-7.jpg",
  },
  {
    "id": 18,
    "titulo": 'Notebook Bangho MAX L4 i5 1235U 8Gb SSD 480Gb 14 Free',
    "descripcion": "Notebook Bangho MAX con procesador i5, ideal para tareas exigentes, con alto rendimiento y portabilidad.",
    "precio": 704990,
    "categoria": "Notebooks",
    "imagenPrincipal": "notebooks/note-8.jpg",
  },
  {
    "id": 19,
    "titulo": 'Notebook Bangho MAX L5 i5 1235U 8Gb SSD 480Gb 15.6 Free',
    "descripcion": "Notebook Bangho MAX L5 con procesador Intel Core i5-1235U, 8GB de RAM, SSD de 480GB, y pantalla de 15.6. Ideal para rendimiento en tareas diarias",
    "precio": 709990,
    "categoria": "Notebooks",
    "imagenPrincipal": "notebooks/note-9.jpg",
  },
  {
    "id": 20,
    "titulo": 'Notebook Asus Vivobook E1504FA Ryzen 5 7520U 8Gb SSD 256Gb 15.6...',
    "descripcion": "Es ligera. Es compacta. Es ASUS Vivobook Go 15, ¡y está diseñada para que seas productivo y te entretengas allá donde vayas! ",
    "precio": 749990,
    "categoria": "Notebooks",
    "imagenPrincipal": "notebooks/note-10.jpg",
  },
  {
    "id": 21,
    "titulo": 'Notebook Bangho Max L5 i5 1155G7 SSD 240Gb 8Gb 15,6 HD Free',
    "descripcion": "La notebook Banghó Max L5 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.",
    "precio": 759990,
    "categoria": "Notebooks",
    "imagenPrincipal": "notebooks/note-11.jpg",
  },
  {
    "id": 22,
    "titulo": 'Notebook HP Pavilion i5 13-BB0003LA 1135G7 8Gb SSD 256Gb + 16Gb...',
    "descripcion": "Esa sensación sin ataduras hace que la laptop compacta HP Pavilion de 13 sea más fácil de llevar y hace que los retos a lo largo de todo el día sean aún más fáciles de superar, gracias a la larga duración de la batería y la tecnología HP Fast Charg",
    "precio": 799990,
    "categoria": "Notebooks",
    "imagenPrincipal": "notebooks/note-12.jpg",
  },
  {
    "id": 23,
    "titulo": "Smart TV LED 50 Hisense 9150U65H ULED Ultra HD",
    "descripcion": '',
    "precio": 974999,
    "categoria": 'Televisores',
    "imagenPrincipal": "televisores/tele-1.webp",
  },
  {
    "id": 24,
    "titulo": 'TV LED 32" Philco 91PLD32HD23CH',
    "descripcion": '',
    "precio": 314999,
    "categoria": 'Televisores',
    "imagenPrincipal": "televisores/tele-2.webp",
  },
  {
    "id": 25,
    "titulo": 'Smart TV QLED 55" RCA QL55TH100 Ultra HD GOOGLE 4K RV',
    "descripcion": '',
    "precio": 995999,
    "categoria": 'Televisores',
    "imagenPrincipal": 'televisores/tele-3.webp'
  },
  {
    "id": 26,
    "titulo": 'Smart TV LED 50" JVC 91LT-50DA71252A Android TV',
    "descripcion": 'vacio',
    "precio": 741999,
    "categoria": 'Televisores',
    "imagenPrincipal": 'televisores/tele-4.webp'
  },
  {
    "id": 27,
    "titulo": "Smart TV LED 40'' Hisense 40A42K HUltra HD",
    "descripcion": 'vacio',
    "precio": 456999,
    "categoria": 'Televisores',
    "imagenPrincipal": 'televisores/tele-5.webp'
  },
  {
    "id": 28,
    "titulo": 'Smart TV LED 50" Philco 91PLD50US24CH Android TV',
    "descripcion": 'vacio',
    "precio": 749999,
    "categoria": 'Televisores',
    "imagenPrincipal": 'televisores/tele-6.webp'
  },
  {
    "id": 29,
    "titulo": 'Smart TV LED 40" Philco 91PLD40HS24A Vidaa',
    "descripcion": 'vacio',
    "precio": 449999,
    "categoria": 'Televisores',
    "imagenPrincipal": 'televisores/tele-7.webp'
  },
  {
    "id": 30,
    "titulo": 'Smart TV LED 55" RCA G55P6UHD Ultra HD GOOGLE 4K',
    "descripcion": 'vacio',
    "precio": 786999,
    "categoria": 'Televisores',
    "imagenPrincipal": 'televisores/tele-8.webp'
  },
  {
    "id": 31,
    "titulo": 'Smart TV LED 75" TCL 75C655 UHD Google TV-RV',
    "descripcion": 'vacio',
    "precio": 2030999,
    "categoria": 'Televisores',
    "imagenPrincipal": 'televisores/tele-9.webp'
  },
  {
    "id": 32,
    "titulo": 'Smart TV LED 55" TCL QLED 55C655 UHD Google TV-RV',
    "descripcion": 'vacio',
    "precio": '$ 968.999',
    "categoria": 'Televisores',
    "imagenPrincipal": 'televisores/tele-10.webp'
  },
  {
    "id": 33,
    "titulo": 'Smart TV LED 43" Sharp 2T-C43FG6L Full HD',
    "descripcion": 'vacio',
    "precio": 604999,
    "categoria": 'Televisores',
    "imagenPrincipal": 'televisores/tele-11.webp'
  },
  {
    "id": 34,
    "titulo": 'Smart TV LED LG 55" NanoCell 55NANO77SRA',
    "descripcion": 'vacio',
    "precio": 1349999,
    "categoria": 'Televisores',
    "imagenPrincipal": 'televisores/tele-12.webp'
  },
  {
    "id": 35,
    "titulo": 'Celular Motorola E14 6.55" 2/64GB 4G gris',
    "descripcion": '',
    "precio": 199999,
    "categoria": 'Celulares',
    "imagenPrincipal": 'celulares/cel-1.webp'
  },
  {
    "id": 36,
    "titulo": 'Celular Samsung Galaxy S24 FE 6.7" 8/256GB Graphite',
    "descripcion": '',
    "precio": 1499999,
    "categoria": 'Celulares',
    "imagenPrincipal": 'celulares/cel-2.webp'
  },
  {
    "id": 37,
    "titulo": 'Celular Samsung Galaxy Z Fold5 7.6"-6.2" 12+256GB Phantom Black',
    "descripcion": '',
    "precio": 3699999,
    "categoria": 'Celulares',
    "imagenPrincipal": 'celulares/cel-3.webp'
  },
  {
    "id": 38,
    "titulo": 'Celular Samsung Galaxy S24 FE 6.7" 8/256GB Blue',
    "descripcion": '',
    "precio": 1499999,
    "categoria": 'Celulares',
    "imagenPrincipal": 'celulares/cel-4.webp'
  },
  {
    "id": 39,
    "titulo": 'Celular Samsung Galaxy S24 FE 6.7" 8/256GB Gray',
    "descripcion": '',
    "precio": 1499999,
    "categoria": 'Celulares',
    "imagenPrincipal": 'celulares/cel-5.webp'
  },
  {
    "id": 40,
    "titulo": 'Celular Realme Note 50 6.74" 4/64GB midnight black',
    "descripcion": '',
    "precio": 249999,
    "categoria": 'Celulares',
    "imagenPrincipal": 'celulares/cel-6.webp'
  },
  {
    "id": 41,
    "titulo": 'Celular Motorola Edge 50 6.6" 12/256GB Grey',
    "descripcion": '',
    "precio": 199999,
    "categoria": 'Celulares',
    "imagenPrincipal": 'celulares/cel-7.webp'
  },
  {
    "id": 42,
    "titulo": 'Celular Samsung Galaxy A06 6.7" 4/64GB Black',
    "descripcion": '',
    "precio": 999999,
    "categoria": 'Celulares',
    "imagenPrincipal": 'celulares/cel-8.webp'
  },
  {
    "id": 43,
    "titulo": 'Celular Samsung Galaxy A06 6.7" 4/128GB Black',
    "descripcion": '',
    "precio": 239999,
    "categoria": 'Celulares',
    "imagenPrincipal": 'celulares/cel-9.webp'
  },
  {
    "id": 44,
    "titulo": 'Celular TCL 50 PRO NXTPAPER 6.8" 5G 8+8/512GB White',
    "descripcion": '',
    "precio": 599999,
    "categoria": 'Celulares',
    "imagenPrincipal": 'celulares/cel-10.webp'
  },
  {
    "id": 45,
    "titulo": 'Celular TCL 50 PRO NXTPAPER 6.8" 5G 8+8/512GB space gray RV',
    "descripcion": '',
    "precio": 599999,
    "categoria": 'Celulares',
    "imagenPrincipal": 'celulares/cel-11.webp'
  },
  {
    "id": 46,
    "titulo": 'Celular TCL 505 6.75" 4+4/128GB Ocean blue',
    "descripcion": '',
    "precio": 229999,
    "categoria": 'Celulares',
    "imagenPrincipal": 'celulares/cel-12.webp'
  }
]