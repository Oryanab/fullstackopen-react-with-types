import React from "react";
interface coursePartObject {
  name: string;
  exerciseCount: number;
}
const Total = ({ courseParts }: { courseParts: coursePartObject[] }) => {
  return (
    <p>
      Number of exercises{" "}
      {courseParts.reduce(
        (carry, part): number => carry + part.exerciseCount,
        0
      )}
    </p>
  );
};

export default Total;
