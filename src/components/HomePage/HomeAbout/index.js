import { React, useEffect } from "react";
import { useSelector } from "react-redux";
import "./styles.css";

const HomeAbout = () => {
  const { scrollY } = useSelector((state) => state.scroll);
  useEffect(() => {
    let vh = document.querySelector(".home-contents-section").clientHeight;
    if (scrollY < vh * 1.3) {
      document.querySelector(".home-about-container").style.transform =
        "translateY(100%)";
    } else {
      document.querySelector(".home-about-container").style.transform =
        "translateY(0)";
    }
  }, [scrollY]);

  return (
    <>
      <div className="home-about-container">
        <div className="home-about-header">Who are we?</div>
        <div className="home-about-content">
          Consectetur esse cupidatat aliquip occaecat culpa nulla cillum labore
          duis sint. Aliquip do ipsum cupidatat ad enim excepteur dolore
          proident laborum. Elit aliquip aliquip sunt mollit nulla do eiusmod
          enim exercitation aliqua Lorem quis sint dolor. Id est ut nulla elit
          ex tempor id consequat velit sint Lorem ad. Aliqua aliqua do excepteur
          cupidatat aute deserunt velit dolore. Officia exercitatio
          reprehenderit sint do culpa occaecat exercitation consequat eu
          occaecat eu dolore eu aliqua. Fugiat eiusmod aute tempor ad nostrud ad
          ex commodo velit ex veniam. Dolor pariatur et amet incididunt nisi ea
          sint. Consequat incididunt consectetur sunt pariatur ut tempor
          excepteur ad aute excepteur cupidatat mollit irure sit.
          <p />
          Officia exercitatio reprehenderit sint do culpa occaecat exercitation
          consequat eu occaecat eu dolore eu aliqua. Fugiat eiusmod aute tempor
          ad nostrud ad ex commodo velit ex veniam. Dolor pariatur et amet
          incididunt nisi ea sint. Consequat incididunt consectetur sunt
          pariatur ut tempor excepteur ad aute excepteur cupidatat mollit irure
          sit. Officia exercitatio reprehenderit sint do culpa occaecat
          exercitation consequat eu occaecat eu dolore eu aliqua. Fugiat eiusmod
          aute tempor ad nostrud ad ex commodo velit ex veniam. Dolor pariatur
          et amet incididunt nisi ea sint. Consequat incididunt consectetur sunt
          pariatur ut tempor excepteur ad aute excepteur cupidatat mollit irure
          sit.
          <p />
          Enim fugiat ut ullamco ea non non enim velit. Irure dolor excepteur
          magna do anim dolor. Esse elit aute ad esse culpa sit esse adipisicing
          sunt ea ipsum. Veniam mollit Lorem qui mollit. Sint duis cupidatat
          minim eu eu consequat. Ipsum consequat Lorem voluptate laborum enim
          in. Occaecat Lorem nostrud veniam do in veniam reprehenderit qui.
        </div>
      </div>
    </>
  );
};

export default HomeAbout;
