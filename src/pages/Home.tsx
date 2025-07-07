import SectionIEEE from '../pages/home/SectionIEEE';
import SectionIntro from '../pages/home/SectionIntro';
import SectionBranches from '../pages/home/SectionBranches';
import SectionEvents from '../pages/home/SectionEvents';
import SectionHomeConclusion from './home/SectionHomeConclusion';

function Home() {
  return (
      <>
        <SectionIntro/>
        <SectionIEEE />
        <SectionBranches />
        <SectionEvents />
        <SectionHomeConclusion />
      </>
  );
}

export default Home;
