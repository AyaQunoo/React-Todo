import ListHeader from "./Components/ListHeader";
import { useState, useEffect } from 'react'
import getData from "./utils/getData";
import ListItem from "./Components/ListItem"
function App() {
  const [tasks, setTasks] = useState(null)
  useEffect(() => {
    getData().then(data => setTasks(data))
  }, [tasks])

  const sortedTasks = tasks?.sort((a, b) => new Date(b.date) - new Date(a.date))

  return (
    <div className="app">
      <ListHeader listName="Todo list" />
      {sortedTasks?.map((task) => <ListItem key={task.id} task={task} />)}
    </div>
  );
}

export default App; 
