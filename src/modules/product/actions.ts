export enum ProductActionTypes {
    GetProducts = '[Products] get products',
    GetProductsSuccess = '[Products] get products success',
    GetProductsFail = '[Products] get products failure'
}

export const GetProducts = () => ({
  type: ProductActionTypes.GetProducts
});

export const GetProductsFail = () => ({
  type: ProductActionTypes.GetProductsFail
});

export const GetProductsSuccess = (payload: any) => ({
  type: ProductActionTypes.GetProductsSuccess,
  payload
});

