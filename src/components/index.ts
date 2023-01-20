import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductCardHOCProps } from '../interfaces/interfaces';

import { ProductButtons } from './ProductButons';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';

export { ProductButtons } from "./ProductButons";
export { ProductImage } from "./ProductImage";
export { ProductTitle } from './ProductTitle';

export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Buttons: ProductButtons,
    Image: ProductImage,
    Title: ProductTitle,
});

export default ProductCard;