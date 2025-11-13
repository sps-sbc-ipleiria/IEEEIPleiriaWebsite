import SectionEventsIntro from '../pages/events/SectionIntroEvents';
import WorkshopLatex from './events/2024/WorkshopLatex';
import WorkshopPytorch from './events/2024/WorkshopPytorch';
import WorkshopMicrocontroladores from './events/2024/WorkshopMicroControladores';
import MdiLLMS from './events/2025/MdiLLMS';
import MDImsp from './events/2024/MDImsp.tsx';
import DlAutonomous from './events/2025/DlAutonomousDriving';
import SectionConclusionEvents from './events/SectionConclusionEvents';

function Events() {
  return (
      <>
        <SectionEventsIntro />
        <div id="eventos-ano">
          <MdiLLMS/>
        </div>
        <DlAutonomous />
        <MDImsp />
        <WorkshopPytorch />
        <WorkshopLatex  />
        <WorkshopMicrocontroladores />
        <SectionConclusionEvents />
      </>


  );
}

export default Events;