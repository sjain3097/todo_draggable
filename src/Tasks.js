import { useDispatch, useSelector } from "react-redux";

export const Tasks = ({ status }) => {
  const headerTitle =
    status === "NEW" ? "NEW" : status === "ACTIVE" ? "ACTIVE" : "COMPLETED";
  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleOnDrop = (e) => {
    let target = e.target.getAttribute("class");
    if (!target) return;
    let dropLocation = target.replace("Container", "");
    let draggedTask = JSON.parse(e.dataTransfer.getData("draggedTask"));
    if (dropLocation !== draggedTask.status) {
      dispatch({
        type: "MOVE",
        payload: { draggedTask, dropLocation: dropLocation }
      });
    }
  };

  const handleOnDragStart = (e) => {
    let label = e.target.innerHTML;
    let status = e.target.getAttribute("class");
    e.dataTransfer.setData("draggedTask", JSON.stringify({ label, status }));
  };

  return (
    <div
      className={`${status.toLowerCase()}Container`}
      style={style.taskContainer}
      onDrop={(e) => {
        handleOnDrop(e);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
    >
      <div className="list-group">
        <div style={style.header}>{headerTitle}</div>
        {tasks[status.toLowerCase()].map((task) => (
          <div className="list-group-item-success m-1 border border-success">
            <div
              className={status.toLowerCase()}
              draggable
              onDragStart={(e) => {
                handleOnDragStart(e);
              }}
            >
              {task.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const style = {
  taskContainer: {
    width: "33.32%",
    border: "1px solid ",
    marginRight: "0.1%"
  },
  header: {
    border: "1px solid ",
    backgroundColor: "#212529",
    color: "white"
  }
};
