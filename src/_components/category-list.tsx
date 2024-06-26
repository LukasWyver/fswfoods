import { db } from "@/_lib/prisma";
import CategoryItem from "./category-item";

const CategoryList = async () => {
  const categories = await db.category.findMany({});

  return (
    <div className="-my-2 flex flex-row gap-3 overflow-x-scroll px-5 py-2 [&::-webkit-scrollbar]:hidden">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoryList;
