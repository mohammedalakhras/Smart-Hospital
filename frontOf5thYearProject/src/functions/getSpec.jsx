import axios from "axios";
import React from "react";

export default async function getSpec() {
  return ( await axios
    .get("http://127.0.0.1:8000/api/specializations/all")
    .then((r) => {

      // console.log('spec',r);
      return r;
    })
    .catch((e) => {
      return e;
    }));
}
