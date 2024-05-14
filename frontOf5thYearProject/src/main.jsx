import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import StartPage from "./pages/StartPage.jsx";
import "./index.css";
import store from "./stor/index.js";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import router components 
import Logging from "./pages/Logging.jsx";
import SignUpInputs from "./components/Signup And Login/SignUpInputs.jsx";
import LoginInputs from "./components/Signup And Login/LoginInputs.jsx";
import Profile from "./pages/Patient Screens/Profile.jsx";
import EditProfile from "./pages/Patient Screens/EditProfile.jsx";
import Home from "./pages/Patient Screens/Home.jsx";
import getTokenFromLocalStorage from "./functions/getTokenFromLocalStorage.js";
import FindADoctor from "./pages/Patient Screens/FindADoctor.jsx";
import InfoOfDoctor from "./pages/Patient Screens/InfoOfDoctor.jsx";


//import data function 
import { getSpecializationAndCounters } from "./functions/getSpecializationAndCountry.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: getTokenFromLocalStorage,
      },
      {
        path: "/editProfile",
        element: <EditProfile />,
        loader: getTokenFromLocalStorage,
      },
      {
        path: "/profile",
        element: <Profile />,
        loader: getTokenFromLocalStorage,
      },
      { path: "/editProfile", element: <EditProfile /> },
      { path: '/find_doctor', element: <FindADoctor /> , loader:getSpecializationAndCounters},
      { path: '/doctoer_details', element: <InfoOfDoctor />}
    ],
  },
  {
    path: "/",
    element: <Logging />,
    children: [
      { path: "/signIn", element: <LoginInputs /> },
      { path: "/signUp", element: <SignUpInputs /> },
    ],
  },

  { path: "/start", element: <StartPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
