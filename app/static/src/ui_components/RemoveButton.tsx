import React from 'react';

type RemoveButtonProps = {
  onClick: Function,
  removalIndex: number
}

function RemoveButton(props: RemoveButtonProps){
  return (
    <div style={{
      position: "relative",
      display: "inline-block"
    }} >
      <div style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "#000",
      }}/>
      <span
        style={{
          padding: "5px",
          position: "absolute",
          zIndex: 10,
          top: "-5px",
          color: "#fff",
          left: "1px"
        }}
        onClick={(e) => props.onClick(props.removalIndex)}
      >
        x
      </span>
    </div>
  );
}

export default RemoveButton;