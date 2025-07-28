// src/components/Product.tsx
import Button from '../Button/Button';
import styles from './Product.module.css';

interface ProductProps {
  name: string;
  imgUrl: string;
  price: number;
  onBuy: (productName: string) => void;
};

export default function Product({ name, imgUrl, price, onBuy }: ProductProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{name}</h2>
      <img src={imgUrl} alt={name} width="320" />
      <p>Price: {price} credits</p>
      <Button
      variant="primary"
      text="Buy"
      onClick={() => onBuy(name)}
      />
    </div>
  );
}
