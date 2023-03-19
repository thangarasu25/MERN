
import './App.css';
import {Task1} from '../src/tasks/task1';
import {Task2} from '../src/tasks/task2';
import {Task3}from '../src/tasks/task3';
import {Home} from '../src/tasks/home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route index element={<Home />} />
          <Route path="task1" element={<Task1 />} />
          <Route path="task2" element={<Task2 />} />
          <Route path="Task3" element={<Task3 />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
