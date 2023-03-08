import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import CheckCustomIcon from "../icons/CheckCustomIcon";

interface BundleAndSaveCardProps {
  onQuantityChange: (quantity: number) => void;
  title: string;
  price: number;
  compareAtPrice?: number;
  description: string;
  isSelected?: boolean;
  quantity: number;
}

const BundleAndSaveCard: React.FC<BundleAndSaveCardProps> = ({
  onQuantityChange,
  title,
  price,
  compareAtPrice,
  description,
  isSelected = false,
  quantity,
}) => {
  return (
    <Grid
      onClick={() => onQuantityChange(quantity)}
      sx={[
        {
          boxShadow: "0px 4px 41px rgba(0, 0, 0, 0.07)",
          border: "2px dashed rgba(230, 138, 63, 0.38)",
          borderRadius: "15px",
          minHeight: "136px",
          cursor: "pointer",
          padding: "24px",
          display: "flex",
          flexWrap: {
            xs: "wrap",
            md: "nowrap",
          },
          gap: "24px",
          position: "relative",
          "&:hover": {
            bgcolor: "background.paper",
            "h3, p, span": {
              color: "primary.contrastText",
            },
          },
        },
        isSelected && {
          bgcolor: "background.paper",
        },
      ]}
    >
      {isSelected && (
        <Box
          sx={{
            background: "#fff",
            borderRadius: "100%",
            paddin: "10px 7px",
            width: "40px",
            height: "40px",
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            top: "-20px",
            left: "-20px",
            boxShadow: "0px 0px 6px 2px rgba(0, 0, 0, 0.05)",
          }}
        >
          <CheckCustomIcon
            sx={{
              color: "background.paper",
            }}
          />
        </Box>
      )}
      <Box>
        <Typography
          sx={[
            {
              fontWeight: "700",
              fontSize: "35px",
              width: "155px",
              flexShrink: "0",
              marginBottom: "10px",
            },

            isSelected && {
              color: "primary.contrastText",
            },
          ]}
          variant="h3"
        >
          {title}
        </Typography>
        <Typography color={isSelected ? "primary.contrastText" : ""}>
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          width: {
            xs: "100%",
            md: "155px",
          },
          flexShrink: "0",
          textAlign: "right",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Typography
            color={isSelected ? "primary.contrastText" : ""}
            sx={[
              {
                fontSize: "29px",
                fontWeight: "700",
              },
              compareAtPrice
                ? {
                    fontSize: "22px",
                    fontWeight: "700",
                    textDecoration: "line-through",
                    marginLeft: "10px",
                  }
                : null,
            ]}
          >
            ${price}
          </Typography>
          {compareAtPrice && (
            <Typography
              color={isSelected ? "primary.contrastText" : ""}
              sx={[
                {
                  fontSize: "22px",
                  fontWeight: "700",
                  textDecoration: "line-through",
                  marginLeft: "10px",
                },
                compareAtPrice
                  ? {
                      fontSize: "29px",
                      fontWeight: "700",
                      textDecoration: "none",
                    }
                  : null,
              ]}
            >
              ${compareAtPrice}
            </Typography>
          )}
        </Box>
        <Typography
          color={isSelected ? "primary.contrastText" : ""}
          sx={{ fontSize: "14px" }}
        >
          Total
        </Typography>
      </Box>
    </Grid>
  );
};

export default BundleAndSaveCard;
