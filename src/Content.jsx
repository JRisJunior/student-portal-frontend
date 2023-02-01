import { StudentShow } from "./StudentShow";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";

export function Content() {
  const [currentStudent, setCurrentStudent] = useState({});


  const handleStudentShow = (student) => {
    console.log("handleStudentShow", student);
    setCurrentStudent(student);
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<StudentShow student={currentStudent} />} />
      </Routes>
    </div>
  );
}
