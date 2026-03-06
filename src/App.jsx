import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Header from './Compoents/Layout/Header';
import Details from './pages/Details';
import PersonalInfo from './Compoents/Personalnfo';
import WorkExperience from './Compoents/WorkExperience';
import Education from './Compoents/Education';
import KeySkills from './Compoents/KeySkills';
import Preview from './pages/Preview';
import About from './pages/About';
import MyResumes from './Compoents/Layout/MyResumes';

const App = () => {
  return (
    <Router basename="/ResumeBuilder">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/details" element={<Details/>}>
          <Route index element={<Navigate to="/details/personal-info" replace />} />
          <Route path="personal-info" element={<PersonalInfo />} />
          <Route path="work-experience" element={<WorkExperience />} />
          <Route path="education" element={<Education />} />
          <Route path="key-skills" element={<KeySkills />} />
        </Route>
        <Route path='resumes' element= {<MyResumes/>} />
        <Route path="/preview" element={<Preview />} />
        <Route path="/about-us" element={<About/>} />
      </Routes>
    </Router>
  );
};

export default App;