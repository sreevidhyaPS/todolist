import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.navbar}>
        <h2 style={styles.logo}>TODO SPHERE
        </h2>
        <div>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/login" style={styles.link}>Login</Link>
        </div>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    background: "lightgrey", // 🌟 Elegant goldenrod color
    padding: "15px 0",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)", // ✅ Adds depth to the navbar
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 40px",
    color: "#fff",
  },
  logo: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  link: {
    margin: "0 15px",
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "500",
    transition: "color 0.3s ease",
  },
};

export default Header;
