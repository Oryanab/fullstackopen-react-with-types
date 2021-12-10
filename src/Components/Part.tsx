import React from "react";
import {
  Content,
  CoursePart,
  CourseDescriptionPart,
  CourseNormalPart,
  CourseProjectPart,
  CourseSubmissionPart,
} from "./Content";

export default function Part({
  courseParts,
}: {
  courseParts: CoursePart[];
}): JSX.Element {
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };
  const checkType = (course: CoursePart): any => {
    // courseParts.forEach((course) => {
    switch (course.type) {
      case "normal":
        return course.description
          ? course.description
          : `Project exercise ${course.exerciseCount}`;
      case "groupProject":
        return course.description
          ? course.description
          : `Project exercise ${course.exerciseCount}`;
      case "submission":
        return course.description
          ? course.description
          : `Project exercise ${course.exerciseCount}`;
      case "special":
        return course.description
          ? course.description
          : `Project exercise ${course.exerciseCount}`;
    }
    //});
  };

  return (
    <div>
      {courseParts.map((course) => {
        return (
          <Content
            key={course.name}
            coursePart={course}
            additions={<ElemPart courseParts={checkType(course)} />}
          />
        );
      })}
    </div>
  );
}

function ElemPart({ courseParts }: { courseParts: string }): JSX.Element {
  return <p>{courseParts}</p>;
}
