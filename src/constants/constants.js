const bookingSlots = Array.from({ length: 11 }, (_, index) => {
    const hour = 17 + Math.floor(index / 2);
    const minute = index % 2 === 0 ? '00' : '30';
    const time = `${hour}:${minute}`;
    return time;
})

export { bookingSlots }