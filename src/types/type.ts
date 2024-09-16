export interface CarDetails {
  oil: string;
  transmission: string;
  capacity: number;
  gas_tank_capacity: string;
}

export interface Car {
  id: number;
  title: string;
  category: string;
  car_image: string;
  car_details: CarDetails;
  price_per_day: number;
  discounted_price_per_day: number;
  full_description: string;
  official_website_link: string;
  slug: string;
}
