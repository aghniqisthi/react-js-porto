import styles from "../style";
import { phone } from "../assets";
import { useState, useEffect } from "react";
import "animate.css";

export const Profile = () => {
  // const [loopNum, setLoopNum] = useState(0);
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [text, setText] = useState("");
  // const [delta, setDelta] = useState(300 - Math.random() * 100);
  // const [index, setIndex] = useState(1);
  // const period = 2000;

  // useEffect(() => {
  //   let ticker = setInterval(() => {
  //     tick();
  //   }, delta);

  //   return () => {
  //     clearInterval(ticker);
  //   };
  // }, [text]);

  // const tick = () => {
  //   let i = loopNum % toRotate.length;
  //   let fullText = toRotate[i];
  //   let updatedText = isDeleting
  //     ? fullText.substring(0, text.length - 1)
  //     : fullText.substring(0, text.length + 1);

  //   setText(updatedText);

  //   if (isDeleting) {
  //     setDelta((prevDelta) => prevDelta / 2);
  //   }

  //   if (!isDeleting && updatedText === fullText) {
  //     setIsDeleting(true);
  //     setIndex((prevIndex) => prevIndex - 1);
  //     setDelta(period);
  //   } else if (isDeleting && updatedText === "") {
  //     setIsDeleting(false);
  //     setLoopNum(loopNum + 1);
  //     setIndex(1);
  //     setDelta(500);
  //   } else {
  //     setIndex((prevIndex) => prevIndex + 1);
  //   }
  // };
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`} >
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`} >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[60px] text-[60px] text-white ss:leading-[75px] leading-[75px]" style={{ whiteSpace: "nowrap" }}>
            <span className="text-gradient">Aghni Qisthina Al Rahma</span>{" "}
          </h1>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-regular ss:text-[30px] text-[32px] text-white ss:leading-[75px] leading-[25px]">
            Information System, UPN Veteran Jawa Timur <br className="sm:block hidden" />{" "}
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[100%] mt-5`}>
        I'm a student with a big passion for learning something new. 
        I always challenge myself to learn and increase my code quality by joining many training and workshop program. 
        And from one of it, I found Android Development interesting. 
        I'm still enthusiastically grabbing onto any other programming languages, frameworks, or other principles that I can integrate into my codes.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={phone} alt="smartphone" className="w-[70%] h-[70%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Profile;
