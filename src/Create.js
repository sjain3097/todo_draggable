import { useState } from "react";
import { useDispatch } from "react-redux";

export default function CreateTask() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  return (
    <div className="input-group input-group-sm m-3">
      <input
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
        type="text"
      />
      <div class="input-group-append">
        <button
          className="btn btn-primary btn-sm active"
          onClick={() => {
            if (task !== "") {
              dispatch({ type: "ADD", payload: { task } });
              setTask("");
            }
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
}
