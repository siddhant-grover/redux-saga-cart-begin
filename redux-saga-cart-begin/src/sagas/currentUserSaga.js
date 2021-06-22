import { delay } from "redux-saga/effects";
export function* currentUserSaga() {
  //generator function
  while (true) {
    yield delay(1000); //next line of code wont run until this much time has passed
    console.log("User saga loop ");
  }
}
