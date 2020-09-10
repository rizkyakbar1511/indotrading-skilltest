import React from "react";
import {
  RestaurantMenu,
  LocalPizza,
  Fastfood,
  EmojiFoodBeverage,
  FreeBreakfast,
  Cake,
} from "@material-ui/icons";

export const items = [
  {
    icon: <RestaurantMenu className="carousel-icon" />,
    name: "All",
  },
  {
    icon: <LocalPizza className="carousel-icon" />,
    name: "Pizza",
  },
  {
    icon: <Fastfood className="carousel-icon" />,
    name: "Burgers",
  },
  {
    icon: <EmojiFoodBeverage className="carousel-icon" />,
    name: "Coffee",
  },
  {
    icon: <FreeBreakfast className="carousel-icon" />,
    name: "Tea",
  },
  {
    icon: <Cake className="carousel-icon" />,
    name: "Desserts",
  },
];

export const products = [
  {
    title: "Sandwich",
    imageUri:
      "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1556744250%2Fthe-ultimate-veggie-sandwich-1905.jpg%3Fitok%3DrAOvFAhQ",
    rating: "4.2",
    from: "England",
  },
  {
    title: "Crepes",
    imageUri:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-basic-crepes-horizontal-1545245797.jpg?crop=1.00xw:0.752xh;0,0.154xh&resize=1200:*",
    rating: "4.5",
    from: "France",
  },
  {
    title: "Sushi",
    imageUri:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2013/06/Japanese-Sushi-0458.450-450x270.jpg",
    rating: "4.8",
    from: "Japan",
  },
  {
    title: "Burger",
    imageUri:
      "https://i.pinimg.com/originals/eb/a1/cf/eba1cfe494e4c8d5f6c5b8b5f7a2c452.jpg",
    rating: "5.0",
    from: "American",
  },
  {
    title: "Maccaron",
    imageUri: "https://cf.shopee.co.id/file/0095cc97c7881fc274aeab00a2502bf5",
    rating: "4.0",
    from: "Italian",
  },
  {
    title: "Espresso",
    imageUri:
      "https://static.scientificamerican.com/sciam/cache/file/7C0BADB7-D030-4E4E-BE715FB20458C51E_source.jpg?w=590&h=800&533ACFE5-6F68-4434-B0595E60892B668A",
    rating: "4.3",
    from: "Italian",
  },
];
