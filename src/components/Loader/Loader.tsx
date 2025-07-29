// src/components/Loader/Loader.tsx
import { HashLoader } from "react-spinners";
import styles from "./Loader.module.css"; // Для стилів

interface LoaderProps {
  loading: boolean;
  size?: number;
  color?: string;
}

export default function Loader({ loading, size = 60, color = "#36d7b7" }: LoaderProps) {
  return (
    loading && (
      <div className={styles.wrapper}>
        <HashLoader size={size} color={color} loading={loading} />
      </div>
    )
  );
}