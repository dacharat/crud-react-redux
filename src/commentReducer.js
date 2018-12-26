import { comment } from "postcss";

export default (state = [], action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return state.concat([action.data]);
    case 'DELETE_COMMENT':
      return state.filter(comment => comment.id !== action.id)
    default:
      return state;
  }
};
