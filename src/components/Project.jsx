import { projects } from "../constants";
import styles from "../style";
import ProjectsCard from "./ProjectsCard";

const Project = () => (
  <section id="projects" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `} >
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    {/* <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]"> */}
    
    <h2 className={styles.heading2}> Projects </h2>
    <div className="flex flex-wrap sm:justify-start justify-center w-full projects-container relative z-[1] ">
      {projects.map((card) => (
        <ProjectsCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Project;
