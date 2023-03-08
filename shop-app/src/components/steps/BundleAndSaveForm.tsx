import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import BundleAndSaveCard from "../layout/BundleAndSaveCard";

interface ChooseProductFormProps {
  onQuantityChange: (quantity: number) => void;
  price: string;
  discountPerPair: number;
  quantity: number;
}

const BundleAndSaveForm: React.FC<ChooseProductFormProps> = ({
  onQuantityChange,
  price,
  discountPerPair,
  quantity,
}) => {
  return (
    <Box sx={{ width: "516px", maxWidth: "100%" }}>
      <Typography
        variant="h1"
        sx={{ color: "text.secondary", margin: "17px 0 7px" }}
      >
        Bundle & Save
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "20px" }}>
        Order more and save with our bundle packs.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "23px",
          margin: "32px 0 45px",
        }}
      >
        <BundleAndSaveCard
          title={quantity > 3 ? `${quantity} Pairs` : "3 or more"}
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"
          price={quantity > 3 ? +price * quantity : +price * 3}
          compareAtPrice={
            quantity > 3
              ? +price * quantity - discountPerPair * quantity
              : +price * 3 - discountPerPair * 3
          }
          isSelected={quantity >= 3}
          quantity={quantity > 3 ? quantity : 3 }
          onQuantityChange={onQuantityChange}

        />
        <BundleAndSaveCard
          title="2 Pairs"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"
          price={+price * 2}
          compareAtPrice={+price * 2 - discountPerPair * 2}
          quantity={2}
          onQuantityChange={onQuantityChange}
          isSelected={quantity === 2}
        />
        <BundleAndSaveCard
          title="1 Pair"
          description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam"
          price={+price}
          quantity={1}
          onQuantityChange={onQuantityChange}
          isSelected={quantity === 1}
        />
      </Box>
    </Box>
  );
};

export default BundleAndSaveForm;
