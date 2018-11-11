import { Product } from "../product";
import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export interface State extends fromRoot.State {
  product: ProductState;
}

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
}

const getProductFeaturesState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeaturesState,
  state => state.showProductCode
);

export const getCurrentPoduct = createSelector(
  getProductFeaturesState,
  state => state.currentProduct
);

export const getProducts = createSelector(
  getProductFeaturesState,
  state => state.products
);

export function reducer(state = initialState, action): ProductState {
  switch (action.type) {
    case 'TOGGLE_PRODUCT_CODE':
      return {
        ...state,
        showProductCode: action.payload
      };
 
    default:
      return state;
  }
}