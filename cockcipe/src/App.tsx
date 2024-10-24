import { Routes, Route } from 'react-router-dom';
import MainHome from 'pages/mainHome';
import { RecipeFilter } from 'pages/recipeFilter';
import { Header } from 'templates/header';
import { Footer } from 'templates/footer';
import { AuthProvider } from 'context/AuthContext';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="app-container">
        <Header />
        <main className="flex-1 pt-14"> {/* 헤더 높이만큼의 패딩 추가 */}
          <Routes>
            <Route path="/" element={<MainHome />} />
            <Route path="/recipes" element={<RecipeFilter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
