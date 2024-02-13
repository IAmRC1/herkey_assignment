import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { setProducts, productsData, filteredProductsData } from './productSlice';
import Product from './Product'

const PRODUCTS_URL = 'https://dummyjson.com/products'

const Products = () => {
  const products = useSelector(productsData);
  const filteredProducts = useSelector(filteredProductsData);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const res = await fetch(PRODUCTS_URL)
      const data = await res.json()
      dispatch(setProducts(data))
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <ul className='products_wrapper'>
      {(filteredProducts.length > 0 ? filteredProducts : products)?.map(({id, title, description, price, thumbnail}) => (
        <Product
          key={id}
          id={id}
          title={title}
          price={price}
          description={description}
          thumbnail={thumbnail}
        />
      ))}
    </ul>
  );
}

export default Products