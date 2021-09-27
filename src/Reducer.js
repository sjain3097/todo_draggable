const initialState = {
  new: [{ label: "New task1" }],
  active: [{ label: "Active task1" }],
  completed: [{ label: "completed1" }, { label: "completed2" }]
};
export const appReducer = (state = initialState, action) => {
  const tasks = { ...state };
  switch (action.type) {
    case "ADD":
      const { task } = action.payload;
      tasks.new.push({ label: task });
      return tasks;
    case "MOVE":
      const { dropLocation, draggedTask } = action.payload;
      if (tasks[dropLocation]) {
        tasks[dropLocation].push({ label: draggedTask.label });
        tasks[draggedTask.status] = tasks[draggedTask.status].filter(
          (task) => task.label !== draggedTask.label
        );
      }
      return tasks;
    default:
      return state;
  }
};
