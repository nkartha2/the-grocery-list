import React from 'react';
import "../styles/_buttons.scss";

type ButtonProps = {
  color?: string,
  onClick: Function,
  ctaString: string
}

function Button(props: ButtonProps) {
  return (
    <button
      onClick={() => props.onClick()}
    >
      {props.ctaString}
    </button>
  );
}

export default Button;