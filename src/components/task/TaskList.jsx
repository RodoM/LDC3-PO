import PropTypes from "prop-types";
import { Check, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
export const TaskList = ({tasks, onComplete, onDelete}) => {
  if (tasks.length) {
    return(
      <ul className="flex flex-col gap-2 w-full">
        {tasks.map((task, index) => {
          return (
            <li className="grid grid-cols-2 place-items-center border-b border-input pb-2" key={index}>
              <div className={`mr-auto ${task.isDone ? 'line-through' : ''}`}>{task.name}</div>
              <div className="flex gap-2 ml-auto">
                <Button variant="outline" size="icon" onClick={() => onComplete(index)}>
                  <Check className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" onClick={() => onDelete(index)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </li>
          )
        })}
      </ul>
    )
  } else {
    return (
      <p className="text-muted-foreground font-medium">Actualmente no cuenta con tareas. Añade una!</p>
    )
  }
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  onComplete: PropTypes.func,
  onDelete: PropTypes.func
};
