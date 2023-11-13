import { createContext, useReducer, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.util";
import { createAction } from "../utils/reducer/reducer.utils";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CATEGORIES_ACTION_TYPES = {
  GET_CATEGORIES_MAP: "GET_CATEGORIES_MAP",
};

const CategoriesReducer = (state, action) => {
  console.log("dispatched");
  const { type, payload } = action;
  console.log(action.payload);

  switch (type) {
    case CATEGORIES_ACTION_TYPES.GET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: payload,
      };
    default:
      throw new Error(`You given invalid action ${type}`);
  }
};

const INITIAL_STATE = {
  categoriesMap: {},
};

export const CategoriesProvider = ({ children }) => {
  const [{ categoriesMap }, dispatch] = useReducer(
    CategoriesReducer,
    INITIAL_STATE
  );

  const setCategoriesMap = (categoryMap) => {
    dispatch(
      createAction(CATEGORIES_ACTION_TYPES.GET_CATEGORIES_MAP, categoryMap)
    );
  };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
