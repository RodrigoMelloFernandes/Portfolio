import Header from './pages/Header';
import AboutMe from './pages/AboutMe';
import Portfolios from './pages/Portfolios';
import WorkExperience from './pages/WorkExperience';
import Footer from './pages/Footer';
import { AnimateSharedLayout } from 'framer-motion';

function App() {
  return (
    <>
      <AnimateSharedLayout>
        <Header />
        <AboutMe />
        <Portfolios/>
        <WorkExperience/>
        <Footer/>
      </AnimateSharedLayout>
    </>
  );
}

export default App;
