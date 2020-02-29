import React from 'react';
import "../styles/_buttons.scss";

type FormButtonProps = {
  color?: string,
  ctaString: string
}

function FormButton(props: FormButtonProps) {
  return (
    <button
      className="form_button"
    >
      {props.ctaString}
    </button>
  );
}

export default FormButton;