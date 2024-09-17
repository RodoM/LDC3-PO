import PropTypes from "prop-types";
import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const TaskForm = ({onAdd}) => {
  const [taskName, setTaskName] = useState('');

  const handleAddClick = () => {
    if (taskName == '') {
      alert("Debe ingresar un nombre para la tarea")
    } else {
      onAdd(taskName);
      setTaskName('');
    }
  };

  return (
    <div className="grid gap-2 w-full">
      <Label>Nombre de la nueva tarea</Label>
      <div className="flex w-full items-center space-x-2">
        <Input type="text" value={taskName} placeholder="Ingrese el nombre de la nueva tarea..." onChange={(ev) => setTaskName(ev.target.value)} />
        <Button onClick={handleAddClick}>Agregar</Button>
      </div>
    </div>
  )
}

TaskForm.propTypes = {
  onAdd: PropTypes.func,
};