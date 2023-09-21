import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { Home } from "./pages/Home/Home";
import { Product } from "./pages/Product/Product";
import { Products } from "./pages/Products/Products";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import "./App.scss"
import { Contact } from "./components/Contact/Contact";
import { About } from "./components/About/About";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return (
    <div >
      <RouterProvider router={router} />
         
    </div>
  );
}

export default App;
