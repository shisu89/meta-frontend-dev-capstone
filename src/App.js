import Header from './components/Header.js';
import Main from './pages/Main.js';
import Footer from './components/Footer';
import About from './pages/About.js';
import Menu from './pages/Menu.js';
import Reservations from './pages/Reservations.js';
import OrderOnline from './pages/OrderOnline.js';
import Login from './pages/Login.js';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useReducer, useEffect } from 'react';
import { bookingSlots } from './constants/constants'
import { fetchAPI } from './api/mockAPI.js';

const theme = extendTheme({
  fonts: {
    heading: 'Markazi Text, serif',
    body: 'Karla, sans-serif',
  },
}
);

export const initializeTimes = () => {
  const date = new Date();
  const times = fetchAPI(date);
  return times;
};

export const updateTimes = (state, action) => {
  // console.log('state', state);
  // console.log('action', action);
  const date = new Date(action.payload);
  const times = fetchAPI(date)
  return times
}

const App = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes())
  const [bookingData, setBookingData] = useState({});

  const handleBookingSubmit = (data) => {
    setBookingData(data);
  };

  useEffect(() => {
    console.log('useEffect activated')
    if (bookingData.date) {
      fetchAPI(Date(bookingData.date)).then((data) => {
        dispatch({ type: 'SET_TIMES', payload: data });
      });
    }
  }, [bookingData.date]);

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
              <Route path="/reservations" element={<Reservations availableTimes={availableTimes} dispatch={dispatch} onBookingSubmit={handleBookingSubmit} />} />
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
