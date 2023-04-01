
import './App.css';
import { Task1 } from '../src/tasks/task1';
import { Task2 } from '../src/tasks/task2';
import { Task3 } from '../src/tasks/task3';
import { Home } from './tasks/home';
import {ReduxSamples} from './redux/index';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Homepage } from '../src/tasks/home-page';
import { Aboutpage } from '../src/tasks/about-page';
import { Contactpage } from '../src/tasks/contactpage';
import { Detailspage } from '../src/tasks/details';
import { Task4 } from './tasks/task4';

function App() {
  return (
       //no-unused-vars
       //eslint-disable-next-line
    <div className="App">
   
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            <Route path="task1" element={<Task1 />} />
            <Route path="task2" element={<Task2 />} />
                <Route path="task4" element={<Task4 />} />
                   <Route path="task4/home" element={<Homepage />} />
                   <Route path="task4/about" element={<Aboutpage />} />
                   <Route path="task4/contact" element={<Contactpage />} />
                   <Route path="task4/details" element={<Detailspage />} />
                   <Route path="redux" element={<ReduxSamples />} />
                   <Route path="task4/*" element={<div>not found</div>} />
               </Route>
          <Route path="Task3" element={<Task3 />} />
          <Route path="/*" element={<div>not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
