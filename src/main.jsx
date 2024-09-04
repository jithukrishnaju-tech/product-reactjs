import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import SingleProduct from "./components/SingleProduct.jsx";
import ProductsByCategory from "./components/ProductByCategory.jsx";
import ProductDetail from "./components/SingleProduct.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./components/Products.jsx";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/category",
        element: <ProductsByCategory />,
      },
      {
        path: "/product/:id",
        element: <ProductDetail />,
      },
    ],
  },
]);
const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
