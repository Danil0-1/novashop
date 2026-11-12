// Inventario académico local. Los precios son ficticios, expresados en COP.
export const PRODUCTS = [
{id:1,name:'Audífonos inalámbricos Pulse',category:'Audio',price:189900,emoji:'🎧',description:'Sonido envolvente y conexión Bluetooth.',tag:'POPULAR'},
{id:2,name:'Teclado mecánico RGB',category:'Periféricos',price:259900,emoji:'⌨️',description:'Interruptores precisos para jugar y crear.',tag:'NUEVO'},
{id:3,name:'Mouse ergonómico Pro',category:'Periféricos',price:119900,emoji:'🖱️',description:'Comodidad y precisión durante todo el día.',tag:'DESTACADO'},
{id:4,name:'Altavoz portátil Mini',category:'Audio',price:149900,emoji:'🔊',description:'Música potente en formato compacto.',tag:''},
{id:5,name:'Webcam HD Studio',category:'Oficina',price:219900,emoji:'📷',description:'Videollamadas claras en alta definición.',tag:''},
{id:6,name:'Base para portátil Flex',category:'Accesorios',price:79900,emoji:'💻',description:'Soporte ajustable y ventilado.',tag:'OFERTA'},
{id:7,name:'Micrófono USB Creator',category:'Audio',price:239900,emoji:'🎙️',description:'Captura de voz nítida para streaming.',tag:''},
{id:8,name:'Hub USB-C 6 en 1',category:'Accesorios',price:139900,emoji:'🔌',description:'Amplía los puertos de tu equipo.',tag:''},
{id:9,name:'Monitor LED 24 pulgadas',category:'Oficina',price:649900,emoji:'🖥️',description:'Pantalla Full HD para trabajar mejor.',tag:'POPULAR'},
{id:10,name:'Control inalámbrico X',category:'Periféricos',price:229900,emoji:'🎮',description:'Control preciso para tus juegos.',tag:''},
{id:11,name:'Lámpara de escritorio LED',category:'Oficina',price:89900,emoji:'💡',description:'Iluminación regulable para tu espacio.',tag:''},
{id:12,name:'Cargador rápido USB-C',category:'Accesorios',price:69900,emoji:'🔋',description:'Energía confiable para tus dispositivos.',tag:'NUEVO'}
];
export function normalizeApiProducts(rows){
 if(!Array.isArray(rows)) throw new Error('Respuesta de API inválida');
 return rows.filter(x=>x&&Number.isFinite(Number(x.price))&&Number(x.price)>=0&&typeof x.title==='string').slice(0,20).map(x=>({id:`api-${x.id}`,name:x.title.slice(0,90),category:'API REST',price:Math.round(Number(x.price)*4000),emoji:'📦',description:'Producto externo de demostración; conversión COP referencial.',tag:'API'}));
}
export async function fetchExternalProducts(fetcher=fetch){
 const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),4500);
 try{const response=await fetcher('https://fakestoreapi.com/products?limit=8',{signal:controller.signal});if(!response.ok)throw new Error(`HTTP ${response.status}`);return normalizeApiProducts(await response.json());}finally{clearTimeout(timeout)}
}
