"use client";
import styles from "./main.module.scss";
import { LoginForm } from "../components/loginForm";

export default function Home() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}
