import { useState } from "react";
import { Checkbox, Form } from "semantic-ui-react";
import Task from "../../../models/Task.interface";
import "./TodoList.scss";

type Props = {
  tasks: Task[];
  createTask: (content: any) => void;
  toggleTask: (taskId: any) => void;
};

const TodoList: React.FC<Props> = ({ tasks, createTask, toggleTask }) => {
  const [input, setInput] = useState<string>("");
  const [inputError, setInputError] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") {
      setInputError(true);
      return;
    }

    createTask(input);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setInputError(false);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Enter a new task"
          placeholder="e.g. Go for a run"
          value={input}
          error={inputError}
          onChange={handleInputChange}
        />
        <Form.Button type="submit" content="Add" />
      </Form>
      <div className="taskTemplate center">
        <ul>
          {tasks.map((task) => (
            <div className="align" key={task.id}>
              <Checkbox
                defaultChecked={task.completed}
                className="checkbox"
                onClick={() => toggleTask(task.id)}
              />
              <span
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.content}
              </span>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
