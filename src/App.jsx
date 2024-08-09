import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Products from "./Components/Products";

const App = () => {
  // Data to be used as products
  let [cart, setCart] = useState(0);
  let products = [
    {
      name: "Fancy Product",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sellingPrice: "$40.00 - $80.00",
      sale: false,
      mrp: "",
      discount: false,
      ratings: false,
      category: true,
    },
    {
      name: "Special Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sellingPrice: " $18.00",
      sale: true,
      mrp: "$20.00",
      discount: true,
      ratings: true,
    },
    {
      name: "Sale Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sellingPrice: " $25.00",
      sale: true,
      mrp: "$50.00",
      discount: true,
      ratings: false,
    },
    {
      name: "Popular Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sellingPrice: "$40.00",
      sale: false,
      mrp: "",
      discount: false,
      ratings: true,
    },
    {
      name: "Sale Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sellingPrice: " $25.00",
      sale: true,
      mrp: "$50.00",
      discount: true,
      ratings: false,
    },
    {
      name: "Fancy Product",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sellingPrice: "$120.00 - $280.00",
      sale: false,
      mrp: "",
      discount: false,
      ratings: false,
      category: true,
    },
    {
      name: "Special Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sellingPrice: " $18.00",
      sale: true,
      mrp: "$20.00",
      discount: true,
      ratings: true,
    },
    {
      name: "Special Item",
      image: "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      sellingPrice: " $40.00",
      sale: false,
      mrp: "",
      discount: false,
      ratings: true,
    },
  ];
  return (
    <>
      {/* Appends Navbar,Header,Products,Footer Components*/}
      <Navbar cart={cart} setCart={setCart} />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.map((product, index) => {
              return (
                <Products
                  product={product}
                  key={index}
                  cart={cart}
                  setCart={setCart}
                />
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default App;
