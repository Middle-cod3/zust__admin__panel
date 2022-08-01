

import Header from './Header';
import { Routes, Route } from "react-router-dom";
import Category from './components/main-category/Category';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Category />} />
   

      </Routes>
  

     
    </div>
  );
}

export default App;
