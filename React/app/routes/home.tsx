import { useNavigate } from "react-router";
import { useEffect } from "react";
import type { Route } from "./+types/home";

export const meta: Route.MetaFunction = () => {
  return [
    { title: "Bites - Home" },
    { name: "description", content: "Order delicious food from Bites!" },
  ];
};

export default function Home() {
  const navigate = useNavigate();

  // Redirect to menu on load
  useEffect(() => {
    navigate("/menu");
  }, [navigate]);

  return null;
}
