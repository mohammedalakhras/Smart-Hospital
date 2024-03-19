import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import StartPage from "./pages/StartPage.jsx";
import "./index.css";
import store from "./stor/index.js";
import { Provider } from "react-redux";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Logging from "./pages/Logging.jsx";
import SignUpInputs from "./components/Signup And Login/SignUpInputs.jsx";
import LoginInputs from "./components/Signup And Login/LoginInputs.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App />  },
  { path: "/", element: <Logging /> , children:[
    {path:"/signIn" , element:<LoginInputs />},
    {path:"/signUp" , element:<SignUpInputs />}
  ]},
  // { path: "/login", element: <SignUp value={0} />  },
  // { path: "/signup", element: <SignUp value={1} />  },

  { path:'/start' , element:<StartPage />}
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
