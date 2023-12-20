import React, { useEffect, useState } from "react";
import { Container, Loader } from "semantic-ui-react";
import Web3 from "web3";
import { TODO_APP_ABI, TODO_APP_ADDRESS } from "../../config";
import Task from "../../models/Task.interface";
import TodoList from "./todoList/TodoList";
import "./Main.scss";

interface Props {
  account: (address: string) => void;
}

const Main: React.FC<Props> = ({ account }) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [address, setAddress] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadData = async () => {
    const web3 = new Web3(Web3.givenProvider || "https://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    setAddress(accounts[0]);
    account(accounts[0]);

    const smartContract = new web3.eth.Contract(TODO_APP_ABI, TODO_APP_ADDRESS);
    setData(smartContract);
    const taskCount = await smartContract.methods.taskCount().call();

    const loadTasks: Task[] = [];
    for (let i = 1; i <= taskCount; i++) {
      const task = await smartContract.methods.tasks(i).call();
      loadTasks.push({
        id: i,
        content: task.content,
        completed: task.completed,
      });
    }
    setTasks(loadTasks);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const createTask = async (content: any) => {
    try {
      setLoading(true);
      await data.methods.createTask(content).send({ from: address });
      window.location.reload();
    } catch (error) {
      setLoading(false);
    }
  };

  const toggleTask = async (taskId: any) => {
    try {
      setLoading(true);
      await data.methods.toggleCompleted(taskId).send({ from: address });
      window.location.reload();
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="main">
      <Container>
        {isLoading ? (
          <Loader active size="medium">
            Loading
          </Loader>
        ) : (
          <TodoList
            tasks={tasks}
            createTask={createTask}
            toggleTask={toggleTask}
          />
        )}
      </Container>
    </div>
  );
};

export default Main;
