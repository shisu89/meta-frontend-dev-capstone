import React from 'react';
import { Flex, HStack, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
// import '../css/styles.css';

const pages = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];

const NavigationItems = () => {
    return (
        <>
            {pages.map((page) => (
                <Link as={RouterLink} to={page === 'Home' ? '/' : `/${page.replace(' ', '').toLowerCase()}`} key={page} px={2}>
                    {page}
                </Link>
            ))}
        </>
    );
}

const Nav = () => {
    return (
        <nav>
            <Flex as="nav" justifyContent="center" p="4" flexDir={{ base: "column", md: "row" }} alignItems={"center"}>
                <img src="./assets/images/Logo.svg" alt='logo' />
                <NavigationItems></NavigationItems>
            </Flex>
        </nav>
    );
}

export { Nav, NavigationItems };