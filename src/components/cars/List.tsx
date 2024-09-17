import Card from "@/components/cars/Card";
import { Car } from "@/types/type";

interface ListCar {
  cars: Car[];
  title: string;
}

const List: React.FC<ListCar> = ({ cars, title }) => {
  return (
    <div className="px-6 md:px-16 mb-8">
      <p className="inline-block text-center mb-7 text-sm font-semibold md:min-w-[132px] md:text-base md:py-3 md:mb-5">
        {title}
      </p>
      <div className="grid grid-cols-1 gap-3 md:gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
