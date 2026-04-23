import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import StatsCard from "./components/StatsCard";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Shaliny", score: 95 },
    { id: 2, name: "Rahul", score: 30 },
  ]); 

  const addStudent = (name, score) => {
    const newStudent = {
      id: Date.now(),
      name,
      score: Number(score),
    };
    setStudents([...students, newStudent]);
  }; 

  const updateScore = (id, newScore) => {
    const updated = students.map((s) =>
      s.id === id ? { ...s, score: Number(newScore) } : s
    );
    setStudents(updated);
  };

  
  const total = students.length;
  const avg = total === 0 ? 0 : (students.reduce((sum, s) => sum + s.score, 0) / total).toFixed(2); 
  const passCount = students.filter((s) => s.score >= 40).length;
  const failCount = total - passCount; 

  return (
    <div className="app">
      <Header />
      <StatsCard  total={total} avg={avg} pass={passCount} fail={failCount} />
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
} 

export default App;   
 
