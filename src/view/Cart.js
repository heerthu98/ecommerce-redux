import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../components/store/cartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

function Cart() {
  const productSlectedCart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  function removeFromCart(id) {
    //dispatch the remove action
    dispatch(remove(id));
  }

  function increaseProductCount(product) {
    dispatch(add(product));
  }
  // function decreaseProductCount(product) {
  //   dispatch(removeParticularProduct(product.id));
  // }
  return (
    <div>
      <Grid container spacing={2} mt={2} mb={2}>
        {productSlectedCart?.map((product) => {
          const particularProduct = productSlectedCart.filter(
            (item) => item.id === product.id
          );

          return (
            <Grid item xs={12} md={12} key={product.id}>
              <Card
                sx={{
                  maxWidth: 300,
                  height: "400px",
                  margin: "auto",
                }}
              >
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
                      alt={product.title}
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
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <CardActions
                    style={{
                      width: "80px",
                      padding: "5px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <IconButton
                      style={{ borderRadius: "5px" }}
                      onClick={() => increaseProductCount(product)}
                    >
                      <AddIcon fontSize="small" />
                    </IconButton>
                    <p>{particularProduct.length}</p>
                    <IconButton
                      style={{ borderRadius: "5px" }}
                      // onClick={() => decreaseProductCount(product)}
                    >
                      <RemoveIcon fontSize="small" />
                    </IconButton>
                  </CardActions>
                </div>

                <CardActions style={{ display: "flex", justifyContent: "end" }}>
                  <Button
                    onClick={() => removeFromCart(product.id)}
                    variant="contained"
                    size="small"
                    color="error"
                  >
                    Remove Item
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Cart;
