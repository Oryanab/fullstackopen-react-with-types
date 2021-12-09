import React from "react";

interface coursePartObject {
  name: string;
  exerciseCount: number;
}

const Content = ({
  coursePart,
  key,
}: {
  coursePart: coursePartObject;
  key: string;
}) => {
  return (
    <p key={key}>
      {coursePart.name} {coursePart.exerciseCount}
    </p>
  );
};

export default Content;
