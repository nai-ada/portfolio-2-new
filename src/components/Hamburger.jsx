import React from "react";
import styled from "styled-components";
import MenuToggle from "./MenuToggle";
import { motion } from "framer-motion";
import MenuNavigation from "./MenuNavigation";

const HamburgerMenuContainer = styled.div`
 display: flex;
`;

const MenuContainer = styled(motion.div)`
 width: 100%;
 max-width: 25%;
 min-width: 300px;
 height: 100%;
 background: rgba(255, 255, 255, 0.08);
 box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
 backdrop-filter: blur(8.5px);
 -webkit-backdrop-filter: blur(4.5px);
 z-index: 1800;
 position: fixed;
 top: 0;
 right: 0;
 transform: translatex(4em);
 user-select: none;
 padding: 1em 2.5em;
`;

const menuVariants = {
  open: {
   transform: "translateX(3%)", 
  },
  closed: {
    transform: "translateX(103%)",
  },
}

const menuTransition = { type: "spring", duration: 0.5, stiffness: 33, delay: 0.07 };

function Hamburger() {
 const [isOpen, setIsOpen] = React.useState(false);

 const toggle = () => {
    setIsOpen(!isOpen);
 };

 const handleLinkClick = () => {
    setIsOpen(false);
 };

 return (
    <HamburgerMenuContainer>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
        <MenuContainer initial={false} animate={isOpen ? "open" : "closed"} variants={menuVariants} transition={menuTransition}>
          <MenuNavigation isOpen={isOpen} onLinkClick={handleLinkClick}/>
        </MenuContainer>
    </HamburgerMenuContainer>
 );
}

export default Hamburger;
