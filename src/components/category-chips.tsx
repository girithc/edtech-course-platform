// components/CategoryChips.tsx
import { useState } from "react";

interface CategoryChipsProps {
  onCategorySelect: (selectedCategories: string[]) => void;
}

const categories = ["Category 1", "Category 2", "Category 3", "Category 4"];

const CategoryChips: React.FC<CategoryChipsProps> = ({ onCategorySelect }) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleChipClick = (category: string) => {
    const updatedSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((cat) => cat !== category)
      : [...selectedCategories, category];
    setSelectedCategories(updatedSelectedCategories);
    onCategorySelect(updatedSelectedCategories);
  };

  return (
    <div className="flex flex-wrap justify-center my-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`m-2 px-4 py-2 rounded-full border-2 ${
            selectedCategories.includes(category)
              ? "bg-blue-500 text-white"
              : "bg-white text-black border-black"
          }`}
          onClick={() => handleChipClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryChips;
