import axios from "axios";

export default async function updateProfile(
  name,
  fname,
  mname,
  city,
  date,
  phone,
  img, // URL or path to the image
  cover // You can handle cover image similarly if needed
) {
  const token = window.localStorage["token"];
  console.log("TOKEN", token);

  try {
    const configToken = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
    };

    let data = new FormData();
    data.append("full_name", name);
    data.append("father", fname);
    data.append("mother", mname);
    data.append("city_id", city);
    data.append("Bdate", date);
    data.append("mobile", phone);
    if (img != null) data.append("profile_image", await urlToObject(img));

    // Add cover image if necessary
    // data.append('cover_image', await urlToObject(cover));

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:8000/api/pation/update",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "multipart/form-data",
      },
      data: data,
    };

    await axios.get("http://127.0.0.1:8000/api/checkToken", configToken);

    const res = await axios.request(config).catch((error) => {
      if (error.response) {
        return error.response;
      }
      console.log("error", error);
    });
    return res;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized. Please check your token.");
    } else {
      console.log("Error fetching data:", error.message);
      return error;
    }
  }
}

// Convert the image URL to a File object
const urlToObject = async (imageUrl) => {
  try {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const file = new File([blob], "image.jpg", { type: blob.type });
    console.log(file);
    return file;
  } catch (error) {
    console.error("Error converting URL to file:", error.message);
    throw error;
  }
};
