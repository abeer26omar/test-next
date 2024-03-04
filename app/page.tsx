import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';

export default function Home() {
  return (
   <>
    <div className="main-wrapper">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </div>
   </>
  );
}
