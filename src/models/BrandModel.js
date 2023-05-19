import { Box, Modal, Paper } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "30%",
  left: "70%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};
function BrandModel(props) {
  return (
    <div>
      <Modal
        open={props.openModal}
        onClose={() => props.closeModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 128,
                height: 128,
              },
            }}
          >
            <Link>
              <Paper elevation={3}>
                <img src="../../images/2.jpg" alt="" />
              </Paper>
            </Link>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default BrandModel;
