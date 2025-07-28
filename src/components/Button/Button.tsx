// src/components/Button.tsx

import clsx from "clsx";
import css from "./Button.module.css";

interface ButtonProps {
  variant?: "primary" | "secondary";
  text: string;
  onClick: () => void;
}

export default function Button({ variant, text, onClick }: ButtonProps) {
  return (
    <button 
    onClick={onClick}
 className={clsx(css.button, variant && css[variant])}>
      {text}
    </button>
  );
}
