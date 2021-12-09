import React from "react";
import logo from "./logo.svg";
import Content from "./Components/Content";
import Header from "./Components/Header";
import Total from "./Components/Total";

const App = () => {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
    },
  ];

  return (
    <div>
      <Header courseName={courseName} />
      {courseParts.map((course) => {
        return <Content key={course.name} coursePart={course} />;
      })}
      <Total courseParts={courseParts} />
    </div>
  );
};

export default App;
