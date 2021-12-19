export type Store = {
  id: string;
  image?: string;
  description?: string;
  price?: number;
  discountPrice?: number;
  sale?: number;
  title?: string;
  colors?: string[];
};

const store: Store[] = [
  {
    id: "1",
    image:
      "https://safetynetwireless.com/wp-content/uploads/2018/04/SafetyNet_Phone.png",
    description:
      "The phone features a 6.088 inch HD+ (1560 x 720 pixel) resolution, 283ppi Super AMOLED display, a glass and plastic body, with Corning Gorilla Glass 5 protection on its front as well as its back. It is powered by a Qualcomm Snapdragon 665 SoC. It also has a 2.0, Type-C 1.0 reversible connector.",
    price: 400,
    discountPrice: 240,
    sale: 40,
    title: "SmartPhone 1",
    colors: ["Black", "Cosmos", "Pink", "Blue"],
  },
  {
    id: "2",
    image:
      "https://safetynetwireless.com/wp-content/uploads/2018/04/SafetyNet_Phone.png",
    description: "Phone 2",
    price: 400,
    discountPrice: 240,
    sale: 40,
    title: "SmartPhone 2",
  },
  {
    id: "3",
    image:
      "https://safetynetwireless.com/wp-content/uploads/2018/04/SafetyNet_Phone.png",
    description: "Phone 3",
    price: 400,
    discountPrice: 240,
    title: "SmartPhone 3",
  },
  {
    id: "4",
    image:
      "https://safetynetwireless.com/wp-content/uploads/2018/04/SafetyNet_Phone.png",
    description: "Phone 4",
    price: 400,
    discountPrice: 240,
    sale: 40,
    title: "SmartPhone 4",
  },
  {
    id: "5",
    image:
      "https://safetynetwireless.com/wp-content/uploads/2018/04/SafetyNet_Phone.png",
    description: "Phone 5",
    price: 400,
    discountPrice: 240,
    sale: 40,
    title: "SmartPhone 5",
  },
];
export default store;
