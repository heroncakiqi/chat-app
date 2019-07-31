export const ADD_ROOMS = 'add_rooms';
export const ADD_SINGLE_ROOM = 'add_single_room';
export const SELECT_ROOM = 'select_room';
export const SET_MESSAGES = 'set_messages';
export const CLEAR_MESSAGES = 'clear_messages';
export const SET_USER = 'set_user';
export const SWITCH_LOADING = 'switch_loading';

export const loadingReducer = (state, action) => {
  switch(action.type) {
    case SWITCH_LOADING:
      return action.payload
    default:
      return state
  }
}

export const roomsReducer = (state, action) => {
  switch(action.type) {
    case ADD_ROOMS:
      return [...state, ...action.rooms];
    case ADD_SINGLE_ROOM:
      return state
    default:
      return state;
  }
}

export const selectRoomReducer = (state, action) => {
  switch(action.type) {
    case SELECT_ROOM: 
      return action.payload;
    default:
      return state
  }
}

export const messagesReducer = (state, action) => {
  switch(action.type) {
    case SET_MESSAGES:
      return [...state, ...action.payload];
    case CLEAR_MESSAGES:
      return [];
    default:
      return state
  }
}

export const userReducer = (state, action) => {
  switch(action.type) {
    case SET_USER:
      localStorage.setItem('user', action.payload.id);
      return action.payload;
    default:
    return state
  }
}