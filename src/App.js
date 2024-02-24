import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './components/About';
import Menu from './components/Menu';
import Reservations from './components/Reservations';
import OrderOnline from './components/OrderOnline';
import Login from './components/Login';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useReducer } from 'react';
import { bookingSlots } from './components/constants';
import MyContext from './components/MyContext.js';

const theme = extendTheme({
  fonts: {
    heading: 'Markazi Text, serif',
    body: 'Karla, sans-serif',
  },
}
);

const App = () => {
  const [bookingData, setBookingData] = useState({});

  const handleBookingSubmit = (data) => {
    setBookingData(data);
    console.log(bookingData);
  };

  return (
    <>
      <ChakraProvider theme={theme}>
        <Router>
          {/* <MyContext.Provider value={contextValue}> */}
            <Header></Header>
            <Box as="main">
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/reservations" element={<Reservations onBookingSubmit={handleBookingSubmit} />} />
                <Route path="/orderonline" element={<OrderOnline />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </Box>
            <Footer />
          {/* </MyContext.Provider> */}
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
