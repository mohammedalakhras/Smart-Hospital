import axios from "axios";
export default async function changeStausFromDoctor(id, date, time, status) {
  let data = new FormData();
  data.append("appointment_id", id);
  data.append("status", status);
  if (date != null) data.append("date", date);
  if (time != null) data.append("time", time);

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://127.0.0.1:8000/api/appointment/change/status",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      ...data.getHeaders,
    },
    data: data,
  };

  return await axios
    .request(config)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}
