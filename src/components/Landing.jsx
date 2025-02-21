import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1>Step Into TODO</h1>
        <p>Manage your tasks efficiently.</p>
        <button onClick={() => navigate("/login")} style={styles.button}>
          Get Started
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"skyblue",
     backgroundImage: `url("https://img.freepik.com/free-photo/desk-workspace-with-various-elements_23-2148043237.jpg?semt=ais_hybrid")`, // ✅ Change URL to your image
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)", // ✅ Dark overlay for better contrast
    padding: "50px",
    borderRadius: "10px",
    textAlign: "center",
    color: "white",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    background: "#007bff",
    color: "white",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
    borderRadius: "5px",
  },
};

export default Landing;
