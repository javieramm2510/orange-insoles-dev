import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import CircularProgress from "@mui/material/CircularProgress";

import { Products } from "../types";
import ChooseProductForm from "../components/steps/ChooseProductForm";
import ChooseSizeForm from "../components/steps/ChooseSizeForm";
import BundleAndSaveForm from "../components/steps/BundleAndSaveForm";
import ProgressButtons from "../components/progress/ProgressButtons";
import ProgressSteps from "../components/progress/ProgressSteps";
import SubTotal from "../components/layout/SubTotal";
import DisplayErrors from "../components/layout/DisplayErrors";

import useData from "../components/hooks/useData";
import useNavigate from "../components/hooks/useNavigate";
import useErrors from "../components/hooks/useErrors";
import useSubmit from "../components/hooks/useSubmit";

const resetCart = (quantity: number) => {
  return Array.apply(null, Array(quantity)).map(() => {
    return { id: "", quantity: 1 };
  });
};

const MultiStepForm: React.FC = () => {
  const { defaultProduct } = useNavigate();
  const [step, setStep] = useState(1);
  const [quantity, setQuantity] = useState(3);
  const [cart, setCart] = useState(resetCart(quantity));
  const { isSubmtting, isSumitError, handleCartSubmit } = useSubmit();
  const [selectedProduct, setSelectedProduct] =
    useState<Partial<Products> | null>(null);
  const { data: products } = useData(
    "https://www.orangeinsoles.com/collections/insoles/products.json"
  );
  const [discountPerPair, setDiscountPerPair] = useState(0);
  const { sizesErrors } = useErrors({ cart });

  useEffect(() => {
    setCart(resetCart(quantity));

    switch (selectedProduct?.handle) {
      case "orange-full":
        setDiscountPerPair(5);
        break;
      case "orange-3-4":
        setDiscountPerPair(3);
        break;
      case "orange-light":
        setDiscountPerPair(2);
        break;
    }
  }, [selectedProduct?.handle]);


  useEffect(() => {
    if (products) {
      if (defaultProduct) {
        for (let product of products) {
          if (product.handle === defaultProduct) {
            setSelectedProduct(product);
            break;
          }
        }
      } else {
        setSelectedProduct(products[0]);
      }
    }
  }, [products, defaultProduct]);

  useEffect(() => {
    if (quantity > cart.length) {
      setCart((prevCart) => {
        return [...prevCart, { id: "", quantity: 1 }];
      });
    } else {
      setCart((prevCart) => prevCart.slice(0, quantity));
    }
  }, [quantity, cart.length]);

  const onNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
    if (step === 3 && !sizesErrors) {
      handleCartSubmit(cart);
    }
  };

  const onPrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleCartUpdate = (variant: string) => {
    const [id, index] = variant.split("&+|");

    setCart((prevCart) => {
      for (let i = 0; i < prevCart.length; i++) {
        if (+index === i) {
          prevCart[i] = { id, quantity: 1 };
        }
      }
      return [...prevCart];
    });
  };

  const handleSelecteProductChange = (id: number) => {
    if (products) {
      for (let product of products) {
        if (product.id === id) {
          setSelectedProduct(product);
          break;
        }
      }
    }
  };

  const handleQuantityChange = (qty: number) => {
    setQuantity(qty);
  };

  if (!products) {
    return (
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1256px",
          marginTop: "55px",
          marginBottom: "55px",
          textAlign: "center",
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container
      maxWidth={false}
      sx={{ maxWidth: "1256px", marginTop: "55px", marginBottom: "55px" }}
    >
      <Grid container columnSpacing={4}>
        <Grid
          md={8}
          xs={12}
          sx={{
            order: {
              xs: "1",
              md: "0",
            },
          }}
        >
          <ProgressSteps currentStep={step} />
          <div>
            {step === 1 && (
              <ChooseProductForm
                products={products}
                currentSelectedId={selectedProduct?.id ?? 0}
                onSelecteProductChange={handleSelecteProductChange}
              />
            )}
            {step === 2 && (
              <BundleAndSaveForm
                price={selectedProduct?.variants?.[0]?.price ?? ""}
                discountPerPair={discountPerPair}
                quantity={quantity}
                onQuantityChange={handleQuantityChange}
              />
            )}
            {step === 3 && (
              <>
                <ChooseSizeForm
                  onCartUpdate={handleCartUpdate}
                  cart={cart}
                  quantity={quantity}
                  variants={selectedProduct?.variants}
                  onQuantityChange={handleQuantityChange}
                  price={selectedProduct?.variants?.[0]?.price ?? ""}
                  discountPerPair={discountPerPair}
                />
                <SubTotal
                  quantity={quantity}
                  price={selectedProduct?.variants?.[0]?.price ?? ""}
                  discountPerPair={discountPerPair}
                />
                {sizesErrors && (
                  <DisplayErrors message="Choose the size of all pairs." />
                )}
                {isSumitError && (
                  <DisplayErrors message="Something went wrong, please try again." />
                )}
                {isSubmtting && <CircularProgress />}
              </>
            )}
          </div>
          <ProgressButtons
            currentStep={step}
            onNext={onNext}
            onPrevious={onPrevious}
            isSubmtting={isSubmtting}
          />
        </Grid>
        <Grid
          md={4}
          xs={12}
          sx={{
            textAlign: "center",
            order: {
              xs: "0",
              md: "1",
            },
          }}
        >
          <img
            src={selectedProduct?.images?.[0].src ?? ""}
            alt={selectedProduct?.title ?? ""}
            style={{
              maxWidth: "100%",
              width: "300px",
              display: "inline-block",
              paddingBottom: "20px",
              position: "sticky",
              top: "150px",
              border: 0,
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default MultiStepForm;
