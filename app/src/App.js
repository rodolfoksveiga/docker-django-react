import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const API_URL = process.env.REACT_APP_API_URL ?? "http://localhost:8000";

const App = () => {
  const [students, setStudents] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/students/`)
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const isDbConnected = Boolean(students);
  const isDbEmpty = isDbConnected && students.length === 0;

  return (
    <div className="App">
      <header className="App-header">
        {isDbConnected ? (
          isDbEmpty ? (
            <div>
              <h2>You have no students in your database..!</h2>
              <h5>
                You can add students using{" "}
                <a href={`${API_URL}/admin`}>Django Admin</a>.
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
