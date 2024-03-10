import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap:'10%',
          margin: "10%",
          padding: "10%",
          backgroundColor:'#116a3b'

        }}
      >
        <button 
          onClick={() => {
            navigate("start");
          }}
        >
          Start Page
        </button>

        <button 
          onClick={() => {
            navigate("signup");
          }}
        >
          Signup Page
        </button>
      </div>
    </>
  );
}

export default App;
