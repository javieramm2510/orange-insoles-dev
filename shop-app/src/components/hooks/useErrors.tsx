import { useEffect, useState } from "react";
import { Cart } from "../../types/index";

interface useErrorsProps {
  cart: Cart[];
}

const validateCart = (cart: useErrorsProps["cart"]) => {
  for (let item of cart) {
    if (item.id === "") {
      return true;
    }
  }
  return false;
};

const useErrors = ({ cart }: useErrorsProps) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (validateCart(cart)) {
      setError(true);
    } else {
      setError(false);
    }
  }, [cart]);

  return {
    sizesErrors: error,
  };
};

export default useErrors;
