import List from "@/components/cars/List";
import HeroBanner from "@/components/home/HeroBanner";

const cars = [
  {
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
  },
  {
    id: 2,
    title: "Ford Mustang",
    category: "Sports Car",
    car_image: "cars/Car-12.png",
    car_details: {
      oil: "Gasoline",
      transmission: "Automatic",
      capacity: 4,
      gas_tank_capacity: "60L",
    },
    price_per_day: 80,
    discounted_price_per_day: 75,
    full_description:
      "The Ford Mustang is an iconic American sports car known for its powerful performance and classic design.",
    official_website_link: "https://www.ford.com/mustang",
    slug: "ford-mustang",
  },
  {
    id: 3,
    title: "Jeep Wrangler",
    category: "SUV",
    car_image: "cars/Car-2.png",
    car_details: {
      oil: "Gasoline",
      transmission: "Automatic",
      capacity: 4,
      gas_tank_capacity: "70L",
    },
    price_per_day: 70,
    full_description:
      "The Jeep Wrangler is a rugged and capable SUV designed for off-road adventures.",
    official_website_link: "https://www.jeep.com/wrangler",
    slug: "jeep-wrangler",
  },
  {
    id: 4,
    title: "Honda Civic",
    category: "Hatchback",
    car_image: "cars/Car-3.png",
    car_details: {
      oil: "Gasoline",
      transmission: "Automatic",
      capacity: 5,
      gas_tank_capacity: "45L",
    },
    price_per_day: 55,
    discounted_price_per_day: 50,
    full_description:
      "The Honda Civic is a versatile compact car known for its reliability and sporty design.",
    official_website_link: "https://automobiles.honda.com/civic",
    slug: "honda-civic",
  },
  {
    id: 5,
    title: "Chevrolet Camaro",
    category: "Sports Car",
    car_image: "cars/Car-4.png",
    car_details: {
      oil: "Gasoline",
      transmission: "Automatic",
      capacity: 4,
      gas_tank_capacity: "55L",
    },
    price_per_day: 85,
    full_description:
      "The Chevrolet Camaro is a high-performance sports car known for its sleek design and exhilarating driving experience.",
    official_website_link: "https://www.chevrolet.com/camaro",
    slug: "chevrolet-camaro",
  },
  {
    id: 6,
    title: "Subaru Outback",
    category: "SUV",
    car_image: "cars/Car-5.png",
    car_details: {
      oil: "Gasoline",
      transmission: "Automatic",
      capacity: 5,
      gas_tank_capacity: "65L",
    },
    price_per_day: 65,
    discounted_price_per_day: 60,
    full_description:
      "The Subaru Outback is a versatile SUV offering a comfortable ride, spacious interior, and capable all-wheel drive.",
    official_website_link: "https://www.subaru.com/outback",
    slug: "subaru-outback",
  },
  {
    id: 7,
    title: "Mazda3",
    category: "Hatchback",
    car_image: "cars/Car-6.png",
    car_details: {
      oil: "Gasoline",
      transmission: "Automatic",
      capacity: 5,
      gas_tank_capacity: "50L",
    },
    price_per_day: 60,
    full_description:
      "The Mazda3 is a stylish and fun-to-drive hatchback with impressive fuel efficiency and agile handling.",
    official_website_link: "https://www.mazdausa.com/mazda3",
    slug: "mazda3",
  },
  {
    id: 8,
    title: "Audi A3",
    category: "Sedan",
    car_image: "cars/Car-7.png",
    car_details: {
      oil: "Gasoline",
      transmission: "Automatic",
      capacity: 5,
      gas_tank_capacity: "60L",
    },
    price_per_day: 70,
    full_description:
      "The Audi A3 is a luxurious compact sedan with a refined interior and strong performance.",
    official_website_link:
      "https://www.audiusa.com/us/web/en/models/a3/a3/2024/overview.html",
    slug: "audi-a3",
  },
  {
    id: 9,
    title: "Toyota RAV4",
    category: "SUV",
    car_image: "cars/Car-8.png",
    car_details: {
      oil: "Gasoline",
      transmission: "Automatic",
      capacity: 5,
      gas_tank_capacity: "65L",
    },
    price_per_day: 75,
    discounted_price_per_day: 70,
    full_description:
      "The Toyota RAV4 is a compact SUV offering a comfortable ride, spacious interior, and strong fuel efficiency.",
    official_website_link: "https://www.toyota.com/rav4",
    slug: "toyota-rav4",
  },
  {
    id: 10,
    title: "Volkswagen Golf",
    category: "Hatchback",
    car_image: "cars/Car-9.png",
    car_details: {
      oil: "Gasoline",
      transmission: "Automatic",
      capacity: 5,
      gas_tank_capacity: "50L",
    },
    price_per_day: 55,
    full_description:
      "The Volkswagen Golf is a practical and fun-to-drive hatchback offering a spacious interior and refined driving dynamics.",
    official_website_link: "https://www.vw.com/en/models/golf-gti.html",
    slug: "volkswagen-golf",
  },
  {
    id: 11,
    title: "Porsche 911",
    category: "Sports Car",
    car_image: "cars/Car-10.png",
    car_details: {
      oil: "Gasoline",
      transmission: "Automatic",
      capacity: 4,
      gas_tank_capacity: "65L",
    },
    price_per_day: 150,
    full_description:
      "The Porsche 911 is a legendary sports car known for its precise handling, powerful engine options, and timeless design.",
    official_website_link: "https://www.porsche.com/international/models/911/",
    slug: "porsche-911",
  },
  {
    id: 12,
    title: "Kia Sportage",
    category: "SUV",
    car_image: "cars/Car-11.png",
    car_details: {
      oil: "Gasoline",
      transmission: "Automatic",
      capacity: 5,
      gas_tank_capacity: "60L",
    },
    price_per_day: 70,
    full_description:
      "The Kia Sportage is a compact SUV offering a comfortable ride, user-friendly technology, and strong value.",
    official_website_link: "https://www.kia.com/us/en/sportage",
    slug: "kia-sportage",
  },
  {
    id: 13,
    title: "Hyundai Elantra",
    category: "Sedan",
    car_image: "cars/Car-12.png",
    car_details: {
      oil: "Gasoline",
      transmission: "Automatic",
      capacity: 5,
      gas_tank_capacity: "55L",
    },
    price_per_day: 60,
    full_description:
      "The Hyundai Elantra is a compact sedan offering a smooth ride, spacious interior, and strong value.",
    official_website_link: "https://www.hyundaiusa.com/elantra",
    slug: "hyundai-elantra",
  },
  {
    id: 14,
    title: "BMW X3",
    category: "SUV",
    car_image: "cars/Car-13.png",
    car_details: {
      oil: "Gasoline",
      transmission: "Automatic",
      capacity: 5,
      gas_tank_capacity: "70L",
    },
    price_per_day: 90,
    discounted_price_per_day: 85,
    full_description:
      "The BMW X3 is a luxury SUV offering agile handling, a spacious interior, and advanced technology features.",
    official_website_link: "https://www.bmwusa.com/x3",
    slug: "bmw-x3",
  },
  {
    id: 15,
    title: "Chevrolet Bolt EV",
    category: "Hatchback",
    car_image: "cars/Car-14.png",
    car_details: {
      oil: "Electric",
      transmission: "Automatic",
      capacity: 5,
      gas_tank_capacity: "65L",
    },
    price_per_day: 80,
    full_description:
      "The Chevrolet Bolt EV is an all-electric hatchback offering impressive range, practicality, and modern features.",
    official_website_link: "https://www.chevrolet.com/bolt-ev15",
    slug: "chevrolet-bolt-ev",
  },
  {
    id: 16,
    title: "Audi Q5",
    category: "SUV",
    car_image: "cars/Car-15.png",
    car_details: {
      oil: "Gasoline",
      transmission: "Automatic",
      capacity: 5,
      gas_tank_capacity: "70L",
    },
    price_per_day: 100,
    full_description:
      "The Audi Q5 is a luxury SUV offering a refined ride, upscale interior, and strong performance.",
    official_website_link: "https://www.audiusa.com/q5",
    slug: "audi-q5",
  },
  {
    id: 17,
    title: "Mazda MX-5 Miata",
    category: "Sports Car",
    car_image: "cars/Car-16.png",
    car_details: {
      oil: "Gasoline",
      transmission: "Manual",
      capacity: 2,
      gas_tank_capacity: "50L",
    },
    price_per_day: 90,
    full_description:
      "The Mazda MX-5 Miata is a legendary sports car known for its agile handling, lively performance, and open-top driving experience.",
    official_website_link: "https://www.mazdausa.com/vehicles/mx-5-miata",
    slug: "mazda-mx-5-miata",
  },
  {
    id: 18,
    title: "Nissan Rogue",
    category: "SUV",
    car_image: "cars/Car-17.png",
    car_details: {
      oil: "Gasoline",
      transmission: "Automatic",
      capacity: 5,
      gas_tank_capacity: "65L",
    },
    price_per_day: 75,
    full_description:
      "The Nissan Rogue is a compact SUV offering a comfortable ride, spacious cabin, and strong safety features.",
    official_website_link: "https://www.nissanusa.com/rogue",
    slug: "nissan-rogue",
  },
  {
    id: 19,
    title: "Volkswagen Jetta",
    category: "Sedan",
    car_image: "cars/Car-12.png",
    car_details: {
      oil: "Gasoline",
      transmission: "Automatic",
      capacity: 5,
      gas_tank_capacity: "55L",
    },
    price_per_day: 65,
    full_description:
      "The Volkswagen Jetta is a compact sedan offering a comfortable ride, spacious interior, and modern features.",
    official_website_link: "https://www.vw.com/jetta",
    slug: "volkswagen-jetta",
  },
  {
    id: 20,
    title: "Tesla Model 3",
    category: "Sedan",
    car_image: "cars/Car-16.png",
    car_details: {
      oil: "Electric",
      transmission: "Automatic",
      capacity: 5,
      gas_tank_capacity: "80L",
    },
    price_per_day: 100,
    discounted_price_per_day: 95,
    full_description:
      "The Tesla Model 3 is an all-electric sedan offering impressive range, exhilarating performance, and cutting-edge technology.",
    official_website_link: "https://www.tesla.com/model3",
    slug: "tesla-model-3",
  },
];

export default function Home() {
  return (
    <>
      <HeroBanner />
      <List title="All cars" cars={cars} />
    </>
  );
}
