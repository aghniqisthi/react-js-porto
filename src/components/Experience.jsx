import { experience } from "../constants";
import styles, { layout } from "../style";

const ExperienceCard = ({ icon, title, content, index }) => (
  <div 
    className={`flex flex-row p-6 rounded-[20px] 
    ${ index !== experience.length - 1 ? "mb-6" : "mb-0" } 
    experience-card`} >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`} >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Experience = () => (
  <section id="experience" className={layout.section}>
    {/* <div className={layout.sectionInfo}> */}

    <div className={`${layout.sectionImg} flex-col`}>
      <h2 className={styles.heading2}> Experience </h2>
      <br className="sm:block hidden" />{" "}
      {experience.map((experience, index) => (
        <ExperienceCard key={experience.id} {...experience} index={index} />
      ))}
    </div>
  </section>
);

export default Experience;
