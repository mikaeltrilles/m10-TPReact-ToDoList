import { React, useState } from "react";
import ListRow from './ListRow';
import ListForm from './ListForm';


export default function Lists() {

  //* Liste de tache d'exemple
  const [lists, setLists] = useState([]);

  //* Fonction d'ajout d'une tache
  function addList(newTask) {
    setLists([newTask, ...lists]);
  }

  //* Fonction d'édition d'une tache
  function editTask(list) {
    setLists(
      lists.map(l => l.id === list.id ? { ...l, editable: !l.editable } : l)
    )
  }

  //* Fonction de suppression d'une tache
  function deleteTask(id) {
    setLists(lists.filter(list => list.id !== id));
  }

  
  return (
    <>
      <div className="col-12 d-flex header-container">
        <div className="col-lg-4 col-md-12">
          <h1 className="text-start">Mika-Todo</h1>
          <p className="text-start">Bienvenue sur votre gestionnaire de liste de tache</p>
        </div>
        
      </div>
      <ListForm addList={addList} />
      <table className="table table-striped table-hover">
        {/* En tete de la table */}
        <thead>
          <tr>
            <th className="col-8">Description</th>
            <th className="text-center">Etat</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>
        {/* Corps de la table */}
        <tbody>
          {lists.map((list) => (
            <ListRow
              key={list.id}
              list={list}
              editTask={() => editTask(list)}
              deleteTask={() => deleteTask(list.id)}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}