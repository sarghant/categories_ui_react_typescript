import { Category } from "../../App";
import { Link } from "react-router-dom";
import { IoCreateOutline, IoTrashBin, IoAddOutline } from "react-icons/io5";
import styles from "../module_css/CardBody.module.css";

type CategoryListProps = {
  categories: Category[];
  deleteCategory: (id: string) => void;
  hasCreate?: boolean;
};

export function CategoryList({
  categories,
  deleteCategory,
  hasCreate = false,
}: CategoryListProps) {
  return (
    <div className={`${styles.list} flex flex-column`}>
      <div className={styles["row-h"]}>
        <span></span>
        <h4>Title</h4>
        <h4>Description</h4>
        <h4>Date Created</h4>
        <h4>Edit</h4>
        <h4>Delete</h4>
      </div>
      {categories.length > 0 && (
        <div className={styles["row-wrapper"]}>
          {categories.map((cat) => (
            <div key={cat.id} className={`${styles.row} my-2`}>
              <img src={`/img/${cat.imgName}`} alt="Category thumbnail" />
              <h4>{cat.name}</h4>
              <small className={styles.desc}>{cat.desc}</small>
              <small>{cat.createdAt}</small>
              <Link to={`${cat.id}/edit`} className={styles.icon}>
                <IoCreateOutline size="20" />
              </Link>
              <div
                onClick={() => deleteCategory(cat.id)}
                className={styles.icon}
              >
                <IoTrashBin />
              </div>
            </div>
          ))}
        </div>
      )}
      {hasCreate && (
        <Link to="/create" className={`${styles["row-create"]}`}>
          <IoAddOutline size="26" className={styles.icon} />
          <small>Add new...</small>
        </Link>
      )}
    </div>
  );
}
