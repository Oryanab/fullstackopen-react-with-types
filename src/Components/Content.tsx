import React from "react";

// interface coursePartObject {
//   name: string;
//   exerciseCount: number;
// }
// new types
interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
  description?: string;
}

export interface CourseDescriptionPart extends CoursePartBase {
  description: string;
}
export interface CourseNormalPart extends CoursePartBase {
  type: "normal";
}
export interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}

export interface CourseSubmissionPart extends CoursePartBase {
  type: "submission";
  exerciseSubmissionLink: string;
}
export interface CourseSpecialPart extends CoursePartBase {
  description: string;
  requirements: string[];
}

export type CoursePart =
  | CourseNormalPart
  | CourseProjectPart
  | CourseSubmissionPart
  | CourseDescriptionPart
  | CourseSpecialPart;

export const Content = ({
  coursePart,
  key,
  additions,
}: {
  coursePart: CoursePart;
  key: string;
  additions: JSX.Element;
}) => {
  return (
    <p key={key}>
      {coursePart.name} {coursePart.exerciseCount} <span>{additions}</span>
    </p>
  );
};
