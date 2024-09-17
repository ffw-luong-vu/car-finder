import gasStation from "@/assets/icons/gas-station.svg";
import profileTwoUser from "@/assets/icons/profile-2user.svg";
import transmission from "@/assets/icons/transmission.svg";
import carDemo from "@/assets/images/car-demo.png";
import { Car } from "@/types/type";
import Image from "next/image";
import Link from "next/link";

const Card: React.FC<{ car: Car }> = ({ car }) => {
  return (
    <div className="p-4 bg-white rounded-[10px] md:p-6">
      <div className="flex justify-between align-top mb-3 md:mb-12">
        <div>
          <p className="font-semibold text-dark-gunmetal mb-1 md:text-xl">
            {car.title}
          </p>
          <p className="text-xs md:text-sm">{car.category}</p>
        </div>
        <div>
          <span className="btn-like"></span>
        </div>
      </div>
      <div className="flex justify-between align-bottom mb-10 pl-4 gap-12 md:mb-5 md:flex-col md:gap-16 md:pl-0">
        <div>
          <Image src={carDemo} alt="car demo" />
        </div>
        <div className="flex-shrink-0 md:flex md:justify-between md:gap-1">
          <p className="flex gap-1 items-center mb-4 md:mb-0">
            <span>
              <Image
                src={gasStation}
                alt="gas station"
                width={24}
                height={24}
                className="w-[14px] h-[14px] md:w-6 md:h-6"
              />
            </span>
            <span className="text-xs leading-[14px] font-medium md:text-sm">
              {car.car_details.gas_tank_capacity}
            </span>
          </p>
          <p className="flex gap-1 items-center mb-4 md:mb-0">
            <span>
              <Image
                src={transmission}
                alt="transmission"
                width={24}
                height={24}
                className="w-[14px] h-[14px] md:w-6 md:h-6"
              />
            </span>
            <span className="text-xs leading-[14px] font-medium md:text-sm">
              {car.car_details.transmission}
            </span>
          </p>
          <p className="flex gap-1 items-center">
            <span>
              <Image
                src={profileTwoUser}
                alt="capacity"
                width={24}
                height={24}
                className="w-[14px] h-[14px] md:w-6 md:h-6"
              />
            </span>
            <span className="text-xs leading-[14px] font-medium md:text-sm">
              {car.car_details.capacity} people
            </span>
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p>
          <span className="font-bold text-dark-gunmetal text-xl">
            ${car.discounted_price_per_day || car.price_per_day}/
          </span>
          day
          {car.discounted_price_per_day && (
            <span className="block line-through text-sm font-bold mt1">
              ${car.price_per_day}
            </span>
          )}
        </p>
        <Link href={`/cars/${car.id}`} className="btn-primary">
          Rent now
        </Link>
      </div>
    </div>
  );
};

export default Card;
