import {ProductActionTypes} from "../modules/product/actions";

const initialState = {
    products: [],
    loadingProducts: false
};

const Products = (state = initialState, action: any) => {
  switch (action.type) {
      case ProductActionTypes.GetProductsSuccess:
          return {
              ...state,
              products: action.payload,
              loadingProducts: false
          };
      case ProductActionTypes.GetProducts:
          return {
              ...state,
              loadingProducts: true
          };

      default:
          return state;
  }
};

export default Products;
