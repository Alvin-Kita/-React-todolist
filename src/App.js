import './App.css';
import Button from "./components/Button.js";
import Formulaire from "./components/Formulaire.js";
import Task from "./components/Task.js";
import { useState } from "react";

function App() {
    // Affichage du formulaire
    const [displayForm, setDisplayForm] = useState(false);

    // Sauvegarde de tâche
    const [tasks, setTasks] = useState([]);
    const updateTasks = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    };

    // Mise à jour de l'état
    const completeTask = (index) => {
        setTasks((prevTasks) => {
            return prevTasks.map((task, i) => {
                if (i !== index) {
                    return task;
                } else {
                    task.done = true;
                    return task;
                }
            });
        });
    };

    const removeTask = (index) => {
        setTasks((prevTask) => prevTask.filter((task, i) => i !== index));
    }

    return (
        <div className="App">
            <header>
                <h1> Todolist </h1>
                <Button
                    label={
                        displayForm
                            ? "Fermer le formulaire"
                            : "Ajouter une tâche"
                    }
                    onClick={() => setDisplayForm(!displayForm)}
                />
            </header>
            <Formulaire show={displayForm} addTask={updateTasks}></Formulaire>
            <ul className={"tasks-list"}>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <Task
                            label={task.label}
                            done={task.done}
                            remove={removeTask}
                            complete={completeTask}
                            index={index}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;