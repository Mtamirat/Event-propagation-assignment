import React from "react";

const NestedButtons = () => {
  const handleOuterClick = () => {
    console.log("Outer container clicked");
    alert("Outer container clicked");
  };

  const handleInnerClick = (e) => {
    e.stopPropagation(); 
    console.log("Inner button clicked");
    alert("Inner button clicked");
  };

  return (
    <div
      onClick={handleOuterClick}
      style={{
        padding: "40px",
        backgroundColor: "#87CEFA",
        textAlign: "center",
        borderRadius: "10px",
      }}
    >
      <h2>Outer Container</h2>

      <button onClick={handleInnerClick}>
        Inner Button
      </button>
    </div>
  );
};

export default NestedButtons;