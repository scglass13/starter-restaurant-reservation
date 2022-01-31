import React from "react";
import { useHistory } from "react-router-dom";

function CancelButton() {
  const history = useHistory();
  return (
    <div className="cancel_btn">
      <button onClick={() => history.goBack()}>Cancel</button>
    </div>
  );
}

export default CancelButton;
