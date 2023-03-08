import { Cart } from "../../types/index";

export const getCompteAtPrice = (
  quantity: number,
  price: string,
  discountPerPair: number
) => {
  if (quantity === 1) {
    return price;
  } else if (quantity >= 2) {
    return +price * quantity - discountPerPair * quantity;
  }
};

export const getQueryString = (query: string) => {
  const params = new URLSearchParams(window.location.search);
  // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
  let value = params.get(query); // "some_value"

  return value;
};

export const handleCartSubmit = ({ cart }: { cart: Cart[] }) => {
  fetch("/cart/add.js", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ items: cart }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data?.items.length > 0) {
        window.location.href = "/cart";
      }
      throw Error;
    })
    .catch((err) => {
      console.log(err);
    });
};
