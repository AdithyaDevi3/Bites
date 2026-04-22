import { Link } from "react-router";
import Order from "./Buttons/Order";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "16px",
        background: "#111",
        color: "white",
      }}
    >
      <h1>Bites</h1>

          <nav style={{ display: "flex", gap: "16px", color: "yellow" }}>
              <Order children={undefined} to={""}/>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}
      </nav>
    </header>
  );
}