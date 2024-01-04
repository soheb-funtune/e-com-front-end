import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  //   border: "1px solid #000",
  borderRadius: "10px",
  boxShadow: "1px 1px 5px gray",
  p: 2,
  "&: hover": {
    background: "#ffff",
  },
};

const CustomButton = styled(Button)`
  padding: 0px;
  margin: 0px;
  position: absolute;
  top: 10px;
  right: -10px;
  &:hover {
    background-color: transparent; /* Hover background color */
  }

  /* &:active {
    background-color: #0d47a1;
  } */
`;

export default function MuiModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CustomButton
            onClick={handleClose}
            disableElevation
            disableTouchRipple
            disableRipple
          >
            X
          </CustomButton>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            This is a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
          <Typography id="modal-modal-description" sx={{ mb: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
