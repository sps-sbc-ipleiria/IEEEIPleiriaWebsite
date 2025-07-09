import SectionEventsIntro from '../pages/events/SectionIntroEvents';
import WorkshopLatex from './events/2024/WorkshopLatex';
import WorkshopPytorch from './events/2024/WorkshopPytorch';
import WorkshopMicrocontroladores from './events/2024/WorkshopMicroControladores';
import MdiLLMS from './events/2025/MdiLLMS';
import DlAutonomous from './events/2025/DlAutonomousDriving';
import SectionConclusionEvents from './events/SectionConclusionEvents';

function Events() {
  return (
      <>
        <SectionEventsIntro />
        <DlAutonomous />
        <MdiLLMS />
        <WorkshopPytorch />
        <WorkshopLatex  />
        <WorkshopMicrocontroladores />
        <SectionConclusionEvents />
      </>


  );
}

export default Events;