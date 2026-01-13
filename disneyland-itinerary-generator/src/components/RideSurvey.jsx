import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "https://queue-times.com/parks/6/queue_times.json";

function RideSurvey() {
  const [checkedRides, setCheckedRides] = useState({});
  const navigate = useNavigate();

  const rides = [
    { label: "Haunted Mansion", value: "haunted_mansion" },
    { label: "Jungle Cruise", value: "jungle_cruise" },
    { label: "Space Mountain", value: "space_mountain" },
    { label: "It's a Small World", value: "its_a_small_world" },
    { label: "Thunder Mountain Railroad", value: "thunder_mountain_railroad" },
  ];

  function handleChange(event) {
    const { value, checked } = event.target;

    setCheckedRides((prev) => ({
      ...prev,
      [value]: checked,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const selectedRides = Object.keys(checkedRides).filter(
      (ride) => checkedRides[ride]
    );

    navigate("/results", {
      state: { selected: selectedRides },
    });
  }

  // async function fetchQueueTimes() {
  //   const response = await fetch(URL);
  //   const data = await response.json();
  //   console.log(data);
  // }

  return (
    <>
      <div className="category-selector">
        <h2>Which of these rides do you like?</h2>
        <form onSubmit={handleSubmit}>
          {rides.map((ride) => (
            <div key={ride.value}>
              <input
                type="checkbox"
                value={ride.value}
                onChange={handleChange}
              />
              {ride.label} {checkedRides[ride.value] && <span>Time</span>}
            </div>
          ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default RideSurvey;
