import BigCard from "../Containers/Big-Card";

export default function MenuItems() {
  return (
    <div className="grid">
      <BigCard title="Pizza" image="/pizza.jpg" to="/pizza" />
      <BigCard title="Burgers" image="/burger.jpg" to="/burgers" />
      <BigCard title="Drinks" image="/drinks.jpg" to="/drinks" />
      <BigCard title="Desserts" image="/desserts.jpg" to="/desserts" />
    </div>
  );
}