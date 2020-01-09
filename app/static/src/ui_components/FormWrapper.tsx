import React from 'react';
import "../styles/_forms.scss";

function FormWrapper(props: {children: React.ReactElement}): JSX.Element {
  return (
    <div className="form">
      {props.children}
    </div>
  );
}

export default FormWrapper;