import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AnavitoriaPage from "./pages/AnavitoriaPage/AnavitoriaPage";
import ConversationalPage from "./pages/ConversationalPage/ConversationalPage";
import HappyBithdayPage from "./pages/HappyBirthdayPage/HappyBithdayPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PreMainPage from "./pages/PreMainPage/PreMainPage";
import SameBirthdayPage from "./pages/SameBirthdayPage/SameBirthdayPage";
import TimelinePage from "./pages/TimelinePage/TimelinePage";
import TriviaPage from "./pages/TriviaPage/TriviaPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HappyBithdayPage />} />
                <Route path="/aniversario" element={<HappyBithdayPage />} />
                <Route path="/conversa" element={<ConversationalPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/pre-main" element={<PreMainPage />} />
                <Route path="/mesmo-aniversario" element={<SameBirthdayPage />} />
                <Route path="/linha-do-tempo" element={<TimelinePage />} />
                <Route path="/trivia" element={<TriviaPage />} />
                <Route path="/anavitoria" element={<AnavitoriaPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
