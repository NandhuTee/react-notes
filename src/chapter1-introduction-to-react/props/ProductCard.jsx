

function ProductCard({ name, price, description }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>Price: ${price}</h3>
    </div>
  );
}
/* eslint-disable react/prop-types */
export default ProductCard;
