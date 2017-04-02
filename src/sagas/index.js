// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';


function* helloSaga(blah) {
  try {
    // yield something
  } catch (err) {
    // yield err
  }
}

function* getItems (filter = {}, size = 10) {

}


export default function* rootSaga () {
  yield [
    helloSaga(),
    getItems()
  ];
}
