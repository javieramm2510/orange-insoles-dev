import React from "react";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import Tooltip from "@mui/material/Tooltip";

interface ChooseProductFormProps {
  onCartUpdate: (variant: string) => void;
  onQuantityChange: (quantity: number) => void;
  quantity: number;
  cart: any;
  variants: { price: string; id: number; title: string }[] | undefined;
  price: string;
  discountPerPair: number;
}

const ChooseSizeForm: React.FC<ChooseProductFormProps> = ({
  onQuantityChange,
  onCartUpdate,
  cart,
  quantity,
  variants,

}) => {
  return (
    <Box sx={{ width: "516px", maxWidth: "100%" }}>
      <Typography
        variant="h1"
        sx={{ color: "text.secondary", margin: "17px 0 7px" }}
      >
        Choose your sizes
      </Typography>
      <Typography variant="body1" sx={{ fontSize: "20px" }}>
        Stock up on one size or share with friends & family!
      </Typography>

      <Box
        sx={{
          boxShadow: "0px 4px 41px rgba(0, 0, 0, 0.07)",
          borderRadius: "15px",
          padding: "22px 27px 0",
          margin: "34px 0 20px",
        }}
      >
        {Array.apply(null, Array(quantity)).map((item, index) => {
          return (
            <Box key={index}>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "28px",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                Pair {index + 1}
              </Typography>
              <Box
                sx={{
                  paddingBottom: "22px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FormControl fullWidth>
                  <InputLabel id={`pair-${index + 1}-size`}>Size</InputLabel>
                  <Select
                    labelId={`$pair-${index + 1}-size`}
                    id={`pair-${index + 1}`}
                    label={`$Pair ${index + 1}`}
                    value={
                      cart?.[index] && cart[index].id !== ""
                        ? `${cart[index].id}&+|${index}`
                        : ""
                    }
                    inputProps={{
                      MenuProps: {
                        MenuListProps: {
                          sx: {
                            backgroundColor: "#fff",
                          },
                        },
                      },
                    }}
                    onChange={(event: SelectChangeEvent) =>
                      onCartUpdate(event.target.value)
                    }
                  >
                    {variants &&
                      variants.map((variant) => {
                        const customVariantValue = `${variant.id}&+|${index}`;
                        return (
                          <MenuItem value={customVariantValue} key={variant.id}>
                            {variant.title}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
                {quantity - 1 === index && (
                  <>
                    <Tooltip title="Add another pair" arrow>
                      <IconButton onClick={() => onQuantityChange(++quantity)}>
                        <AddCircleOutlineIcon />
                      </IconButton>
                    </Tooltip>
                    {quantity > 1 && (
                      <Tooltip title="Remove pair" arrow>
                        <IconButton
                          onClick={() => onQuantityChange(--quantity)}
                        >
                          <RemoveCircleOutlineIcon />
                        </IconButton>
                      </Tooltip>
                    )}
                  </>
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ChooseSizeForm;
