import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/landing.tsx"),
  route("home", "routes/home.tsx"),
  route("menu", "routes/menu.tsx"),
  route("pizza", "routes/pizza.tsx"),
  route("burgers", "routes/burgers.tsx"),
  route("cart", "routes/cart.tsx"),
  route("checkout", "routes/checkout.tsx"),
  route("orders", "routes/orders.tsx"),
  // Catch browser requests (Chrome DevTools, etc)
  route(".well-known/*", "routes/not-found.tsx"),
] satisfies RouteConfig;
