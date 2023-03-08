import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { getCompteAtPrice } from "../helper/index";

interface SubTotalProps {
  price: string;
  discountPerPair: number;
  quantity: number;
}

const SubTotal: React.FC<SubTotalProps> = ({
  price,
  discountPerPair,
  quantity,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "516px",
        maxWidth: "100%",
        marginBottom: "20px"
      }}
    >
      <Typography
        sx={[
          {
            fontSize: "29px",
            fontWeight: "700",
            marginRight: "10px",
          },
        ]}
      >
        Sub Total:
      </Typography>
      <Typography
        sx={[
          {
            fontSize: "29px",
            fontWeight: "700",
          },
          quantity > 1
            ? {
                fontSize: "22px",
                fontWeight: "700",
                textDecoration: "line-through",
                marginLeft: "10px",
              }
            : null,
        ]}
      >
        ${+price * quantity}
      </Typography>
      {quantity > 1 && (
        <Typography
          sx={[
            {
              fontSize: "22px",
              fontWeight: "700",
              textDecoration: "line-through",
              marginLeft: "10px",
            },
            quantity > 1
              ? {
                  fontSize: "29px",
                  fontWeight: "700",
                  textDecoration: "none",
                }
              : null,
          ]}
        >
          ${getCompteAtPrice(quantity, price, discountPerPair)}
        </Typography>
      )}
    </Box>
  );
};

export default SubTotal;
