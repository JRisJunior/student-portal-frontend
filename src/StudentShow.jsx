import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export function StudentShow(props) {
  const [student, setStudent] = useState({});
  const [experiences, setExperiences] = useState({});
  const [capstone, setCapstone] = useState({});
  const params = useParams();

  const getStudent = () => {
    axios.get("http://localhost:3000/students/current").then(response => {
      console.log(response.data);
      setStudent(response.data);
    });
  };

  const getExperiences = () => {
    axios.get("http://localhost:3000/experiences").then(response => {
      console.log(response.data);
      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i]["student_id"] === student.id) {
          setExperiences(response.data[i]);
        }
      }
    });
  };

  const getCapstone = () => {
    axios.get("http://localhost:3000/capstones").then(response => {
      console.log(response.data);
      for (let i = 0; i < response.data.length; i++) {
        if (response.data[i]["student_id"] === student.id) {
          setCapstone(response.data[i]);
        }
      }
    });
  };

  useEffect(getStudent, []);
  useEffect(getExperiences, []);
  useEffect(getCapstone, []);

  return (
    <div>
      <h2>Student Information</h2>
      <h3>About</h3>
      <p>Name: {student.first_name + " " + student.last_name}</p>
      <p>Email: {student.email}</p>
      <p>Phone Number: {student.phone}</p>
      <p>Bio: {student.biography}</p>
      <p>LinkedIn: {student.linkedin_url}</p>
      <p>Twitter Handle: {student.twitter_user}</p>
      <p>Personal Website: {student.website_url}</p>
      <p>Online Resume: {student.resume_url}</p>
      <p>Github: {student.github_url}</p>
      <p>Photo: {student.photo_url}</p>
      <hr />
      <h3>Experience</h3>
      <p>Job Title: {experiences.title} </p>
      <p>Company: {experiences.company} </p>

      <hr />
      <h3>Education</h3>
      <hr />
      <h3>Skills</h3>
      <hr />
      <h3>Capstone</h3>
      <p>Name: {capstone.name}</p>
      <p>Description: {capstone.description}</p>
      <p>Link: {capstone.url}</p>

    </div>
  );
}