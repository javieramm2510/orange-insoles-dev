export type FormData = {
  variantID: number | null;
  variantQuantity: number | null;
};

export type Products = {
  id: number;
  title: string;
  handle: string;
  body_html: string;
  images: { src: string }[];
  variants: { price: string; id: number; title: string }[];
};

export type Cart = {
    id: string;
    quantity: number;
}