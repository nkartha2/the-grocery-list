import React from 'react';
import "../styles/_forms.scss";

function FormWrapper(props: {children: React.ReactElement}): JSX.Element {
  return (
    <div className="form">
      <div className="form_body">
        {props.children}
      </div>
    </div>
  );
}

export default FormWrapper;