import React from "react";

const TestLayout = ({ children, } : {children : React.ReactNode}) => {
  return (
    <div className="bg-rose-300 h-full">
      <h1>Test Layout</h1>
      {children}
    </div>
  );
}

export default TestLayout;