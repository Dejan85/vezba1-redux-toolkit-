import { delay, takeLatest, put } from "redux-saga/effects";
import {
  FETCH_API_TYPE,
  getData,
  GET_ONE_EMPLOYER_TYPE,
  getOneEmployer
} from "../slice/store";

function* fetchDataHandler() {
  try {
    const url = "http://dummy.restapiexample.com/api/v1/employees";
    let result = "";
    yield fetch(url)
      .then(response => {
        return response.json();
      })
      .then(res => {
        result = res;
      })
      .catch(err => {
        console.log(err);
      });

    yield put(getData(result));
  } catch (err) {
    yield console.log(err);
  }
}

function* getEmployerByIdHandler() {
  try {
    const url = "http://dummy.restapiexample.com/api/v1/employee/1";
    let result = "";
    yield fetch(url)
      .then(response => {
        return response.json();
      })
      .then(res => {
        result = res;
      })
      .catch(err => {
        console.log(err);
      });
    yield put(getOneEmployer(result));
  } catch (err) {
    console.log(err);
  }
}

export function* fetchData() {
  yield takeLatest(FETCH_API_TYPE.type, fetchDataHandler);
  yield takeLatest(GET_ONE_EMPLOYER_TYPE.type, getEmployerByIdHandler);
}
