import { useState } from "react";

function StudentRow({ student, updateScore }) {
  const [newScore, setNewScore] = useState(student.score);

  const handleSave = () => {
    updateScore(student.id, newScore);
  };  

  return (
    <tr>
      <td>{student.name}</td>

      <td>
        <input
          type="number"
          value={newScore}
          onChange={(e) => setNewScore(e.target.value)}
        /> 
      </td>

     <td className={student.score >= 40 ? "pass" : "fail"}>
        {student.score >= 40 ? "Pass" : "Fail"}
      </td> 
 
      <td>
        <button onClick={handleSave}>Save</button>
      </td>
    </tr>
  );
} 

export default StudentRow;   
