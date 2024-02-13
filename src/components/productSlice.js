import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  filteredData: [],
  searchValue: ''
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.data = action.payload.products;
    },
    filterProducts:  (state, action) => {
      state.searchValue = action.payload.toLowerCase();
      if (state.searchValue === '') {
        state.filteredData = []
      } else {
        state.filteredData = state.data.filter(({title}) => title.toLowerCase().includes(state.searchValue)
      )
    }},
  },
});

export const { setProducts, filterProducts } = productSlice.actions;

export const productsData = state => state.product.data
export const filteredProductsData = state => state.product.filteredData


export default productSlice.reducer;
