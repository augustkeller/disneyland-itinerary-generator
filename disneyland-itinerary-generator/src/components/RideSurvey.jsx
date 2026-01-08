import { useState } from "react";
const URL = "https://queue-times.com/parks/6/queue_times.json";

function CategorySelector() {
  const [isChecked, setIsChecked] = useState(false);

  function HandleChange(event) {
    const checked = event.target.checked;
    setIsChecked(checked);
  }

  async function fetchQueueTimes() {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="category-selector">
      <h2>Which of these rides do you like?</h2>
      <input
        type="checkbox"
        value="Pirates of the Caribbean"
        onChange={HandleChange}
      />{" "}
      Pirates of the Caribbean {isChecked && <span>Time</span>}
      <br />
      <input
        type="checkbox"
        value="Haunted Mansion"
        onChange={HandleChange}
      />{" "}
      Haunted Mansion
      <br />
      <input
        type="checkbox"
        value="Jungle Cruise"
        onChange={HandleChange}
      />{" "}
      Jungle Cruise
      <br />
      <input
        type="checkbox"
        value="Space Mountain"
        onChange={HandleChange}
      />{" "}
      Space Mountain
      <br />
      <input
        type="checkbox"
        value="It's a Small World"
        onChange={HandleChange}
      />{" "}
      It's a Small World
      <br />
      <input
        type="checkbox"
        value="Thunder Mountain Railroad"
        onChange={HandleChange}
      />{" "}
      Thunder Mountain Railroad
      <br />
    </div>
  );
}

export default CategorySelector;
