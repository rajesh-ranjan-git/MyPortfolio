import "./Skills.scss";
import { SkillsSvgs } from "./SkillsSvgs";

export default function Skills() {
  const elemToggleFunc = (elem) => {
    elem.classList.toggle("active");
  };

  const skillsToggle = () => {
    const toggleBtnBox = document.querySelector("[data-toggle-box]");
    const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
    const skillsBox = document.querySelector("[data-skills-box]");
    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) {
      elemToggleFunc(toggleBtns[i]);
    }
    elemToggleFunc(skillsBox);
  };

  return (
    <div className="skills" id="skills">
      <div className="skills-content section-content">
        <h2 className="h3 section-title">
          What My Programming Skills Includes?
        </h2>

        <p className="section-text">
          I develop simple, intuitive and responsive applications that helps
          users get things done with less effort and time.
        </p>

        <div className="skills-toggle" data-toggle-box>
          <button
            className="toggle-btn active"
            onClick={skillsToggle}
            data-toggle-btn
          >
            Skills
          </button>

          <button className="toggle-btn" onClick={skillsToggle} data-toggle-btn>
            Tools
          </button>
        </div>
      </div>

      <div className="skills-box" data-skills-box>
        <ul className="skills-list">
          <li>
            <div className="skill-card">
              <div className="tooltip">HTML5</div>

              <div className="card-icon">
                <img src={SkillsSvgs.html5} alt="HTML5 logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">CSS3</div>

              <div className="card-icon">
                <img src={SkillsSvgs.css3} alt="CSS3 logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">JavaScript</div>

              <div className="card-icon">
                <img src={SkillsSvgs.javascript} alt="JavaScript logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">TypeScript</div>

              <div className="card-icon">
                <img src={SkillsSvgs.typescript} alt="TypeScript logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Node-js</div>

              <div className="card-icon">
                <img src={SkillsSvgs.nodeJs} alt="Node Js logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Bootstrap</div>

              <div className="card-icon">
                <img src={SkillsSvgs.bootstrap} alt="Bootstrap logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">React JS</div>

              <div className="card-icon">
                <img src={SkillsSvgs.react} alt="React logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Ember</div>

              <div className="card-icon">
                <img src={SkillsSvgs.ember} alt="Ember logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Sass</div>

              <div className="card-icon">
                <img src={SkillsSvgs.sass} alt="Sass logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Next JS</div>

              <div className="card-icon">
                <img src={SkillsSvgs.nextjs} alt="NextJs logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Django</div>

              <div className="card-icon">
                <img src={SkillsSvgs.django} alt="Django logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Spring</div>

              <div className="card-icon">
                <img src={SkillsSvgs.spring} alt="Spring logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Remix-run</div>

              <div className="card-icon">
                <img src={SkillsSvgs.logoRemix} alt="Remix logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Android</div>

              <div className="card-icon">
                <img src={SkillsSvgs.android} alt="Android logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">IOS</div>

              <div className="card-icon">
                <img src={SkillsSvgs.ios} alt="IOS logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Flutter</div>

              <div className="card-icon">
                <img src={SkillsSvgs.flutter} alt="Flutter logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Shell scripting</div>

              <div className="card-icon">
                <img src={SkillsSvgs.bash} alt="Shell scripting logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">C</div>

              <div className="card-icon">
                <img src={SkillsSvgs.c} alt="C logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">C++</div>

              <div className="card-icon">
                <img src={SkillsSvgs.cpp} alt="C++ logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">C#</div>

              <div className="card-icon">
                <img src={SkillsSvgs.csharp} alt="C# logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Dart</div>

              <div className="card-icon">
                <img src={SkillsSvgs.dart} alt="Dart logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">PHP</div>

              <div className="card-icon">
                <img src={SkillsSvgs.php} alt="php logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Java</div>

              <div className="card-icon">
                <img src={SkillsSvgs.java} alt="Java logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Kotlin</div>

              <div className="card-icon">
                <img src={SkillsSvgs.kotlin} alt="Kotlin logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Python</div>

              <div className="card-icon">
                <img src={SkillsSvgs.python} alt="python logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Firebase</div>

              <div className="card-icon">
                <img src={SkillsSvgs.firebase} alt="Firebase logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Docker</div>

              <div className="card-icon">
                <img src={SkillsSvgs.docker} alt="Docker logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">kubernetes</div>

              <div className="card-icon">
                <img src={SkillsSvgs.kubernets} alt="kubernetes logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">MYSQL</div>

              <div className="card-icon">
                <img src={SkillsSvgs.mysql} alt="MYSQL logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">MongoDB</div>

              <div className="card-icon">
                <img src={SkillsSvgs.mongodb} alt="MongoDB logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">PostgreSQL</div>

              <div className="card-icon">
                <img src={SkillsSvgs.postgresql} alt="PostgreSQL logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Redis</div>

              <div className="card-icon">
                <img src={SkillsSvgs.redis} alt="Redis logo" />
              </div>
            </div>
          </li>
        </ul>

        <ul className="tools-list">
          <li>
            <div className="skill-card">
              <div className="tooltip">Adobe XD</div>

              <div className="card-icon">
                <img src={SkillsSvgs.adobeXd} alt="Adobe XD Effects logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Photoshop</div>

              <div className="card-icon">
                <img src={SkillsSvgs.adobePhotoshop} alt="Photoshop logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Illustrator</div>

              <div className="card-icon">
                <img src={SkillsSvgs.adobe} alt="Illustrator logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">AWS</div>

              <div className="card-icon">
                <img src={SkillsSvgs.amazonwebservices} alt="AWS logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Google Cloud</div>

              <div className="card-icon">
                <img src={SkillsSvgs.googleCloud} alt="Google Cloud logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">NPM</div>

              <div className="card-icon">
                <img src={SkillsSvgs.npm} alt="Npm logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Android Studio</div>

              <div className="card-icon">
                <img src={SkillsSvgs.androidStudio} alt="Android studio logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Visual Studio</div>

              <div className="card-icon">
                <img src={SkillsSvgs.visualstudio} alt="VS Code logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">VS Code</div>

              <div className="card-icon">
                <img src={SkillsSvgs.vsCode} alt="VS Code logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Atom</div>

              <div className="card-icon">
                <img src={SkillsSvgs.atom} alt="Atom logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Intellij</div>

              <div className="card-icon">
                <img src={SkillsSvgs.intellij} alt="Intellij logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Pycharm</div>

              <div className="card-icon">
                <img src={SkillsSvgs.pycharm} alt="Pycharm logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Unity</div>

              <div className="card-icon">
                <img src={SkillsSvgs.unity} alt="Unity logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Git</div>

              <div className="card-icon">
                <img src={SkillsSvgs.git} alt="Git logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Github</div>

              <div className="card-icon">
                <img src={SkillsSvgs.github} alt="Github logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Gitlab</div>

              <div className="card-icon">
                <img src={SkillsSvgs.gitlab} alt="Gitlab logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Packer</div>

              <div className="card-icon">
                <img src={SkillsSvgs.packer} alt="Packer logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Vagrant</div>

              <div className="card-icon">
                <img src={SkillsSvgs.vagrant} alt="Vagrant logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Slack</div>

              <div className="card-icon">
                <img src={SkillsSvgs.slack} alt="Slack logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Ubuntu</div>

              <div className="card-icon">
                <img src={SkillsSvgs.ubuntu} alt="Ubuntu logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Trello</div>

              <div className="card-icon">
                <img src={SkillsSvgs.trello} alt="Trello logo" />
              </div>
            </div>
          </li>

          <li>
            <div className="skill-card">
              <div className="tooltip">Postman</div>

              <div className="card-icon">
                <img src={SkillsSvgs.postman} alt="Postman logo" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
