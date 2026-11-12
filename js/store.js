export const CART_KEY='novashop-cart-v1';
export const money=n=>new Intl.NumberFormat('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0}).format(n);
export function loadCart(storage=localStorage){try{const raw=JSON.parse(storage.getItem(CART_KEY)||'[]');return Array.isArray(raw)?raw.filter(x=>x&&typeof x.id!=='undefined'&&Number.isInteger(x.qty)&&x.qty>0&&x.qty<=99):[]}catch{return []}}
export function saveCart(cart,storage=localStorage){try{storage.setItem(CART_KEY,JSON.stringify(cart));return true}catch{return false}}
export function addItem(cart,id){const result=cart.map(x=>({...x}));const found=result.find(x=>String(x.id)===String(id));if(found)found.qty=Math.min(99,found.qty+1);else result.push({id,qty:1});return result}
export function changeQty(cart,id,delta){return cart.map(x=>String(x.id)===String(id)?{...x,qty:Math.max(0,Math.min(99,x.qty+delta))}:x).filter(x=>x.qty>0)}
export function removeItem(cart,id){return cart.filter(x=>String(x.id)!==String(id))}
export function cartTotal(cart,products){return cart.reduce((sum,item)=>{const product=products.find(x=>String(x.id)===String(item.id));return sum+(product?product.price*item.qty:0)},0)}
export function filterProducts(products,query='',category='all',sort='featured'){const q=query.trim().toLocaleLowerCase('es');const result=products.filter(x=>(category==='all'||x.category===category)&&(!q||`${x.name} ${x.description} ${x.category}`.toLocaleLowerCase('es').includes(q)));if(sort==='price-asc')result.sort((a,b)=>a.price-b.price);if(sort==='price-desc')result.sort((a,b)=>b.price-a.price);if(sort==='name')result.sort((a,b)=>a.name.localeCompare(b.name,'es'));return result}
