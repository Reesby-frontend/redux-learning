import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/user";

function login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(login({ name: "Yash", age: 22, emai: "asdas" }));
        }}
      ></button>
    </div>
  );
}

export default login;
