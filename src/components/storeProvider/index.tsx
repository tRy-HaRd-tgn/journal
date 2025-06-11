import { Children, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";
import {
  updateAuth,
  updateUserCourses,
  updateUserInfo,
} from "../../store/slices/userSlice";
import { Spinner } from "../ui/spinner";
interface PrivateRouteProps {
  children: React.ReactNode;
}
export const StoreProvider = ({ children }: PrivateRouteProps) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  async function getUserProfile() {
    try {
      setTimeout(() => {
        dispatch(updateAuth(true));
        setLoading(false);
      }, 2000);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }
  useEffect(() => {
    getUserProfile();
  }, []);
  return (
    <div
      style={{
        width: "100vw",
        height: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {loading ? (
        <div className={styles.container}>
          <Spinner className="size-18" />
        </div>
      ) : (
        children
      )}
    </div>
  );
};
