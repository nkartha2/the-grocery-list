import React, { useState } from 'react';
import FormWrapper from '../ui_components/FormWrapper';
import axiosClient from '../axiosClient';

function UOMForm() {
  const [ uomName, setUOM ] = useState<string | ''>();
  try {
    axiosClient({
      method: "post",
      url: "api/v1/admin/add_uom",
      data: {
        "uom_name": uomName
      }
    }
  )
  } catch(e) {
    console.error(e);
  }

  return (
    <FormWrapper>
      <div>
        <label>Unit of Measure</label>
        <input
          className="form_input"
          id="uom-name"
          type="text"
          name="uom_name"
          onChange={(e) => setUOM(e.currentTarget.value)}
        />
      </div>
    </FormWrapper>
  );
}

export default UOMForm;