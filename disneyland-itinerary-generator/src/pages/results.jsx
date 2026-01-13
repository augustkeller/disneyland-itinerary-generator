import { useLocation, useNavigate } from "react-router-dom";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();

  const selected = location.state?.selected || [];

  return (
    <div>
      <h1>Completed Rides</h1>

      {selected.length === 0 ? (
        <p>No rides selected.</p>
      ) : (
        <ul>
          {selected.map(ride => (
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