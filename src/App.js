import { useState, useEffect } from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import ViewMore from "./ViewMore";
import LoadingPage from "./LoadingPage";
import Signup from "./Signup";
import Login from "./Login";
import CheckOut from "./CheckOut";
import Update from "./Update";
import { DataContext } from "./contextData/DataContext";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="App ">
      <DataContext>
        {isLoading && <LoadingPage />}
        {!isLoading && (
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
        )}
      </DataContext>
    </div>
  );
}

export default App;
