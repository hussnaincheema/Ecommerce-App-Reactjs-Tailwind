import {
  FaHeadset,
  FaLock,
  FaMoneyBillWave,
  FaShippingFast,
  FaTag,
} from "react-icons/fa";
import Men from "../assets/men.png";
import Women from "../assets/women.png";
import Kid from "../assets/kids.png";
import Image1 from "../assets/bag.jpg";
import Image2 from "../assets/cap.jpg";
import Image3 from "../assets/cosmetics.jpg";
import Image4 from "../assets/dove.jpg";
import Image5 from "../assets/robot.jpg";
import Image6 from "../assets/sandle.jpg";
import Image7 from "../assets/shirt.jpg";
import Image8 from "../assets/shoes.jpg";
import Image9 from "../assets/watch.jpg";
import Image10 from "../assets/headphone.jpg";

export const Categories = [
  "Toys & Games",
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty",
  "Sports",
  "Books & Stationery",
  "Automotive",
  "Office Equipment",
  "Garden & Outdoor",
  "Health & Wellness",
  "Pet Supplies",
];

export const Information = [
  {
    icon: FaShippingFast,
    title: "Free Shipping",
    detail: "Get your orders delivered with no extra cost",
  },
  {
    icon: FaHeadset,
    title: "Support 24/7",
    detail: "We are here to Assist you anytime",
  },
  {
    icon: FaMoneyBillWave,
    title: "100% Money Back",
    detail: "Full refund if you are not satisfied",
  },
  {
    icon: FaLock,
    title: "Payment Secure",
    detail: "Your Payment information is safe with us",
  },
  {
    icon: FaTag,
    title: "Discount",
    detail: "Enjoy the best prices on our products",
  },
];

export const Images = [
  {
    imageUrl: Men,
  },
  {
    imageUrl: Women,
  },
  {
    imageUrl: Kid,
  },
];

export const productsData = [
  {
    id: 1,
    image: Image1,
    name: "Bag",
    price: 29.99,
    desc: "This stylish and versatile bag is crafted from high-quality, durable materials, making it perfect for daily use or travel. With multiple compartments and pockets, it offers ample space for organizing essentials like a laptop, books, or personal items. Its sleek design is complemented by comfortable, adjustable straps, ensuring ease of wear. Whether for work, school, or casual outings, this bag combines functionality with modern aesthetics. Ideal for those seeking both practicality and style.",
  },
  {
    id: 2,
    image: Image2,
    name: "Cap",
    price: 39.99,
    desc: "This Cap is a stylish and comfortable headwear option designed for active young boys. Made from breathable, durable fabric, it provides protection from the sun while ensuring a snug fit for all-day wear. With its cool design, this cap is perfect for outdoor play, sports, or casual outings. It's a must-have accessory that combines both function and style, keeping boys looking sharp and feeling comfortable.",
  },
  {
    id: 3,
    image: Image3,
    name: "LipStick",
    price: 30.99,
    desc: "The Lipstick is a luxurious beauty essential designed to provide rich, vibrant color with a smooth, creamy application. Formulated with moisturizing ingredients, it keeps lips soft and hydrated while delivering long-lasting wear. Available in a variety of shades, from bold reds to subtle nudes, this lipstick enhances any look, making it a perfect choice for both everyday wear and special occasions. Its sleek, elegant packaging adds a touch of sophistication to any makeup collection.",
  },
  {
    id: 4,
    image: Image4,
    name: "Shampoo",
    price: 20.99,
    desc: "This nourishing shampoo is designed to cleanse and revitalize all hair types, leaving your locks feeling fresh and manageable. Infused with natural ingredients, it gently removes dirt and buildup while providing essential moisture and nutrients. The sulfate-free formula helps maintain your hair’s natural oils, promoting shine and softness without weighing it down. Suitable for daily use, this shampoo transforms your hair care routine into a spa-like experience, ensuring your hair looks and feels its best with every wash.",
  },
  {
    id: 5,
    image: Image5,
    name: "Robot",
    price: 15.99,
    desc: "This advanced robot combines cutting-edge technology and innovative design, making it a versatile companion for various tasks. With its intelligent sensors and adaptive algorithms, it can navigate complex environments, perform precise actions, and learn from its surroundings. Ideal for both home and professional use, this robot can assist with cleaning, organizing, or even providing entertainment. Its user-friendly interface allows for easy programming and customization, ensuring that it meets the unique needs of each user. Experience the future of automation and convenience with this remarkable robot.",
  },
  {
    id: 6,
    image: Image6,
    name: "Sandle",
    price: 25.79,
    desc: "These stylish sandals are perfect for warm weather, combining comfort and fashion effortlessly. Made from high-quality materials, they feature a soft footbed that provides excellent support for all-day wear. The adjustable straps ensure a secure fit, while the trendy design adds a touch of elegance to any outfit. Whether you're heading to the beach, a casual outing, or a summer party, these sandals are versatile enough to complement any look. Embrace the sunny days with confidence and style in these must-have sandals.",
  },
  {
    id: 7,
    image: Image7,
    name: "Shirt",
    price: 35.99,
    desc: "This stylish shirt combines comfort and versatility for everyday wear. Crafted from soft, breathable fabric, it ensures all-day comfort whether at school, playing outdoors, or attending special events. The shirt features a classic cut, making it easy to dress up or down, and is available in a variety of colors and patterns to suit every personality. With a button-down collar and durable stitching, this shirt is designed to withstand the adventures of active boys while keeping them looking sharp. Perfect for layering or wearing on its own, it's a wardrobe essential for any young fashionista.",
  },
  {
    id: 8,
    image: Image8,
    name: "Shoe",
    price: 23.99,
    desc: "These trendy shoes are the perfect blend of style and comfort, designed for all-day wear. Crafted from high-quality materials, they provide durability and support for various activities, whether running errands, hitting the gym, or enjoying a casual outing. The shoes feature a sleek design with a cushioned insole for added comfort and a lightweight, breathable upper that keeps feet cool. Available in a range of colors and styles, these shoes are versatile enough to pair with any outfit, making them a must-have addition to your footwear collection. Step out in confidence with these stylish shoes!",
  },
  {
    id: 9,
    image: Image9,
    name: "Watch",
    price: 33.99,
    desc: "This elegant watch combines timeless design with modern functionality, making it the perfect accessory for any occasion. Crafted with precision, it features a durable stainless steel case and a stylish leather or metal strap for added comfort. The watch boasts a clear, easy-to-read dial with luminous hands, ensuring you can keep track of time day or night. With water resistance and reliable quartz movement, it offers both practicality and style. Whether you’re dressing up for a formal event or keeping it casual, this watch will enhance your look and elevate your confidence.",
  },
  {
    id: 10,
    image: Image10,
    name: "Headphone",
    price: 13.99,
    desc: "These premium headphones deliver an exceptional audio experience with rich, immersive sound quality. Designed for both comfort and style, they feature plush ear cushions and an adjustable headband, making them perfect for long listening sessions. With advanced noise-canceling technology, you can enjoy your favorite music without distractions from the outside world. They come equipped with a built-in microphone for hands-free calls and seamless Bluetooth connectivity, ensuring you stay connected on the go. Whether you’re at home, commuting, or working out, these headphones are your ideal companion for an unparalleled listening experience.",
  },
];

export const footerLinks = [
  {
    id: 1,
    name: "Home",
    navigate: "/",
  },
  {
    id: 2,
    name: "Shop",
    navigate: "/shop",
  },
  {
    id: 3,
    name: "About Us",
    navigate: "/about",
  },
  {
    id: 4,
    name: "Contact Us",
    navigate: "/contact",
  },
];
