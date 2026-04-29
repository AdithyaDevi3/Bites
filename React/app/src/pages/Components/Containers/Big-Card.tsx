
import { Link } from "react-router";

type CardProps = {
  title: string;
  image: string;
  to: string;
};

export default function BigCard({ title, image, to }: CardProps) {
  return (
    <Link to={to} className="card">
      <img src={image} alt={title} />
          <div className="card-title">{title}</div>
          {/* idk what to update */}
    </Link>
  );
}