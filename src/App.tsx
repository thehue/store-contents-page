import { Routes, Route, Navigate } from 'react-router-dom';
import GlobalStyle from './lib/styles/GlobalStyle';
import ContentsPage from './pages/ContentsPage';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/store" element={<ContentsPage />} />
        <Route path="*" element={<Navigate to="/store" replace />} />
      </Routes>
    </>
  );
}
