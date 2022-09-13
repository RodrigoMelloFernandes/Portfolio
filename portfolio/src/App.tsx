import Menu from 'pages/Menu';
import Header from './pages/Header';
import AboutMe from './pages/AboutMe';
import Portfolios from './pages/Portfolios';
import Footer from './pages/Footer';
import { AnimateSharedLayout } from 'framer-motion';
import { LanguageContextProvider } from 'context/LanguageContext';


function App() {
  return (
    <>
      <AnimateSharedLayout>
        <LanguageContextProvider>
          <Menu />
          <Header />
          <AboutMe />
          <Portfolios/>
          <Footer/>
        </LanguageContextProvider>
      </AnimateSharedLayout>
    </>
  );
}

export default App;
