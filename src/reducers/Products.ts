import {ProductActionTypes} from "../modules/product/actions";

const initialState = {
    products: []
};

const Products = (state = initialState, action: any) => {
  switch (action.type) {
      case ProductActionTypes.GetProductsSuccess:
          return {
              ...state,
              products: action.payload
          };
      default:
          return state;
  }
};

export default Products;