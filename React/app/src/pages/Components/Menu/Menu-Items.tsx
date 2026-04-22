import BigCard from "../Containers/Big-Card";
import pizza from "../../../images/pizza.png"
import burger from "../../../images/burger.png"
export default function MenuItems() {
  return (
    <div className="grid">
      <BigCard title="Pizza" image= {pizza} to="/pizza" />
      <BigCard title="Burgers" image={burger} to="/burgers" />
      {/* <BigCard title="Drinks" image="/drinks.jpg" to="/drinks" />
      <BigCard title="Desserts" image="/desserts.jpg" to="/desserts" /> */}
    </div>
  );
}