import Card from "@/components/cars/Card";
import { Car } from "@/types/type";

interface ListCar {
  cars: Car[];
  title: string;
}

const List: React.FC<ListCar> = ({ cars, title }) => {
  return (
    <div>
      <p>{title}</p>
      <div>
        {cars.map((car) => (
          <div key={car.id}>
            <Card car={car} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
