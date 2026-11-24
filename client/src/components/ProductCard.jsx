export default function ProductCard({product}){
return(
<article className="product-card">
<h3>{product.name}</h3>
<p>{product.category}</p>
<p>{product.description}</p>
<strong>Indicative:${product.indicativePriceUSD}</strong>
</article>
);
}