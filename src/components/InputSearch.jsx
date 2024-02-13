import { useDispatch, useSelector } from 'react-redux'
import { filterProducts } from './productSlice'

const InputSearch = () => {
  const dispatch = useDispatch()
  const searchValue = useSelector(state => state.product.searchValue)
  return (
    <input
      type='search'
      value={searchValue}
      onChange={event => dispatch(filterProducts(event.target.value))}
      placeholder='Search by Title'
    />
  )
}

export default InputSearch