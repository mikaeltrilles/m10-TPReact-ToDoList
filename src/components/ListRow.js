import { useState } from "react";
import * as Icon from 'react-bootstrap-icons';


export default function ListRow({ list, editTask, deleteTask }) {

  const [task, setTask] = useState(list.task);
  const [completed, setCompleted] = useState(list.completed);

  //* Fonction Tache Terminée je met a jour le champs completed si il est true je le passe a false et inversement puis je mets a jour
  function taskCompleted(task) {
    setCompleted(!completed);
  }

  return (
    <tr>
      {list.editable ? (
        <td>
          <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        </td>
      ) : (
        <td>{task}</td>
      )}
      <td className="text-center">
        <span 
        className={`badge rounded-pill mx-2 ${completed ? "bg-success" : "bg-primary"} `}
        >{completed ? "Terminé" : "En cours"}
        </span>
      </td>
      <td className="text-end actions">
        {completed ? (
          <Icon.LockFill color="black" size={26} />
        ) : (
          <a onClick={editTask} className="mx-2 btn rounded-pill btn-sm btn-info">✎</a>
        )}
        <a
          onClick={taskCompleted}
          className={`mx-2 rounded-pill btn btn-sm ${completed ? "btn-warning" : "btn-success"}`}
        >{completed ? "✖︎" : "✔︎"}
        </a>

        {!completed ? (
        <a
          // Je demande une confirmation avant suppression
          onClick={() => {
            if (window.confirm("⚠️ Voulez-vous vraiment supprimer cette tache ?")) {
              deleteTask();
            }
          }}
          className="mx-2 btn rounded-pill btn-sm btn-danger">
            <Icon.Trash />
        </a>) :''}
      </td>
    </tr>


  );
}