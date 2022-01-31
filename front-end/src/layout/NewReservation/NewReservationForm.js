import React from "react";

function NewReservationForm() {

  return (
    <form className="new_reservation_form">
      <label>First Name:</label><input name="first_name" required />
      <label>Last Name:</label><input name="last_name" required />
      <label>Phone:</label><input name="mobile-number" type="tel" required />
      <label>Reservation Date:</label><input
        name="reservation_date"
        type="date"
        required
      />
      <label>Reservation Time:</label><input name="reservation_time" type="time" required />
      <label>Number of Guests:</label><input name="people" type="number" min="0" required />
    </form>
  );
}

export default NewReservationForm;
