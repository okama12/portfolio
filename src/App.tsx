import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import ProjectDetails from './ProjectDetails';
import AllProjects from './AllProjects';

const App = () => {
  return (
    <Router>
      <div className="relative">
        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
        
      </div>
    </Router>
  );
};

export default App;
