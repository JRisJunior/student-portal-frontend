import { StudentShow } from "./StudentShow";
import { useState } from "react";

export function Content() {
  const [currentStudent, setCurrentStudent] = useState({})

  const handleStudentShow = (student) => {
    console.log("handleStudentShow", student);
    setCurrentStudent(student);
  }


  return (
    <div>
      <StudentShow student={currentStudent} />
    </div>
  );
}
