import styles from "./styles.module.scss";
import { SystempProps } from "@/types/systemPorops";

export const SystemComponent = ({
  img,
  text,
  link,
  setState,
}: SystempProps) => {
  return (
    <a
      href={link}
      onClick={(e) => {
        setState(text);
      }}
      className="bg-white rounded-lg shadow-sm p-4 border border-gray-100 hover:border-indigo-300 hover:shadow-md transition-all"
    >
      <div className="text-indigo-600 mb-2">
        <span className="material-icons text-3xl">{img}</span>
      </div>
      <h3 className="font-medium text-gray-800">{text}</h3>
    </a>
  );
};
