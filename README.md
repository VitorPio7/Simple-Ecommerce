# Simple Ecommerce 🛍️

A clean, modern, and fully responsive front-end e-commerce application built with React. This project demonstrates core React principles, focusing on state management with the Context API for a seamless shopping cart experience.

Link: https://quiet-naiad-b4a74f.netlify.app/
![ReduxCard](https://github.com/user-attachments/assets/24b0b584-6215-47ef-b5c0-cf1ede1769d4)
<br>


## ✨ Key Features

-   **Product Catalog:** Browse a grid of available clothing products fetched from a local data source.
-   **Dynamic Shopping Cart:** Add products to the cart from the product list.
-   **State Management with Context API:** Global state for the shopping cart is managed efficiently with `useContext`, avoiding prop drilling.
-   **Update & Remove Items:** Easily increase, decrease, or completely remove items from the cart.
-   **Live Cart Totals:** The total price is calculated and updated in real-time as the cart changes.
-   **Responsive Design:** The UI, styled with `styled-components`, is fully responsive and looks great on desktops, tablets, and mobile devices.
-   **Client-Side Routing:** Uses `react-router-dom` to navigate between the main store and the cart page without page reloads.

---

## 🎯 Core Concepts Demonstrated

This project serves as a practical demonstration of several key front-end development concepts:

-   **State Management:** Centralized state logic for the shopping cart using **React's Context API** and the **`useReducer` hook** for predictable state transitions.
-   **Component-Based Architecture:** The application is broken down into reusable and logical components (Header, ProductCard, CartItem, etc.).
-   **CSS-in-JS:** Styling is encapsulated at the component level using **`styled-components`**, providing scoped styles and enabling dynamic styling based on props.
-   **Hooks:** Extensive use of React Hooks like `useState`, `useContext`, `useReducer`, and `useEffect` to manage component state and side effects.
-   **Data Flow:** Clear and unidirectional data flow, a core principle of React.

---

## 🛠️ Tech Stack

-   **[React](https://reactjs.org/):** A JavaScript library for building user interfaces.
-   **[Vite](https://vitejs.dev/):** A modern and fast front-end build tool.
-   **[Styled Components](https://styled-components.com/):** For component-level CSS-in-JS styling.
-   **[React Router DOM](https://reactrouter.com/):** For declarative, client-side routing.
-   **[Phosphor Icons](https://phosphoricons.com/):** A flexible icon family for a clean UI.
-   **[JavaScript (ES6+)](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/):** For application logic.

*Note: This is a front-end-only application. All product data is currently sourced from a local file and state is managed on the client-side.*

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.
-   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation & Setup

1.  Clone the repository:
    ```sh
    git clone [https://github.com/VitorPio7/Simple-Ecommerce.git](https://github.com/VitorPio7/Simple-Ecommerce.git)
    ```
2.  Navigate to the project directory:
    ```sh
    cd Simple-Ecommerce
    ```
3.  Install the NPM packages:
    ```sh
    npm install
    ```

### Running the App

To run the app in development mode, use the following command.

```sh
npm run dev
```

This will start the development server and open the application in your default browser, typically at `http://localhost:5173`.

---

## 📄 License

Distributed under the MIT License. See the `LICENSE` file for more information.

---

## Contact

Vitor Pio - [GitHub Profile](https://github.com/VitorPio7)

