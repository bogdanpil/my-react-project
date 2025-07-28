// src/components/Product.tsx
import styles from './Product.module.css';

interface ProductProps {
  name: string;
  imgUrl: string;
  price: number;
};

export default function Product({ name, imgUrl, price }: ProductProps) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{name}</h2>
      <img src={imgUrl} alt={name} width="320" />
      <p>Price: {price} credits</p>
    </div>
  );
}
