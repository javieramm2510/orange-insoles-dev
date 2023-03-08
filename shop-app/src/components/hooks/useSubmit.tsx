import { useState } from "react";
import { Cart } from "../../types";

const useSubmit = () => {
  const [submitng, setSubmitng] = useState(false);
  const [error, serError] = useState(false);

  const handleCartSubmit = (cart: Cart[]) => {
    setSubmitng(true);
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
        } else {
          throw Error;
        }
      })
      .catch((err) => {
        serError(true);
        console.error(err);
      })
      .finally(() => {
        setSubmitng(false);
      });
  };

  return {
    handleCartSubmit,
    isSubmtting: submitng,
    isSumitError: error,
  };
};

export default useSubmit;
