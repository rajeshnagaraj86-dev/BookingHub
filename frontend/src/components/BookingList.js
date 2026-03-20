import React from 'react';

const BookingList = ({ bookings }) => {
    return (
        <div>
            <h1>Booking List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map(booking => (
                        <tr key={booking.id}>
                            <td>{booking.id}</td>
                            <td>{booking.name}</td>
                            <td>{booking.date}</td>
                            <td>{booking.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BookingList;