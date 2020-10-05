const initialState = {
  action: null,
  click: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "CHANGEACTION":
      console.log(action.action);
      return {
        ...state,
        action: action.action,
      };
    case "CHANGECLICK":
      console.log(action.click);
      return {
        ...state,
        click: action.click,
      }
    default:
      return state;
  }
}