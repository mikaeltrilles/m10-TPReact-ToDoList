import { useState } from "react";
import './ListForm.css';

export default function ListForm({ addList }) {

  const [error, setError] = useState('');


  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const newTask = {
      id: crypto.randomUUID(),
      task: form.task.value,
      completed: false,
    };

    if (newTask.task.length < 3) {
      setError('Le titre doit faire au moins 3 caractères');
      if (e.target.task.value === "") {
        setError("Le champ titre est obligatoire");
      }
      return;
    }
    addList(newTask);
    setError("");
    form.reset();
    console.log(newTask);
  }

  function getInputForm(name) {
    return (
      
        <div className="form-group col-12">
          <label
            htmlFor={name}
            className="form-label mt-4 fs-4"
          >👇🏻 Veillez saisir la tache à ajouter 👇🏻
          </label>
          <input
            type="text"
            className="form-control"
            id={name}
            name={name}
            placeholder="Veuillez saisir la tache à ajouter ici..."
          />
        </div>
      
    );
  }


  return (
    <>
      <div className={`alert d-block alert-danger ${error ? '' : 'd-none'}`}>
        {error}
        <button
          onClick={() => setError('')}
          className='btn btn-close'></button>
      </div>
      <form onSubmit={handleSubmit} className="text-center w-100">
        {getInputForm('task')}
        <button
          type="submit"
          className="btn btn-secondary w-100 fs-3">
          Ajouter une tache
        </button>
      </form>
    </>
  );
}