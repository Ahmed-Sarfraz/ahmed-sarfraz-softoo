import React from "react";
import MultiSelect from "../../Common/Form/MultiSelect/MultiSelect";

export default function ProductColourFilter() {
  const options = ["black", "stone"];
  return <MultiSelect options={options} />;
}
