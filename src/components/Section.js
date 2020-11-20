import React from "react";

const Section = ({ children, title }) => {
  return (
    <div className="row">
      <div className="col-12 px-0">
        <div className="container pt-3">
          <h2 className="pb-1 pt-2">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Section;
