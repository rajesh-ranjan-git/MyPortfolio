import { Fade } from "react-awesome-reveal";
import { ExpCard } from "../../Components/ExpCard/Cards";
import HomeContent from "../HomeContent/HomeContent";
import "./Experience.scss";
import newNTT from "../../Assets/Companies/ntt_new.jpeg";
import oldNTT from "../../Assets/Companies/ntt_old.png";
import ie from "../../Assets/Companies/ie.jpeg";
import dws from "../../Assets/Companies/dws.jpeg";

export default function Experience() {
  return (
    <HomeContent id="experience" class="experience">
      <h2 className="h3 section-title">Experience</h2>
      <Fade direction="bottom" duration={2000} triggerOnce>
        <div className="timeline">
          <div className="timeline_container right">
            <div className="content">
              <ExpCard
                role="Analyst |"
                img_path={newNTT}
                period="February 2023 - Present"
                company="NTT Data Services"
                data={[
                  "Developed highly interactive Front end / User Interfaces for web based applications",
                  "Developed online ecommerce websites and applications using the MERN stack.",
                  "Handling the day to day issues and fine tuning the applications for enhanced performance.",
                  "Tech Stack: - MongoDB, Express.js, React.js, Node.js, REST, Tailwind CSS",
                ]}
              />
            </div>
          </div>

          <div className="timeline_container left">
            <div className="content">
              <ExpCard
                role="Senior Associate |"
                img_path={newNTT}
                period="January 2021 - February 2023"
                company="NTT Data Services"
                data={[
                  "Backup Tech Lead",
                  "Mentor",
                  "Queue Manager",
                  "MS Excel and Power BI reporting",
                  "ServiceNow Reporting",
                  "Scrubbing",
                ]}
              />
            </div>
          </div>

          <div className="timeline_container right">
            <div className="content">
              <ExpCard
                role="Associate |"
                img_path={oldNTT}
                company="NTT Data Services"
                period="October 2020 - January 2021"
                data={[
                  "Queue Manager",
                  "MS Excel and Power BI reporting",
                  "ServiceNow Reporting",
                  "Scrubbing",
                ]}
              />
            </div>
          </div>

          <div className="timeline_container left">
            <div className="content">
              <ExpCard
                role="Assistant Exceutive |"
                img_path={ie}
                company="iEnergizers IT Services Pvt. Ltd."
                period="August 2018 - October 2020"
                data={[
                  "Game moderation for EA Sports",
                  "Audio moderation for EA Sports",
                  "Video moderation for EA Sports",
                  "Game moderation for Roblox",
                  "Audio moderation for Roblox",
                  "Video moderation for Roblox",
                ]}
              />
            </div>
          </div>
          <div className="timeline_container right">
            <div className="content">
              <ExpCard
                role="Tech Intern |"
                img_path={dws}
                company="Digital Web Solutions Pvt. Ltd."
                period="March 2017 - May 2017"
                data={[
                  "Developed highly interactive Front end / User Interfaces for web based applications",
                  "Developed numerous landing pages using HTML, CSS, Javascript.",
                  "Tech Stack: - HTML, CSS, Javascript, Bootstrap, PHP, Wordpress",
                ]}
              />
            </div>
          </div>
        </div>
      </Fade>
    </HomeContent>
  );
}
