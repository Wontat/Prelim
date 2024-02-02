import React from "react";

function NotPrelim(props) {
  return (
    <div>
      <style>
        {`
          .Take {
            background-color: green;
          }

          .NotTake {
            background-color: red;
          }
        `}
      </style>
      <h1>Things to Bring</h1>
      <h2 className="Take">My Strawhat</h2>
      <h2 className="Take">Gum gum Fruit</h2>
      <h2 className="NotTake">The Red Vest</h2>
    </div>
  );
}

function Prelim(props) {
  const Item = props.Item;
  if (Item) {
    return <NotPrelim />;
  }
  return (
    <div>
      <h1>Things to Bring</h1>
      <h2>Gum gum Fruit</h2>
      <h2>The Red Vest</h2>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Prelim Item={true} />
    </div>
  );
}