import { Link } from "react-router";

export default function BigCard() {
  return (
    <Link
      to="/menu"
      style={{
        display: "block",
        padding: "40px",
        background: "#222",
        color: "white",
        borderRadius: "12px",
        textDecoration: "none",
        fontSize: "24px",
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      Open Menu
    </Link>
  );
}