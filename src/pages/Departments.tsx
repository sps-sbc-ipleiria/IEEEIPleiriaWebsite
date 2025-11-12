import HeroDepartamentos from "../pages/departments/SectionHero";
import SectionAboutDepartments from "../pages/departments/SectionAboutDepartments";
import SectionQuoteIEEE from "./departments/SectionQuote";
import SectionSPS from "./departments/SectionSPS";
import SectionCS from "./departments/SectionCS";
import SectionPES from "./departments/SectionPES";
import SectionConclusionDepartments from "./departments/SectionConclusionDepartments";

function Departments() {
  return (
      <>
        <HeroDepartamentos />
        <SectionAboutDepartments />
        <SectionQuoteIEEE />
        <div id="departamentos">
          <br></br>
          <SectionSPS />
          {/* <SectionCS /> */}
          <SectionPES />
        </div>
        <SectionConclusionDepartments />
      </>


  );
}

export default Departments;