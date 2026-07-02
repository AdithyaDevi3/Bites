"use client";
import { useNavigate } from "react-router";
interface OrderProps {
  children: React.ReactNode;
  to: string;
}
export default function Order({ children, to }: OrderProps) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(to)}>
      {children}
    </button>
  );
}