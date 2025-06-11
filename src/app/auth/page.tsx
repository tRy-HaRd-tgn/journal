import styles from "./styles.module.scss";
import { RegisterForm } from "../../components/registerForm";
export default function Page() {
  return (
    <div className={styles.container}>
      <RegisterForm></RegisterForm>
    </div>
  );
}
