import { CSSProperties } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CategoryGroups } from "./components/category_groups/CategoryGroups";
import { Sidebar } from "./components/Sidebar";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { CardBodyCreate } from "./components/category_forms/CardBodyCreate";
import { CardBodyEdit } from "./components/category_forms/CardBodyEdit";
import { CategorySearch } from "./components/category_groups/CategorySearch";

const cardWrapper: CSSProperties = {
  background: "hsl(var(--primary-hue) 35% 28%)",
  borderRadius: "20px",
  minWidth: "768px",
  maxWidth: "1120px",
  minHeight: "500px",
  maxHeight: "876px",
};
const cardBody: CSSProperties = {
  width: "100%",
  height: "100%",
};

// Create category types
export type Category = {
  id: string;
} & CategoryDetails;
export type CategoryDetails = {
  name: string;
  desc: string;
  imgName: string;
  createdAt: string;
};

function App() {
  const [currentViewType, setCurrentViewType] = useLocalStorage<string>(
    "View type",
    ""
  );
  const [categories, setCategories] = useLocalStorage<Category[]>(
    "Categories",
    []
  );
  function onViewSwitch(viewType: string) {
    setCurrentViewType(viewType);
  }
  function createCategory({ ...data }: CategoryDetails) {
    setCategories((prev) => {
      return [...prev, { id: crypto.randomUUID(), ...data }];
    });
  }
  function updateCategory(id: string, { ...data }: CategoryDetails) {
    setCategories((prev) => {
      return prev.map((cat) => {
        if (cat.id === id) {
          return { ...cat, ...data };
        } else {
          return cat;
        }
      });
    });
  }
  function deleteCategory(id: string) {
    setCategories((prev) => {
      return prev.filter((cat) => cat.id !== id);
    });
  }
  return (
    <div className="container">
      <div style={cardWrapper} className="py-4 px-4 flex align-items-center">
        <Sidebar />
        <div style={cardBody} className="py-3 px-4">
          <Routes>
            <Route
              path="/"
              element={
                <CategoryGroups
                  currentViewType={currentViewType}
                  switchViewType={onViewSwitch}
                  categories={categories}
                  deleteCategory={deleteCategory}
                />
              }
            />
            <Route
              path="/create"
              element={<CardBodyCreate createCategory={createCategory} />}
            />
            <Route
              path="/search"
              element={
                <CategorySearch
                  currentViewType={currentViewType}
                  switchViewType={onViewSwitch}
                  deleteCategory={deleteCategory}
                  categories={categories}
                />
              }
            />
            <Route path="/:id">
              <Route
                path="edit"
                element={
                  <CardBodyEdit
                    categories={categories}
                    updateCategory={updateCategory}
                  />
                }
              />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
