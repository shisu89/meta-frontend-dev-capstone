import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { Box, Image, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { useMediaQuery } from '@chakra-ui/react';
// import '../css/styles.css';

const pages = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef()

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    return (
        <>
            <Box position="relative" zIndex={1000} ref={menuRef}>
                <button onClick={handleToggle} aria-label='Open Menu'>
                    <Image src="./assets/images/icons/icon_hamburger_menu.svg"></Image>
                </button>
                {isOpen && (
                    <Flex
                        direction="column"
                        position="absolute"
                        top="100%" // This positions the menu right below the button
                        right={0}
                        bg="white"
                        p={4}
                    >
                        {pages.map((page) => (
                            <Link
                                as={RouterLink}
                                to={page === 'Home' ? '/' : `/${page.replace(' ', '').toLowerCase()}`}
                                key={page}
                                py={2}
                                onClick={closeMenu}
                            >
                                {page}
                            </Link>
                        ))}
                    </Flex>
                )}
            </Box>
        </>
    );
};


const NavigationItems = () => {
    return (
        <>
            {pages.map((page) => (
                <Link fontWeight={"medium"}  as={RouterLink} to={page === 'Home' ? '/' : `/${page.replace(' ', '').toLowerCase()}`} key={page} px={2}>
                    {page}
                </Link>
            ))}
        </>
    );
}

const Nav = () => {
    const [isLargerThanMd] = useMediaQuery("(min-width: 48em)");
    return (
        <nav>
            <Flex as="nav" justifyContent={{ base: "space-between", md: "center" }} p="4" flexDir={{ base: "row", md: "row" }} alignItems={"center"}>
                <Image src="./assets/images/Logo.svg" alt='logo' mr={8}/>
                {isLargerThanMd ? (
                    <NavigationItems></NavigationItems>) :
                    <BurgerMenu></BurgerMenu>}
            </Flex>
        </nav>
    );
}

export { Nav, NavigationItems };