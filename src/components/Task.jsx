import "../style/Task.css";

function Task({ toggleImportant, listItem, remove }) {
  return (
    <div
      className={listItem.important ? "important" : ""}
      onDoubleClick={() => toggleImportant(listItem)}
    >
      <div className="child-element">
        <h5>
          {listItem.task}
          <span
            onClick={() => remove(listItem.id)}
            className="badge badge-danger"
          >
            -
          </span>
        </h5>
      </div>
    </div>
  );
}

export default Task;
