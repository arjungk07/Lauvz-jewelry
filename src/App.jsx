
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import AppHero from './component/AppHero';
import AppAbout from './component/AppAbout';
import AppContact from './component/Contact';


function App() {

  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppContact />
      </main>
    </div>
  )
}

export default App
