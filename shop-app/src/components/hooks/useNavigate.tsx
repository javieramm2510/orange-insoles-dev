import { useState } from "react";

import { getQueryString } from "../helper/index";

const useNavigate = () => {
  const [defaultProduct] = useState(getQueryString("product"));
  return {
    defaultProduct,
  };
};

export default useNavigate;
