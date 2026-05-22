# Bites - Food Delivery Web Application

## 🎯 Project Overview

A complete food delivery web application built with React Router 7, TypeScript, Tailwind CSS, and Vite. The app features a modern UI with multiple food categories, shopping cart, and order management.

## 📄 Pages Built

### 1. **Landing Page** (`/`)

- Welcome screen with hero section
- Feature highlights (Fast Delivery, Fresh Pizza, Juicy Burgers)
- Call-to-action buttons
- Navigation to menu and orders

### 2. **Menu Page** (`/menu`)

- Browse all food categories
- 6 category cards (Pizza, Burgers, Drinks, Desserts, Sides, Salads)
- Quick navigation to each category
- Floating cart button

### 3. **Pizza Page** (`/pizza`)

- 6 featured pizzas with descriptions and pricing
- Add to cart functionality
- Back to menu navigation
- Cart counter

### 4. **Burgers Page** (`/burgers`)

- 6 gourmet burger options
- Premium pricing display
- Add to cart with quantity tracking
- Same layout consistency

### 5. **Drinks Page** (`/drinks`)

- 4 beverage options (sodas, juices, coffee)
- Drink-specific styling
- Add to cart functionality

### 6. **Desserts Page** (`/desserts`)

- 4 sweet treat options
- Pink color-coded header
- Pricing and descriptions

### 7. **Sides Page** (`/sides`)

- Appetizers and sides (fries, wings, etc.)
- Orange color theme
- Add to cart options

### 8. **Salads Page** (`/salads`)

- 4 healthy salad options
- Green color theme
- Complete menu coverage

### 9. **Shopping Cart** (`/cart`)

- View all items added
- Modify quantities
- Remove items
- Subtotal, tax, and delivery fee calculation
- Order summary panel
- Proceed to checkout button

### 10. **Checkout Page** (`/checkout`)

- Delivery information form (name, email, phone, address)
- Payment information form (card details)
- Order summary with estimated delivery time
- Order confirmation with success message

### 11. **Orders History Page** (`/orders`)

- View all past orders
- Order details (ID, date, items, status)
- Order again functionality
- Why choose Bites section
- Call-to-action for new orders

## 🎨 Design Features

### Color Scheme

- **Primary**: Black backgrounds with yellow accents
- **Category Colors**:
  - Pizza: Red
  - Burgers: Orange
  - Drinks: Blue
  - Desserts: Pink
  - Sides: Orange
  - Salads: Green
  - Cart: Blue
  - Checkout: Green
  - Orders: Purple

### Components

- Reusable header with navigation
- Card components with hover effects
- Responsive grid layouts (mobile, tablet, desktop)
- Sticky floating cart button
- Order summary panels
- Feature cards

### Styling

- Tailwind CSS for responsive design
- Custom CSS classes for cards, buttons
- Smooth transitions and hover effects
- Mobile-first approach
- Sticky navigation

## 🔄 User Flow

```
Landing Page
    ↓
Menu Page (Browse Categories)
    ↓
Category Page (Select Items)
    ↓
Shopping Cart (Review Order)
    ↓
Checkout (Enter Details & Pay)
    ↓
Order Confirmation
    ↓
Orders History (Track Orders)
```

## 📦 Route Configuration

```typescript
Routes:
- / → landing.tsx
- /home → home.tsx
- /menu → menu.tsx
- /pizza → pizza.tsx
- /burgers → burgers.tsx
- /drinks → drinks.tsx
- /desserts → desserts.tsx
- /sides → sides.tsx
- /salads → salads.tsx
- /cart → cart.tsx
- /checkout → checkout.tsx
- /orders → orders.tsx
```

## 🚀 Getting Started

### Build

```bash
npm run build
```

### Development

```bash
npm run dev
```

### Type Checking

```bash
npm run typecheck
```

## 📱 Responsive Design

- Mobile: Single column grid
- Tablet: 2-column grid
- Desktop: 3-column grid
- Sticky navigation on all screen sizes
- Touch-friendly buttons and interactions

## 🎯 Next Steps (Optional Enhancements)

1. **State Management**: Implement Context API or Redux for global cart state
2. **Backend Integration**: Connect to API for real orders and data
3. **Authentication**: User login/signup system
4. **Payment Gateway**: Stripe or PayPal integration
5. **Real Images**: Replace emoji placeholders with actual food images
6. **Favorites**: Add wishlist/favorites feature
7. **Ratings & Reviews**: Customer feedback system
8. **Search & Filter**: Advanced menu searching
9. **Real-time Tracking**: Order delivery tracking
10. **Push Notifications**: Order status updates

## 📝 Notes

- All prices are placeholder values
- Cart state is local (resets on refresh)
- Order history shows mock data
- Emojis used as placeholder images - replace with actual images later
- Form validation is basic - enhance for production
- No backend API integration yet

---

**Built with ❤️ using React Router 7, TypeScript, and Tailwind CSS**
