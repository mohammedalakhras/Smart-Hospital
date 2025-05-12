import GetQuestion from "./GetQuestion";
export default async function getTokenFromLocalStorage() {
  const data = await GetQuestion(window.localStorage.getItem("token"));
  // console.log(data);
  return data || null;
}
