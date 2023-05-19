import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";

function ProductCard(props) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.cart);
  function addToCart(product) {
    const isProductAlreadyInCart = cartItem.some(
      (item) => item.id === product.id
    );
    if (isProductAlreadyInCart) {
      alert("The product is already added to the cart.");
    } else {
      //dispatch an add action
      dispatch(add(product));
    }
  }
  return (
    <div>
      <Grid container spacing={2} mb={2}>
        {props.products?.map((product) => (
          <Grid item xs={12} md={3} key={product.id}>
            <Card sx={{ maxWidth: 300, height: "350px", margin: "auto" }}>
              <CardActionArea
                style={{
                  height: "300px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                }}
              >
                <div
                  style={{
                    height: "130px",
                    overflow: "hidden",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt="green iguana"
                    sx={{
                      height: "100%",
                    }}
                  />
                </div>

                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    style={{ height: "100px", overflow: "hidden" }}
                  >
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    LKR {product.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  onClick={() => addToCart(product)}
                  variant="contained"
                  size="small"
                  color="primary"
                >
                  Add to Card
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProductCard;
