import { CategoryDetails } from "../../App";
import { CategoryForm } from "./CategoryForm";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

type CardBodyCreateProps = {
  createCategory: (category: CategoryDetails) => void;
};

export function CardBodyCreate({ createCategory }: CardBodyCreateProps) {
  const createdAt = new Date().toLocaleDateString();
  return (
    <>
      <h2 className="flex align-items-center g-2 mb-5">
        <Link to="/">
          <AiOutlineArrowLeft />
        </Link>
        Create Category
      </h2>
      <CategoryForm submitCategory={createCategory} createdAt={createdAt} />
    </>
  );
}
