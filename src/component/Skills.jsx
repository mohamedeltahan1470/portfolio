import "./Skills.css";
import ProgressBar from "./ProgessBar";

const Skills = () => {
  const skillList = [
    { name: "HTML", ProgressEvent: 90, focus: " UI/UX Design" },
    { name: "CSS", ProgressEvent: 30, focus: "Responsive Design" },
    { name: "JavaScript", ProgressEvent: 70, focus: "Web Design" },
    { name: "React", ProgressEvent: 50, focus: "Moblie App Design" },
    { name: "PhotoShop", ProgressEvent: 90, focus: "" },
    { name: "AdobeXD", ProgressEvent: 70, focus: "" },
    { name: "Node.js", ProgressEvent: 40, focus: "" },
    { name: "WordPress", ProgressEvent: 20, focus: "" },
  ];

  return (
    <div className="skills">
      <div className="skills-text">
        <h2>Skills</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
          cumque blanditiis architecto
          <br /> natus neque tempora fugit, dolores iusto doloremque hic odit
          quae similique
          <br /> a sed in quibusdam odio laborum? Temporibus?
        </p>
      </div>
      <div className="skills-container">
        <div className="skills-list">
          <h3>My FOCUS</h3> <hr />
          <ul>
            {skillList.map((item, focus) => (
              <li key={focus}>{item.focus}</li>
            ))}
          </ul>
        </div>
        <div className="skills-list2">
          <ul >
            {skillList.map((item, index) => (
              <li key={index}>
                <div className="div1">{item.name}</div>
               <div> <ProgressBar progress={item.ProgressEvent} max={100} className="div2"/></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
