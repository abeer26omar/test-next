import Header from './components/Header';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import SectionThree from './components/SectionThree';
import Products from './components/Products';

export default function Home() {
  return (
   <>
    <div className="main-wrapper">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Products />
    </div>
   </>
  );
}
