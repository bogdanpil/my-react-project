// src/components/App.tsx
import { useState } from "react";
import { OrderForm } from "./OrderForm/OrderForm";
import axios from "axios";
import SearchForm from "./SearchForm/SearchForm";

//import ArticleList from './ArticlesList/ArticleList'
//import Button from "./Button/Button";
import Product from "./Product/Product";

interface Article {
  objectID: string;
  title: string;
  url: string;
}

interface ArticleHttpResponse {
  hits: Article[];
}

export default function App() {
const handleOrder = (data: string) => {
  console.log("Order received from:", data);

}
// 1. Оголошуємо і типізуємо стан
const [articles, setArticles] = useState<Article[]>([]);
const handleSearch = async (topic: string) => {
  const response = await axios.get<ArticleHttpResponse>(
    `https://hn.algolia.com/api/v1/search?query=${topic}`
  );
  // 2. Записуємо дані в стан після запиту
  setArticles(response.data.hits);
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
