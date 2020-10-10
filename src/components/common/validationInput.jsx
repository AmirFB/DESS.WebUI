import React from "react";
import { Input } from "@progress/kendo-react-inputs";
import { Error } from "@progress/kendo-react-labels";

export default function ValidationInpu(props) {
  const { validationMessage, visited, ...others } = props;

  return (
    <div>
      <Input {...others} />
      {visited && validationMessage && (
        <Error multi-line>{validationMessage}</Error>
      )}
    </div>
  );
}
