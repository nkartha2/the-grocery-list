import React from 'react';
import "../styles/_buttons.scss";

type ButtonProps = {
  color?: string,
  ctaString: string
}

function FormButton(props: ButtonProps) {
  return (
    <button
      className="form_button"
    >
      {props.ctaString}
    </button>
  );
}

export default FormButton;