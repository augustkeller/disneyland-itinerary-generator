import { useLocation, useNavigate } from "react-router-dom";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  const completed = location.state?.completed || [];

  return (
    <div>
      <h1>Completed Rides</h1>

      {completed.length === 0 ? (
        <p>No rides selected.</p>
      ) : (
        <ul>
          {completed.map(ride => (
            <li key={ride}>{ride}</li>
          ))}
        </ul>
      )}

      <button onClick={() => navigate("/")}>
        Back to To-Do List
      </button>
    </div>
  );
}