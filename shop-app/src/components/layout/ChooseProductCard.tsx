import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import CheckCustomIcon from "../icons/CheckCustomIcon";

interface ChooseProductCardProps {
  name: string;
  description: string;
  price: string;
  compareAtPrice?: string;
  isSelected?: boolean;
  id: number;
  onSelecteProductChange: (id: number) => void;
}

const ChooseProductCard: React.FC<ChooseProductCardProps> = ({
  name,
  id,
  description,
  compareAtPrice,
  price,
  isSelected = false,
  onSelecteProductChange,
}) => {
  return (
    <Grid
      onClick={() => onSelecteProductChange(id)}
      className="card-individual"
      sx={[
        {
          boxShadow: "0px 4px 41px rgba(0, 0, 0, 0.07)",
          borderRadius: "15px",
          minHeight: "136px",
          cursor: "pointer",
          padding: "24px",
          display: "flex",
          gap: "24px",
          position: "relative",
          "&:hover": {
            bgcolor: "background.paper",
            "h3, p, span": {
              color: "primary.contrastText",
            },
          },
          flexWrap: {
            xs: "wrap",
            md: "nowrap",
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
      <Typography
        sx={[
          {
            fontWeight: "700",
            fontSize: "35px",
            width: {
              md: "155px",
            },
            flexShrink: {
              xs: "auto",
              md: "0",
            },
          },

          isSelected && {
            color: "primary.contrastText",
          },
        ]}
        variant="h3"
      >
        {name}
      </Typography>
      <Typography
        color={isSelected ? "primary.contrastText" : ""}
        dangerouslySetInnerHTML={{ __html: description }}
        sx={{ "*": { marginTop: "0" } }}
      ></Typography>
      <Box
        sx={{
          width: { md: "155px" },
          flexShrink: { xs: "auto", md: "0" },
          textAlign: "right",
        }}
      >
        <Typography
          color={isSelected ? "primary.contrastText" : ""}
          sx={{ fontSize: "29px", fontWeight: "700" }}
        >
          ${price}
        </Typography>
        <Typography
          color={isSelected ? "primary.contrastText" : ""}
          sx={{ fontSize: "14px" }}
        >
          Per Pair
        </Typography>
      </Box>
    </Grid>
  );
};

export default ChooseProductCard;
