import { createContext, useContext, useReducer } from "react";

const ProductsStateContext = createContext();
const ProductsActionContext = createContext();
const initialProduct = {
  id: "",
  name: "",
  value: "",
};

const initialState = {
  products: [],
  product: initialProduct,
  isEditing: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [...state.products, action.payload],
        product: initialProduct,
      };
    case "ADD_EDIT_PRODUCT":
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      state.products[index] = action.payload;

      return {
        ...state,
        isEditing: false,
        product: initialProduct,
      };
    case "EDIT_PRODUCT":
      return {
        ...state,
        isEditing: true,
        product: action.payload,
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case "SET_PRODUCT":
      return {
        ...state,
        product: {
          ...state.product,
          [action.payload.name]: action.payload.value,
        },
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
