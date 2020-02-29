import React, { useState } from 'react';
import FormWrapper from '../ui_components/FormWrapper';
import axiosClient from '../axiosClient';
import FormButton from "../ui_components/FormButton";

function UOMForm() {
  const [ uomName, setUOM ] = useState<string | ''>();

  async function submitUOM(e: React.FormEvent<HTMLFormElement>) {
    try {
      axiosClient({
        method: "post",
        url: "api/v1/admin/add_uom",
        data: {
          "uom_name": uomName
        }
      })
    } catch(e) {
      console.error(e);
    }
  }

  return (
    <FormWrapper>
      <form onSubmit={(e) => submitUOM(e)}>
        <label>Unit of Measure</label>
        <input
          className="form_input"
          id="uom-name"
          type="text"
          name="uom_name"
          onChange={(e) => setUOM(e.currentTarget.value)}
        />
        <FormButton
          ctaString="Add Unit of Measure"
        />
      </form>
    </FormWrapper>
  );
}

export default UOMForm;