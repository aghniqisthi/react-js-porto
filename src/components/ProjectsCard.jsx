import { quotes } from "../assets";

const ProjectsCard = ({ content, name, title, link }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[550px] md:mr-10 sm:mr-5 mr-0 my-5 projects-card ">
    <a href={link} target="_blank">
    <img
      src={quotes}
      alt="double_quotes"
      className="w-[42.6px] h-[27.6px] object-contain"
    />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
    </a>
  </div>
);

export default ProjectsCard;
