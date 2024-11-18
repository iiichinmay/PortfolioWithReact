import Navbar from './component/navbar/navbar'
import Main from './component/main'
import Services from './component/services'
import Projects from './component/projects'
import Technologies from './component/technologies'
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
    <Technologies />
    <FAQ />
    <Footer />
    </div>
  );
}
export default App;