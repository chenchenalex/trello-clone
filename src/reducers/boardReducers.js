export const createBoardReducer = (state, action) => {
  debugger;
  if(action.type === 'CREATE_BOARD'){
    return [
        ...state,
        action.text
    ]
  }else{
    return [];
  }
};
