import { StudentShow } from "./StudentShow";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

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
        <Route path="/students/:id" element={<StudentShow />} />
      </Routes>
    </div>
  );
}
