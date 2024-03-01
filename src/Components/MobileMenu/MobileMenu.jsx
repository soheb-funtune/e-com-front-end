import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";

export default function MobileMenu({ setMobileMenu, handleLogout }) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem className="link-item" onClick={() => setMobileMenu(false)}>
          <Link to={"/"}>Shop</Link>
        </ListItem>
        <ListItem className="link-item" onClick={() => setMobileMenu(false)}>
          <Link to={"/mens"}>Mens</Link>
        </ListItem>
        <ListItem className="link-item" onClick={() => setMobileMenu(false)}>
          <Link to={"/womens"}>Womens</Link>
        </ListItem>
        <ListItem className="link-item" onClick={() => setMobileMenu(false)}>
          <Link to={"/kids"}>Kids</Link>
        </ListItem>
        <ListItem>
          <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      <StyledButton>
        <AiOutlineMenu onClick={toggleDrawer(true)} />
      </StyledButton>

      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <GlobalStyle />
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
 .link-item > a{
    color:  #ff7235;
 }
 .link-item:hover{
    background:  lightgray;
    cursor:pointer;
 }
`;

const LogoutButton = styled.button`
  padding: 10px;
  width: 100%;
  background: #ff7235;
  cursor: pointer;
  outline: none;
  border: none;
  font-size: 14px;
  border-radius: 20px;
  color: white;
`;
const StyledButton = styled.button`
  display: flex;
  color: #33333;
  font-size: 30px;
  margin-left: 5px;
  border: none;
  background: transparent;
  @media (min-width: 767px) {
    display: none;
  }
`;
