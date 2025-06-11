"use client";
import Image from "next/image";
import styles from "./not-found.module.scss";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
export default function NotFound() {
  const router = useRouter();
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "black",
        fontSize: "150%",
        flexDirection: "column",
        paddingTop: "12%",
        paddingBottom: "15%",
        color: "white",
      }}
    >
      404
      <p
        className={styles.text}
        style={{ textAlign: "center", color: "white" }}
      >
        данная страница не найдена
      </p>
      <p
        className={styles.text}
        style={{ textAlign: "center", color: "white" }}
      >
        Мы приносим извинения за доставленные неудобства
      </p>
      <Image
        style={{ marginTop: "2%" }}
        src="/smile.png"
        alt="error"
        width={300}
        height={300}
      />
      <Button
        onClick={() => {
          router.replace("/");
        }}
        className={styles.btn}
        style={{ marginTop: "2%", cursor: "pointer" }}
      >
        вернуться на главную
      </Button>
    </div>
  );
}
