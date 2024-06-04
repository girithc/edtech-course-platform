// components/Results.tsx
interface Item {
  id: number;
  title: string;
  description: string;
  categories: string[];
}

interface ResultsProps {
  filteredItems: Item[];
}

const Results: React.FC<ResultsProps> = ({ filteredItems }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredItems.map((item) => (
        <div key={item.id} className="p-4 border rounded">
          <h3 className="text-xl font-bold">{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;
