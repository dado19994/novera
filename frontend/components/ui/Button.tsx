import type { AnchorHTMLAttributes, ReactNode } from "react";
import styles from "./button.module.css";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "text";
}

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <a className={`${styles.button} ${styles[variant]} ${className}`} {...props}>
      {children}
    </a>
  );
}
