import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import NewTask from './component/NewTask';
import EditTask from './component/EditTask';
import DeleteTask from './component/DeleteTask';
import { Routes, Route } from 'react-router-dom'; 
function App() {
  return (

      <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/tasks/create' element={<NewTask />} />
      <Route path='/tasks/details/:id' element={<EditTask />} />
      <Route path='/tasks/delete/:id' element={<DeleteTask />} />
      
    </Routes>
  
  );
}

export default App;
