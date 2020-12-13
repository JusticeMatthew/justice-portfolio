import Landing from './components/Landing';
import Projects from './components/Projects';

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  return (
    <div className='App'>
      <Landing />
      <Projects />
    </div>
  );
}

export default App;
