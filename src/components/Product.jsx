const Product = ({id, title, price, description, thumbnail}) => {
  return (
    <li key={id} className='product'>
      <h4>{title}: <span>(${price})</span></h4>
      <img alt={description} src={thumbnail} width={100} height={100} />
    </li>
  )
}

export default Product