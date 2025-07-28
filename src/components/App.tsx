// src/components/App.tsx
import Button from "./Button/Button";
import Product from "./Product/Product";



export default function App() {
  return (
    <>
      <h1>Best selling</h1>

      <Product 
      name="Hachipuri with Chicken"
      imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640" 
      price={10.99}
      />
       <Button variant="primary" text="Buy" />
      <Product 
      name="Hachipuri with Beef"
      imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640" 
      price={14.99}/>
      <Button variant="primary" text="Buy" />
      <Product 
      name="Hachipuri with Pork"
      imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640" 
      price={14.99}
      />
      <Button variant="primary" text="Buy" />
    </>
  );
}
