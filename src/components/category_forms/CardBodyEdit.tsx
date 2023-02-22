import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { Category, CategoryDetails } from "../../App";
import { CategoryForm } from "./CategoryForm";

type CardBodyEditProps = {
  categories: Category[];
  updateCategory: (id: string, category: CategoryDetails) => void;
} & Partial<Category>;

export function CardBodyEdit({
  categories,
  updateCategory,
}: CardBodyEditProps) {
  const { id } = useParams();
  const category = categories.find((cat) => cat.id === id);
  return (
    <>
      <h2 className="flex align-items-center g-2 mb-5">
        <Link to="/">
          <AiOutlineArrowLeft />
        </Link>
        Edit Category
      </h2>
      {category && (
        <CategoryForm
          submitCategory={(cat) => updateCategory(category.id, cat)}
          name={category.name}
          desc={category.desc}
          imgName={category.imgName}
          createdAt={category.createdAt}
        />
      )}
    </>
  );
}
