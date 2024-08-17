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
// import getData from "./functions/getData.jsx";
import FindADoctor from "./pages/Patient Screens/FindADoctor.jsx";
import InfoOfDoctor from "./pages/Patient Screens/InfoOfDoctor.jsx";
import QuestionDetails from "./pages/Patient Screens/QuestionDetails.jsx";
import Chatbot from "./pages/Chatbot.jsx";
import AIAnalysis from "./pages/AIAnalysis.jsx";

//doctor Route
import DoctorLayout from "./pages/Doctor Screens/DoctorLayout.jsx";
import DoctorProfile from "./pages/Doctor Screens/Profile.jsx";
import EditProfileForDoctor from "./pages/Doctor Screens/EditProfile.jsx";

//import data function 
import { getSpecializationAndCounters } from "./functions/getSpecializationAndCountry.js";
import fetchQuestionDetails from "./functions/fetchQuestionDetails.js";
import TESTAPI from "./pages/TESTAPI.jsx";
import TESTCHAT from "./pages/TESTCHAT.jsx";


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
      },
      {
        path: "/profile",
        element: <Profile />,
        loader: getTokenFromLocalStorage,
      },
      { path: "/editProfile", element: <EditProfile /> },
      { path: '/find_doctor', element: <FindADoctor /> , loader:getSpecializationAndCounters},
      { path: '/doctoer_details', element: <InfoOfDoctor />},
      { path: "/chatbot", element: <Chatbot /> },
      { path: "/AI_Analysis", element: <AIAnalysis /> },
      { path: '/question_details/:id', element: <QuestionDetails /> , loader:fetchQuestionDetails},
      //doctor 
      
      { path: "/TESTAPI", element: <TESTAPI /> },
      { path: "/TESTCHAT", element: <TESTCHAT /> },
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

  {
    path:'/doctor' , element:<DoctorLayout /> , children: [
      {path:'/doctor' , element:<DoctorProfile /> ,loader: getTokenFromLocalStorage,},
      { path: '/doctor/question_details/:id', element: <QuestionDetails /> , loader:fetchQuestionDetails},
      { path: '/doctor/edit profile', element: <EditProfileForDoctor />},

    ]
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
