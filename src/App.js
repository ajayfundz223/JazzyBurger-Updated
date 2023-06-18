import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import ViewMore from "./ViewMore";
import LoadingPage from "./LoadingPage";
import Signup from "./Signup";
import Login from "./Login";
import CheckOut from "./CheckOut";
import Update from "./Update";
import { useContext } from 'react';
import { dataContextCreated } from './contextData/DataContext';

function App() {
  const {isLoading, fetchError} = useContext(dataContextCreated)
  return (
    <div className="App ">
        {isLoading && <LoadingPage />}
        {fetchError ?? (!isLoading && (
          <div>
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/more" element={<ViewMore />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/checkout" element={<CheckOut />} />
                <Route path="/update" element={<Update />} />
              </Routes>
            </div>
          </div>
        ))}
    </div>
  );
}

export default App;
