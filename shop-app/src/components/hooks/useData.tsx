import { useState, useEffect } from "react";
import {  Products } from "../../types";

const useData = (url: string) => {
  const [data, setData] = useState<Products[] | null>(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setData(data.products);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [url]);

  return { data: data };
};

export default useData;
