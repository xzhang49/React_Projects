import axios from "axios";

export const ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
  FETCH_DATA: "FETCH_DATA",
  REMOVE_ITEM: "REMOVE_ITEM",
};

export const addItem = (item) => ({
  type: ACTIONS.ADD_ITEM,
  item,
});

export const fetchData = (data) => ({
  type: ACTIONS.FETCH_DATA,
  data,
});

export const removeItem = (item) => ({
  type: ACTIONS.REMOVE_ITEM,
  item,
});

export const actions = {
  addItem,
  fetchData,
  removeItem,
};

export const getList = () => {
  return (dispatch) => {
    axios
      .get("moviedata.json")
      .then((response) => {
        const data = response.data;
        dispatch(fetchData(data));
      })
      .catch(() => {
        alert("Error: fetching data");
      });
  };
};

const initialState = {
  myList: [],
  recommendation: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTIONS.FETCH_DATA:
      return {
        ...state,
        myList: action.data.mylist,
        recommendation: action.data.recommendations,
      };
    case ACTIONS.REMOVE_ITEM:
      return {
        ...state,
        myList: state.myList.filter((list) => list.id !== action.item.id),
        recommendation: [...state.recommendation, action.item],
      };
    case ACTIONS.ADD_ITEM:
      return {
        ...state,
        myList: [...state.myList, action.item],
        recommendation: state.recommendation.filter(
          (list) => list.id !== action.item.id
        ),
      };
    default:
      return state;
  }
};

export default reducer;
