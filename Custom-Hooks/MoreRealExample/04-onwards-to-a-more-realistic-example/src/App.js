import React, { useEffect, useState } from 'react';
import useHttp from './hooks/use-http';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {

    const requestConfig = {
      url: 'https://react-https-66857-default-rtdb.firebaseio.com/tasks.json'
    }

    const getData = (tasksObj) => {

      let loadedTasks = []

      for (let task in tasksObj) {
        loadedTasks.push({ id: task, text: tasksObj[task].text });
      }

      setTasks(loadedTasks);
    };

    fetchTasks(requestConfig, getData);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
};

export default App;
