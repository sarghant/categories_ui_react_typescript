import { Category } from "../../App";
import { CategoryCards } from "./CategoryCards";
import { CategoryList } from "./CategoryList";

type CardBodyProps = {
  currentViewType: string;
  categories: Category[];
  deleteCategory: (id: string) => void;
};

export function CardBody({
  currentViewType,
  categories,
  deleteCategory,
}: CardBodyProps) {
  // A boolean to easily determine classes based on view type
  // The empty string condition is for the initial load in the browser when local storage is empty
  // and current view type is not set
  const isListView = currentViewType !== "grid" && currentViewType !== "";
  return isListView ? (
    <CategoryList
      hasCreate={true}
      categories={categories}
      deleteCategory={deleteCategory}
    />
  ) : (
    <CategoryCards hasCreate={true} categories={categories} />
  );
}
