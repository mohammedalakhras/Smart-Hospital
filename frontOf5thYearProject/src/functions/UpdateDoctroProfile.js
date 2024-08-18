import axios from "axios";

export default async function UpdateDoctorProfile(
    name,
    fname,
    mname,
    ssn,
    formatedDate,
    info,
    phone,
    moblie,
    External,
    city,
    spec_id,
    prof,
    cov
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
data.append('full_name', name);
data.append('father', fname);
data.append('mother', mname);
data.append('SSN', ssn);
data.append('Bdate', formatedDate);
data.append('info', info);
data.append('Telephone', phone);
data.append('mobile', moblie);
data.append('External', External);
data.append('city_id', city);
data.append('spec_id', spec_id);

    // فقط قم بتحويل الصورة إلى ملف إذا كانت img ليست URL
    if (prof && !prof.startsWith("http"))
      data.append("profile_image", await urlToObject(prof));
    if (cov && !cov.startsWith("http"))
      data.append("cover_image", await urlToObject(cov));

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://127.0.0.1:8000/api/doctor/update',
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
