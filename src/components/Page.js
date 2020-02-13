import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FETCH_API_TYPE, GET_ONE_EMPLOYER_TYPE } from "../slice/store";

const Page = () => {
  const dispatch = useDispatch();
  const { data, employer } = useSelector(state => state);

  console.log(data);

  // useEffect(() => {
  //   dispatch(FETCH_API_TYPE());
  // }, []);

  return (
    <button onClick={() => dispatch(FETCH_API_TYPE())}>Get employer</button>
  );
};

export default Page;
