import React from "react";
import { Card } from "./ProductCard.styles";
import ProductCardImage from "./Leaf/ProductCardImage";
import ProductCardContent from "./Leaf/ProductCardContent";
import ProductCardName from "./Leaf/ProductCardName";
import ProductCardPrice from "./Leaf/ProductCardPrice";
import ProductCardColourComponent from "./Leaf/ProductCardColour/ProductCardColourComponent";

const ProductCard = ({ children }) => {
  return <Card>{children}</Card>;
};

ProductCard.Image = ProductCardImage;
ProductCard.Colour = ProductCardColourComponent;
ProductCard.Content = ProductCardContent;
ProductCard.Name = ProductCardName;
ProductCard.Price = ProductCardPrice;

export default ProductCard;
