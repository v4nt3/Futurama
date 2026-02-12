import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import CharacterList from './components/Characters/CharacterList';
import ContactForm from './components/Form/ContactForm';
import About from './components/About/AboutTeam';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/characters" replace />} />
          <Route path="characters" element={<CharacterList />} />
          <Route path="form" element={<ContactForm />} />
          <Route path="about" element={<About />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
