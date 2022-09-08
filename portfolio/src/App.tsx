import Header from './pages/Header';
import AboutMe from './pages/AboutMe';
import Portfolios from './pages/Portfolios';
import WorkExperience from './pages/WorkExperience';
import Footer from './pages/Footer';
import { AnimateSharedLayout } from 'framer-motion';
import { LanguageContextProvider } from 'context/LanguageContext';


function App() {
  return (
    <>
      <AnimateSharedLayout>
        <LanguageContextProvider>
          <Header />
          <AboutMe />
          <Portfolios/>
          <WorkExperience/>
          <Footer/>
        </LanguageContextProvider>
      </AnimateSharedLayout>
    </>
  );
}

export default App;
