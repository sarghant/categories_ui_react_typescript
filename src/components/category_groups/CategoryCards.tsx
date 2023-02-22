import { IoAddCircle, IoCreateOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Category } from "../../App";
import styles from "../module_css/CardBody.module.css";

type CategoryCardsProps = {
  categories: Category[];
  hasCreate?: boolean;
};

export function CategoryCards({
  categories,
  hasCreate = false,
}: CategoryCardsProps) {
  return (
    <div className="flex flex-wrap g-3">
      {hasCreate && (
        <Link to="/create">
          <div className={`${styles.card} ${styles.create} g-1`}>
            <IoAddCircle fill="var(--primary-bg)" size="50" />
            <small>Create Group</small>
          </div>
        </Link>
      )}
      {categories.length > 0 &&
        categories.map((cat) => (
          <Link to={`/${cat.id}/edit`} key={cat.id}>
            <div className={styles.card}>
              <img src={`/img/${cat.imgName}`} alt="Category thumbnail" />
              <h4 className="mt-2">{cat.name}</h4>
              <small className={styles.desc}>{cat.desc}</small>
              <div className={styles.icon}>
                <IoCreateOutline size="20" />
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
