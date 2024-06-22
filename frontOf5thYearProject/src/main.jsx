import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import StartPage from "./pages/StartPage.jsx";
import "./index.css";
import store from "./store/index.js";
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
import getData from "./functions/getData.jsx";
import FindADoctor from "./pages/Patient Screens/FindADoctor.jsx";
import InfoOfDoctor from "./pages/Patient Screens/InfoOfDoctor.jsx";
import QuestionDetails from "./pages/Patient Screens/QuestionDetails.jsx";


//import data function 
import { getSpecializationAndCounters } from "./functions/getSpecializationAndCountry.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: getTokenFromLocalStorage,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/editProfile",
        element: <EditProfile />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      { path: "/editProfile", element: <EditProfile /> },
      { path: '/find_doctor', element: <FindADoctor /> , loader:getSpecializationAndCounters},
      { path: '/doctoer_details', element: <InfoOfDoctor />},
      { path: '/question_details', element: <QuestionDetails />}
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
