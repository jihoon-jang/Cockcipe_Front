import { Routes, Route } from 'react-router-dom';
import MainHome from 'pages/mainHome';
import { RecipeFilter } from 'pages/recipeFilter';
import { Header } from 'templates/header';
import { AuthProvider } from 'context/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="app-container">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/recipes" element={<RecipeFilter />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
