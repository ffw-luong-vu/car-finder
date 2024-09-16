import { Car } from "@/types/type";

const Card: React.FC<{ car: Car }> = ({ car }) => {
  return (
    <div className="p-4">
      <div className="flex justify-between align-top mb-3">
        <div>
          <p className="font-semibold text-dark-gunmetal mb-1">{car.title}</p>
          <p>{car.category}</p>
        </div>
        <div>
          <button>Like</button>
        </div>
      </div>
      <div className="flex justify-between align-bottom mb-10"></div>
    </div>
  );
};

export default Card;
