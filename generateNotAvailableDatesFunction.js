function generateNotAvailableDates(array) {
    const notAvailableDates = [];
    array.forEach(reservation => {
        let date = new Date(reservation.fechaIni);
        const reservationEndDate = new Date(reservation.fechaFin);
        while (date < reservationEndDate) {
            notAvailableDates.push(date);
            date.setDate(date.getDate() + 1);
        }
    });
    return notAvailableDates;
}