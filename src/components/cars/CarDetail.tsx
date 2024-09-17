import carDemo from "@/assets/images/car-demo.png";
import Image from "next/image";
import Link from "next/link";

const CarDetail = () => {
  const car = {
    id: 1,
    title: "Toyota Corolla",
    category: "Sedan",
    car_image: "cars/Car-1.png",
    car_details: {
      oil: "Gasoline",
      transmission: "Automatic",
      capacity: 5,
      gas_tank_capacity: "50L",
    },
    price_per_day: 50,
    discounted_price_per_day: 45,
    full_description:
      "The Toyota Corolla is a compact car that is known for its reliability and fuel efficiency.",
    official_website_link: "https://www.toyota.com/corolla",
    slug: "toyota-corolla",
  };

  return (
    <div>
      <div className="px-2 py-9 bg-sonic-silver mb-5 md:px-12">
        <div className="flex flex-col mb-16 md:flex-col-reverse md:mb-28">
          <h1 className="text-4xl font-extrabold text-white mb-3 md:text-center md:text-[42px] leading-relaxed">
            {car.title}
          </h1>
          <p className="text-white text-[28px] font-bold md:text-right">
            <span className="text-[32px]">${car.price_per_day}</span> / day
          </p>
        </div>
        <div className="mb-3 md:mb-0 flex items-center justify-center">
          <Image src={carDemo} alt="car demo" width={956} height={302} />
        </div>
      </div>
      <div className="bg-white p-5 md:pt-7 md:pb-9 md:px-6">
        <div className="pb-9 border-b border-philip-silver mb-9">
          <p className="text-lg text-dark-gunmetal font-bold mb-3">
            Description
          </p>
          <p className="text-dark-electric-blue">{car.full_description}</p>
        </div>
        <div className="md:flex md:justify-between lg:gap-[200px] lg:justify-start">
          <div className="mb-9 md:mb-0">
            <p className="text-lg text-dark-gunmetal font-bold mb-3">
              Technical Details
            </p>
            <table className="w-full md:min-w-[400px] lg:min-w-[458px]">
              <tbody>
                <tr>
                  <td className="border border-philip-silver px-1 py-2 md:px-2">
                    <p className="flex justify-between">
                      <span>Type Car</span>
                      <span className="font-semibold text-dark-electric-blue">
                        {car.category}
                      </span>
                    </p>
                  </td>
                  <td className="border border-philip-silver p-2">
                    <p className="flex justify-between">
                      <span>Capacity</span>
                      <span className="font-semibold text-dark-electric-blue">
                        {car.car_details.capacity} people
                      </span>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td className="border border-philip-silver px-1 py-2 md:px-2">
                    <p className="flex justify-between">
                      <span>Steering</span>
                      <span className="font-semibold text-dark-electric-blue">
                        {car.car_details.transmission}
                      </span>
                    </p>
                  </td>
                  <td className="border border-philip-silver px-1 py-2 md:px-2">
                    <p className="flex justify-between">
                      <span>Gasoline</span>
                      <span className="font-semibold text-dark-electric-blue">
                        {car.car_details.gas_tank_capacity}
                      </span>
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-2 md:flex md:flex-col md:items-center">
            <p className="text-lg text-dark-gunmetal font-bold mb-3">
              More info about {car.title}
            </p>
            <Link
              href={car.official_website_link}
              className="text-dark-gunmetal underline"
              target="_blank"
            >
              {car.title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
