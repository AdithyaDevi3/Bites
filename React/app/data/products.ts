import pizzaImg from "~/src/images/pizza.svg";
import pepperoniImg from "~/src/images/pepperoni.svg";
import vegImg from "~/src/images/veg.svg";

export const products = {
  pizzas: [
    { id: 1, name: 'Margherita', description: 'Classic pizza with tomato, mozzarella, and basil', price: 12.99, image: pizzaImg, category: 'Pizza' },
    { id: 2, name: 'Pepperoni', description: 'Loaded with pepperoni and extra cheese', price: 14.99, image: pepperoniImg, category: 'Pizza' },
    { id: 3, name: 'Vegetarian', description: 'Fresh vegetables and mozzarella', price: 13.99, image: vegImg, category: 'Pizza' },
    { id: 4, name: 'Meat Lovers', description: 'Pepperoni, bacon, ham, and sausage', price: 16.99, image: pizzaImg, category: 'Pizza' },
    { id: 5, name: 'Hawaiian', description: 'Ham and pineapple', price: 14.99, image: pepperoniImg, category: 'Pizza' },
    { id: 6, name: 'BBQ Chicken', description: 'Grilled chicken with BBQ sauce', price: 15.99, image: pizzaImg, category: 'Pizza' },
  ],
};
