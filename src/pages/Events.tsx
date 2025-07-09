import SectionEventsIntro from '../pages/events/SectionIntroEvents';
import WorkshopLatex from './events/2024/WorkshopLatex';
import WorkshopPytorch from './events/2024/WorkshopPytorch';
import WorkshopMicrocontroladores from './events/2024/WorkshopMicroControladores';

function Events() {
  return (
      <>
        <SectionEventsIntro />


        
        <WorkshopPytorch />
        <WorkshopLatex  />
        <WorkshopMicrocontroladores />
      </>


  );
}

export default Events;