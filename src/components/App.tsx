// src/components/App.tsx
import Loader from "./Loader/Loader";
import { useState } from "react";
import { OrderForm } from "./OrderForm/OrderForm";
import SearchForm from "./SearchForm/SearchForm";
import type { Article } from "../types/article";
import { fetchArticles } from "../services/articleService";
import Product from "./Product/Product";





export default function App() {
const handleOrder = (data: string) => {
  console.log("Order received from:", data);

}
// 1a. Оголошуємо і типізуємо стан
const [articles, setArticles] = useState<Article[]>([]);
// 1. Додаємо стан індикатора завантаження
const [isLoading, setIsLoading] = useState(false);
const [isError, setIsError] = useState(false);

const handleSearch = async (topic: string) => {
  // 2. змінюємо індикатор на true перед запитом
  try {
  setIsLoading(true);
  setIsError(false);
  const data = await fetchArticles(topic);
  setArticles(data);
} catch {
  setIsError(true);
} finally {
  setIsLoading(false);
}
  };

  return (
    <>
      <h1>Best selling</h1>

      <Product 
      name="Hachipuri with Chicken"
      imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640" 
      price={10.99}
      onBuy={handleOrder}
      />
       
      <Product 
      name="Hachipuri with Beef"
      imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640" 
      price={14.99}
      onBuy={handleOrder}
/>
      
      <Product 
      name="Hachipuri with Pork"
      imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640" 
      price={14.99}
      onBuy={handleOrder}
      />
      

      <OrderForm onSubmit={handleOrder} />
      <SearchForm onSubmit={handleSearch}/>
      {/* 4. Відображаєм повідомлення про завантаження даних в JSX */}
      {isLoading && <Loader loading={isLoading} />}
      {isError && <p>Ooops, something went wrong! Please try again!</p>}
      {articles.length > 0 && (
        <ul>
          {articles.map(({ objectID, url, title }) => (
        <li key={objectID}>
          <a href={url} target="_blank">{title}</a>
        </li>
      ))}
        </ul>
      )}
    </>
  );
}
