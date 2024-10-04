export type Product = {
  _id: string,
  name: string,
  description?: string,
  price: number,
  size?: string,
  images: [string],
  isNew?: boolean,
  quantity?: number,
  discount: number,
  category?: Category,
  createdAt?: Date,
  updatedAt?: Date,
};

export type Category = {
  _id: string,
  name: string,
  description?: string,
  createdAt?: Date,
  updatedAt?: Date,
};

// export type WishListProduct = {
//   name: string,
//   price: number,
//   image: string,
// };

export const products = [
  {
    name: "The Prompt Magazine",
    price: 35000,
    image: "/products/image1.png",
    discount: 0,
  },
  {
    name: "Chunky Glyph Tee",
    price: 120000,
    image: "/products/image2.png",
    discount: 0,
  },
  {
    name: "All Smiles Nalgene",
    price: 120000,
    image: "/products/image3.png",
    discount: 0,
  },
  {
    name: "Wildflower Hoodie",
    price: 120000,
    image: "/products/image4.png",
    discount: 10,
  },
  {
    name: "Inkblot Tee",
    price: 120000,
    image: "/products/image5.png",
    discount: 0,
  },
  {
    name: "Gestures Longsleeve",
    price: 120000,
    image: "/products/image6.png",
    discount: 0,
  },
  {
    name: "Chunky Glyph Cap",
    price: 120000,
    image: "/products/image7.png",
    discount: 0,
  },
  {
    name: "Local Styles Crewneck",
    price: 120000,
    image: "/products/image8.png",
    discount: 0,
  },
  {
    name: "Inkblot Tee",
    price: 120000,
    image: "/products/image5.png",
    discount: 0,
  },
  {
    name: "Gestures Longsleeve",
    price: 120000,
    image: "/products/image6.png",
    discount: 0,
  },
  {
    name: "Inkblot Tee",
    price: 120000,
    image: "/products/image5.png",
    discount: 0,
  },
  {
    name: "Gestures Longsleeve",
    price: 120000,
    image: "/products/image6.png",
    discount: 0,
  },
  {
    name: "Inkblot Tee",
    price: 120000,
    image: "/products/image5.png",
    discount: 0,
  },
  {
    name: "Gestures Longsleeve",
    price: 120000,
    image: "/products/image6.png",
    discount: 0,
  },
];

// export const wishlistProducts: WishListProduct[] = [
//   {
//     name: "Chunky Glyph Tee",
//     price: 120000,
//     image: "/wishlist/wishlist1.png",
//   },
//   {
//     name: "Doodle Hoodie",
//     price: 120000,
//     image: "/wishlist/wishlist2.png",
//   },
//   {
//     name: "Local Styles Crewneck",
//     price: 120000,
//     image: "/wishlist/wishlist3.png",
//   },
// ];
