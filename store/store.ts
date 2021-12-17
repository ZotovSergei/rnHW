export type Store = {
    id: string,
    image?: string,
    description?: string,
    price?: number,
    discountPrice?: number,
    sale?: number,
    title?: string
}

const store: Store[] = [
    {
        id: "1",
        image: 'https://safetynetwireless.com/wp-content/uploads/2018/04/SafetyNet_Phone.png',
        description: 'Phone 1',
        price: 400,
        discountPrice: 240,
        sale: 40,
        title: "SmartPhone 1"
    },
    {
        id: "2",
        image: 'https://safetynetwireless.com/wp-content/uploads/2018/04/SafetyNet_Phone.png',
        description: 'Phone 2',
        price: 400,
        discountPrice: 240,
        sale: 40,
        title: "SmartPhone 2"
    },
    {
        id: "3",
        image: 'https://safetynetwireless.com/wp-content/uploads/2018/04/SafetyNet_Phone.png',
        description: 'Phone 3',
        price: 400,
        discountPrice: 240,
        title: "SmartPhone 3"
    },
    {
        id: "4",
        image: 'https://safetynetwireless.com/wp-content/uploads/2018/04/SafetyNet_Phone.png',
        description: 'Phone 4',
        price: 400,
        discountPrice: 240,
        sale: 40,
        title: "SmartPhone 4"
    },
    {
        id: "5",
        image: 'https://safetynetwireless.com/wp-content/uploads/2018/04/SafetyNet_Phone.png',
        description: 'Phone 5',
        price: 400,
        discountPrice: 240,
        sale: 40,
        title: "SmartPhone 5"
    },
]
export default store;