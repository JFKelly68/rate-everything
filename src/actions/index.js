// ACTION TYPES
const VOTE = 'VOTE';
// const COMMENCE = 'COMMENCE';
// const COMPLETE = 'COMPLETE';

const REQUEST_ITEMS = 'REQUEST_ITEMS';
const RECEIVE_ITEMS = 'RECEIVE_ITEMS';


// ACTION CREATORS
export const vote = (dir, itemId, userId) => ({ type: VOTE, dir, itemId, userId });
// export const complete = (itemId) => ({ type: COMPLETE, itemId });

// Default request size = 10 items
export const requestItems = (filter, size) => ({ type: REQUEST_ITEMS, filter, size });
export const receiveItems = (filter = {}, json) => ({
  type: RECEIVE_ITEMS,
  items: json.data.children.map(child => child.data),
  filter,
  receivedAt: Date.now()
});


export function fetchPosts (filter, size) {
  requestItems()
}


export const items = [
  {_id: 20, name: "Homie", image: '//placehold.it/200x120'},
  {_id: 274, name: "Dude", image: '//placehold.it/200x120'},
  {_id: 33, name: "Super Dev", image: '//placehold.it/200x120'},
  {_id: 9857, name: "Dev", image: '//placehold.it/200x120'},
  {_id: 1, name: "Reduxer", image: '//placehold.it/200x120'}
];
