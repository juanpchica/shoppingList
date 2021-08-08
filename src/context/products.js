import { createContext, useContext, useReducer } from "react";

const ProductsStateContext = createContext();
const ProductsActionContext = createContext();

const initialState = {
  products: [],
  products: {},
  isEditing: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    default:
      return {
        ...state,
      };
  }
};

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductsStateContext.Provider value={state}>
      <ProductsActionContext.Provider value={dispatch}>
        {children}
      </ProductsActionContext.Provider>
    </ProductsStateContext.Provider>
  );
};

export const useProductsState = () => useContext(ProductsStateContext);
export const useProductsDispatch = () => useContext(ProductsActionContext);
