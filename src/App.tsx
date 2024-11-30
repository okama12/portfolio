import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import AllProjects from './AllProjects';
import WhatsAppButton from './WhatsAppButton';

function App() {
  return (
    <Router  basename="/portfolio.github.io">
      <div className="relative">
        {/* Main Content */}
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/projects" element={<AllProjects />} />
        </Routes>
        
        {/* WhatsApp Button */}
        <WhatsAppButton phoneNumber="+1234567890" message="Hi, I need more information!" />
      </div>
    </Router>
  );
}

export default App;
