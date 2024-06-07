import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
  Flex,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <Flex
        className="containerNavbar"
        height={"40px"}
        width={"100%"}
        justify={"space-between"}
      >
        <h3 className="logo">ClothingStore</h3>
        <div className="menuContainer">
          <Menu>
            <MenuButton
              bg='none'
              color='white'
              _hover={{
                bg: 'none'
              }}
              _focus={{
                bg: 'none'
              }}
              as={Button}
              rightIcon={<FaAngleDown />}
            >
              Articulos
            </MenuButton>
            <MenuList bg='rgb(49, 42, 42)'>
              <MenuItem _hover={{bg:'red'}} bg='rgb(49, 42, 42)' color='white'>Remeras</MenuItem>
              <MenuItem _hover={{bg:'red'}} bg='rgb(49, 42, 42)' color='white'>Pantalones</MenuItem>
              <MenuItem _hover={{bg:'red'}} bg='rgb(49, 42, 42)' color='white'>Vestidos</MenuItem>
              <MenuItem _hover={{bg:'red'}} bg='rgb(49, 42, 42)' color='white'>Zapatillas</MenuItem>
              <MenuItem _hover={{bg:'red'}} bg='rgb(49, 42, 42)' color='white'>Camisas</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <CartWidget />
      </Flex>
    </>
  );
};

export default NavBar;
