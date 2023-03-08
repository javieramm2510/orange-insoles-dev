import React from "react";
import { Products } from "../../types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ChooseProductCard from "../layout/ChooseProductCard";

interface ChooseProductFormProps {
  onSelecteProductChange: (id: number) => void;
  products: Products[];
  currentSelectedId: number;
}

const ChooseProductForm: React.FC<ChooseProductFormProps> = ({
  onSelecteProductChange,
  products,
  currentSelectedId,
}) => {
  return (
    <Box>
      <Typography
        variant="h1"
        sx={{ color: "text.secondary", margin: "17px 0" }}
      >
        Shop The Orange Lineup
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "20px" }}>
        Picking the right insole can make a huge difference in your comfort
        levels. <br />
        Choose an insole based on your daily activity levels and type of work.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          margin: "32px 0 45px",
        }}
      >
        {products.map((product) => {
          // All variant has the same price
          const price = product?.variants[0]?.price ?? "0";

          return (
            <ChooseProductCard
              key={product.id}
              id={product.id}
              name={product.title}
              description={product.body_html}
              price={price}
              isSelected={currentSelectedId === product.id ? true : false}
              onSelecteProductChange={onSelecteProductChange}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default ChooseProductForm;
