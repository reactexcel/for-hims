import { LOAD } from "../constants";
const loadDummyDataReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      return {
        data: action.data
      };
    default:
      return state;
  }
};

export default loadDummyDataReducer;
