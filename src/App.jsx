
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import AppHero from './component/AppHero';
import AppAbout from './component/AppAbout';
import AppContact from './component/Contact';
import AppFooter from './component/footer';


function App() {

  return (
    <div>
      < header id='home'>
        <Header />
      </header>
      <main>
        <AppHero />
        <AppAbout />
        <AppContact />
      </main>
      <footer id='footer'>
        <AppFooter/>
      </footer>
    </div>
  )
}

export default App
