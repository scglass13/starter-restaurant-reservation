import React from "react";
import CancelBtn from "./CancelButton";
import NewReservationForm from "./NewReservationForm";
import SubmitButton from "./SubmitButton";
import CancelButton from "./CancelButton";

function NewReservationPage() {
  return (
    <div className="new_reservation">
      <NewReservationForm />
      <SubmitButton />
      <CancelButton />
    </div>
  );
}

export default NewReservationPage;
