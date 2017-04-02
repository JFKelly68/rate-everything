import { combineReducers } from 'redux';
import { fetch } from 'isomorphic-fetch';

const initialState = {
  userId: null,
  item: {
    _id: 0,
    name: 'test',
    rating: 0
  },
  votes: []
};


/*
{
  userId
  curr_item: {
    id,
    name,
    rating
  },
  session: [
    {
      userId
      itemId
      vote
      time
    }
  ],
  items: []
}
*/


function votes (state = initialState.votes, action) {
  switch(action.type) {
    case 'VOTE':
      return [
        ...state,
        {
          userId: action.userId,
          itemId: action.itemId,
          vote: action.dir,
          time: Date.now()
        }
      ];
    default:
      return state;
  }
}

// function complete (state = {}, action) {
//   console.log('COMPLETE', state, action);
//   switch(action.type) {
//     default:
//       return state;
//   }
// }

function items (state = {
  isFetching: false,
  items: []
}, action) {
  switch(action.type) {
    case 'REQUEST_ITEMS':
      console.log('REQUEST', state, action);
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'RECEIVE_ITEMS':
      console.log('RECEIVE', state, action);
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      });
    default:
      return state;
  }
}

export function fetchItems (filter, size) {
  return dispatch => {
    dispatch(requestPosts(filter, size));
    return fetch(`https://rate-everything-788fc.firebaseio.com/`)
      .then(response => response.json)
      .then(json => {
        console.log('DATA?', json);
      });
  };
}


export const rootReducer = combineReducers({
  votes
});
