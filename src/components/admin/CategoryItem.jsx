export default function CategoryItem({ category, onDelete }) {
  return (
    <li className="flex items-center justify-between p-3 bg-subtle-light dark:bg-subtle-dark rounded-lg">
      <span className="font-medium">{category.name}</span>
      <div>
        <button className="mx-3 text-blue-600 dark:text-blue-500 hover:underline text-sm font-medium">Edit</button>
        <button onClick={() => onDelete(category.id)} className="text-red-600 dark:text-red-500 hover:underline text-sm font-medium">
          Delete
        </button>
      </div>
    </li>
  );
}
