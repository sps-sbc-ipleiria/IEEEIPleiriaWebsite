import HeroDepartamentos from "../pages/departments/SectionHero";
import SectionAboutDepartments from "../pages/departments/SectionAboutDepartments";
import SectionQuoteIEEE from "./departments/SectionQuote";
import SectionSPS from "./departments/SectionSPS";

function Departments() {
  return (
      <>
        <HeroDepartamentos />
        <SectionAboutDepartments />
        <SectionQuoteIEEE />
        <SectionSPS />
      </>


  );
}

export default Departments;