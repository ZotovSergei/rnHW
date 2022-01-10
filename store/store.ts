export type Store = {
  id: string;
  image: string;
  description: string;
  price: string;
  discountPrice: string;
  sale: string;
  title: string;
  colors: string[];
};

const store: Store[] = [
  {
    id: "1",
    image:
      "https://safetynetwireless.com/wp-content/uploads/2018/04/SafetyNet_Phone.png",
    description:
      "The phone features a 6.088 inch HD+ (1560 x 720 pixel) resolution, 283ppi Super AMOLED display, a glass and plastic body, with Corning Gorilla Glass 5 protection on its front as well as its back. It is powered by a Qualcomm Snapdragon 665 SoC. It also has a 2.0, Type-C 1.0 reversible connector.",
    price: "400",
    discountPrice: "240",
    sale: "40",
    title: "SmartPhone 1",
    colors: ["Black", "Cosmos", "Pink", "Blue"],
  },
];
export default store;
