import "./App.css";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import React, { useContext } from "react";

const Dashboard = React.lazy(() => import("./views/Dashboard"));
const Login = React.lazy(() => import("./views/Login"));
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

function LogoutCheck({ children }: { children: JSX.Element }) {
  let auth = useContext(AuthContext);
  let location = useLocation();

  if (!auth.user.user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />

            <Route
              path="/dashboard"
              element={
                <LogoutCheck>
                  <Dashboard />
                </LogoutCheck>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
