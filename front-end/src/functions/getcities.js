import axios from "axios";
import { useState } from "react";

export default async function getCities() {

var config = {
  method: 'get',
maxBodyLength: Infinity,
  url: 'http://127.0.0.1:8000/api/cites',
  headers: { }
};

const res=await axios(config)
.then(function (r) {
    return r
})
.catch(function (err) {
    return err;
});
return res

}
