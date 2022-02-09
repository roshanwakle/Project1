import React, { useState } from "react";
function CssDemo1() {
  const [CssClass, setCssClass] = useState("");
  const onColorChange = () => {
    setCssClass("text-white");
  };
  return (
    <>
      <h1 className={"bg-success" + CssClass}>This is css demo</h1>
      <button onClick={onColorChange}>Click</button>
    </>
  );
}
export default CssDemo1;
