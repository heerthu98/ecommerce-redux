import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Avatar, Button, Menu, MenuItem } from "@mui/material";

function Header() {
  // const [addModal, setAddModal] = useState(false);
  const cartProducts = useSelector((state) => state.cart);

  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (index) => {
    setSelectedLink(index);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  return (
    <>
      <div
        style={{
          backgroundColor: "#1976d2",
          color: "#fff",
          position: "sticky",
          top: "0",
          zIndex: "1",
        }}
      >
        <div className="container">
          <div className="header">
            <div className="logo">
              <Link style={{ textDecoration: "none", color: "#fff" }} to="/">
                LOGO
              </Link>
            </div>
            <div style={{ display: "flex" }}>
              <Button
                style={{ marginRight: "10px", color: "#fff" }}
                id="demo-positioned-button"
                aria-controls={open2 ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open2 ? "true" : undefined}
                onClick={handleClick2}
              >
                Brand
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open2}
                onClose={handleClose2}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem onClick={handleClose2}>
                  <Link
                    className={`brandItem ${
                      selectedLink === 0 ? "selected" : ""
                    }`}
                    onClick={() => handleLinkClick(0)}
                    to="/boss"
                  >
                    Boss
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose2}>
                  <Link
                    className={`brandItem ${
                      selectedLink === 1 ? "selected" : ""
                    }`}
                    onClick={() => handleLinkClick(1)}
                    to="/columbia"
                  >
                    Columbia
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose2}>
                  <Link
                    className={`brandItem ${
                      selectedLink === 2 ? "selected" : ""
                    }`}
                    onClick={() => handleLinkClick(2)}
                    to="/tommyHilifiger"
                  >
                    Tommy Hilifiger
                  </Link>
                </MenuItem>
              </Menu>
              <Button
                style={{ marginRight: "10px", color: "#fff" }}
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Category
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link
                    className={`categoryItem ${
                      selectedLink === 0 ? "selected" : ""
                    }`}
                    onClick={() => handleLinkClick(0)}
                    to="/menWear"
                  >
                    Mens Wear
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    className={`categoryItem ${
                      selectedLink === 1 ? "selected" : ""
                    }`}
                    onClick={() => handleLinkClick(1)}
                    to="/womenWear"
                  >
                    Womens Wear
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    className={`categoryItem ${
                      selectedLink === 2 ? "selected" : ""
                    }`}
                    onClick={() => handleLinkClick(2)}
                    to="/kidsWear"
                  >
                    Kids Wear
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    className={`categoryItem ${
                      selectedLink === 3 ? "selected" : ""
                    }`}
                    onClick={() => handleLinkClick(2)}
                    to="/jewellery"
                  >
                    Jewellery
                  </Link>
                </MenuItem>
              </Menu>
              <Button style={{ padding: "5px 25px", borderRadius: "30px" }}>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                  }}
                  to="/cart"
                >
                  <ShoppingCartIcon color="#fff" /> {cartProducts.length}
                </Link>
              </Button>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="heroContainer">
          <Carousel>
            <div>
              <img src="/images/1.jpg" alt="hero 1" />
              <Button className="legend">Shop Now</Button>
            </div>
            <div>
              <img src="/images/2.jpg" alt="hero 2" />
              <Button className="legend">Shop Now</Button>
            </div>
            <div>
              <img src="/images/3.jpg" alt="hero 3" />
              <Button className="legend">Shop Now</Button>
            </div>
          </Carousel>
        </div>
      </div>
      {/* <BrandModel openModal={addModal} closeModal={() => setAddModal(false)} /> */}
    </>
  );
}

export default Header;
