import Landing from './components/Landing';
import Projects from './components/Projects';
import About from './components/AboutMe';
import Contact from './components/Contact';

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div className='App'>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
