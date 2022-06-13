import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [students, setStudents] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/students/")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const isDBConnected = Boolean(students);
  const isDBEmpty = isDBConnected && students.length === 0;

  return (
    <div className="App">
      <header className="App-header">
        {isDBConnected ? (
          isDBEmpty ? (
            <div>
              <h2>You have no students in your database..!</h2>
              <h5>
                You can add students using{" "}
                <a href="http://localhost:8000/admin">Django Admin</a>.
              </h5>
            </div>
          ) : (
            <div>
              <h2>Students List</h2>
              <ul>
                {students.map((student) => (
                  <li key={student.id}>{student.name}</li>
                ))}
              </ul>
            </div>
          )
        ) : (
          <div>
            <h2>Frontend and Backend are not connected!</h2>
            <h5>
              Please, review your code and check if the Backend is running
              properly.
            </h5>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;
