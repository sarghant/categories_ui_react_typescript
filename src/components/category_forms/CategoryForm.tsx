import React, { useState, useRef, FormEvent } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { Category, CategoryDetails } from "../../App";
import styles from "../module_css/CardBody.module.css";

type CategoryFormProps = {
  submitCategory: (category: CategoryDetails) => void;
  createdAt: string;
} & Partial<Category>;

export const formGroupClasses = "flex flex-column g-2 mb-4";

export function CategoryForm({
  submitCategory,
  createdAt,
  name = "",
  desc = "",
  imgName = "",
}: CategoryFormProps) {
  const [filename, setFilename] = useState<string>(imgName);
  const nameRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLTextAreaElement>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const goTo = useNavigate();

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    fileInputRef.current?.click();
  }
  function handleChange(e: React.ChangeEvent) {
    const target = e.target as HTMLInputElement;
    if (target.files) {
      const imgFile = target.files[0];
      setFilename(imgFile.name);
    }
  }
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    submitCategory({
      name: nameRef.current!.value,
      desc: descRef.current!.value,
      imgName: filename,
      createdAt: createdAt,
    });
    goTo("/");
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className={formGroupClasses}>
        <label htmlFor="category-name">Category Name</label>
        <input
          type="text"
          id="category-name"
          className={styles["form-control"]}
          required
          defaultValue={name}
          ref={nameRef}
        />
      </div>
      <div className={formGroupClasses}>
        <label htmlFor="category-desc">Description (Short)</label>
        <textarea
          rows={2}
          maxLength={45}
          id="category-desc"
          className={styles["form-control"]}
          required
          defaultValue={desc}
          ref={descRef}
        ></textarea>
      </div>
      <div className={formGroupClasses}>
        <label>Category Image (Thumbnail)</label>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleChange}
          style={{ display: "none" }}
        />
        <div className="flex align-items-center g-3">
          <span className={styles["file-info"]}>
            {filename ? filename : "No file chosen."}
          </span>
          <button className={styles["btn-file"]} onClick={handleClick}>
            Choose File
          </button>
        </div>
      </div>
      <button className={`${styles["btn-create"]} mt-5`} type="submit">
        Submit
      </button>
    </form>
  );
}
