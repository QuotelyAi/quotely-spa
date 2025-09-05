import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Calculator from './pages/Calculator';
import Compare from './pages/Compare';
import FAQ from './pages/FAQ';
import Blog from './pages/Blog';
import BlogUpload from './pages/BlogUpload';
import AILegacyRatersPost from './pages/BlogPost-AILegacyRaters';
import QuotelyAIRevolutionPost from './pages/BlogPost-QuotelyAIRevolution';
import Contact from './pages/Contact';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/compare" element={<Compare />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog-upload" element={<BlogUpload />} />
              <Route path="/blog/ai-legacy-raters" element={<AILegacyRatersPost />} />
              <Route path="/blog/quotely-ai-revolution" element={<QuotelyAIRevolutionPost />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
