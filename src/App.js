import Navbar from './component/navbar/navbar'
import Main from './component/main'
import Services from './component/services'
import Projects from './component/projects'
import Contact from './component/contact'
import FAQ from './component/faq'
import Footer from './component/footer/footer'
import './App.css';

function App() {
  return (
    <div className=' duration-300 relative w-full min-h-screen'>
    <Navbar />
    <Main />
    <Services />
    <Projects />
    <Contact />
    <FAQ />
    <Footer />
    </div>
  );
}
export default App;