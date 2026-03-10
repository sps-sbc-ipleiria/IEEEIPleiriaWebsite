import HeroDepartamentos from "../pages/departments/SectionHero";
import SectionAboutDepartments from "../pages/departments/SectionAboutDepartments";
import SectionQuoteIEEE from "./departments/SectionQuote";
import SectionSPS from "./departments/SectionSPS";
// import SectionCS from "./departments/SectionCS";
import SectionAPS from "./departments/SectionAPS";
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
          <SectionAPS />
        </div>
        <SectionConclusionDepartments />
      </>


  );
}

export default Departments;