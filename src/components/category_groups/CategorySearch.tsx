import { useState, useMemo } from "react";
import { CardHeader } from "./CardHeader";
import { formGroupClasses } from "../category_forms/CategoryForm";
import styles from "../module_css/CardBody.module.css";
import { Category } from "../../App";
import { CategoryCards } from "./CategoryCards";
import { CategoryList } from "./CategoryList";

type CategorySearchProps = {
  currentViewType: string;
  switchViewType: (viewType: string) => void;
  deleteCategory: (id: string) => void;
  categories: Category[];
};

export function CategorySearch({
  currentViewType,
  switchViewType,
  deleteCategory,
  categories,
}: CategorySearchProps) {
  const [name, setName] = useState("");
  const filteredCategories = useMemo(() => {
    return categories.filter(
      (cat) =>
        name !== "" && cat.name.toLowerCase().includes(name.toLowerCase())
    );
  }, [name]);
  return (
    <>
      <CardHeader
        heading="Search"
        currentViewType={currentViewType}
        switchViewType={switchViewType}
      />
      <div className={formGroupClasses}>
        <label htmlFor="search-name">Search by category name</label>
        <input
          type="text"
          id={styles["search-name"]}
          placeholder="Search name..."
          className={styles["form-control"]}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {currentViewType === "list" ? (
        <CategoryList
          categories={filteredCategories}
          deleteCategory={deleteCategory}
        />
      ) : (
        <CategoryCards categories={filteredCategories} />
      )}
    </>
  );
}
