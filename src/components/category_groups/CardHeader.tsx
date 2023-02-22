import { MouseEvent } from "react";
import styles from "../module_css/CardHeader.module.css";

type CardHeader = {
  heading: string;
  switchViewType: (viewType: string) => void;
  currentViewType: string;
};

export function CardHeader({
  heading,
  switchViewType,
  currentViewType,
}: CardHeader) {
  function handleViewTypeSwitch(e: MouseEvent) {
    const target = e.target as HTMLButtonElement;
    if (target) switchViewType(target.value);
  }
  return (
    <div className="flex justify-content-between align-items-center mb-5">
      <h2>{heading}</h2>
      <div className="flex">
        <button
          type="button"
          value="grid"
          onClick={(e) => handleViewTypeSwitch(e)}
          className={`flex justify-content-center align-items-center ${
            styles.btn
          } ${styles["btn-grid"]} ${
            currentViewType === "grid" ? styles.active : ""
          } ${currentViewType == "" ? styles.active : ""}`}
        >
          {/* Grid cells */}
          <div className={`${styles.grid} g-1`}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <button
          type="button"
          value="list"
          onClick={(e) => handleViewTypeSwitch(e)}
          className={`flex justify-content-center align-items-center ${
            styles.btn
          } ${styles["btn-list"]} ${
            currentViewType === "list" ? styles.active : ""
          }`}
        >
          <div className={`${styles.list} flex flex-column g-1`}>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </div>
  );
}
