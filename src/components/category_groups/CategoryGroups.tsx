import { Category } from "../../App";
import { CardBody } from "./CardBody";
import { CardHeader } from "./CardHeader";

type CategoryGroupsProps = {
  currentViewType: string;
  switchViewType: (viewType: string) => void;
  categories: Category[];
  deleteCategory: (id: string) => void;
};

export function CategoryGroups({
  currentViewType,
  switchViewType,
  categories,
  deleteCategory,
}: CategoryGroupsProps) {
  return (
    <>
      <CardHeader
        heading="Groups"
        switchViewType={switchViewType}
        currentViewType={currentViewType}
      />
      <CardBody
        currentViewType={currentViewType}
        categories={categories}
        deleteCategory={deleteCategory}
      />
    </>
  );
}
