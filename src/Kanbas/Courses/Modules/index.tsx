export default function Modules() {
    return (
      <div>
          <div>
        <button>Collapse ALL</button><span>&nbsp;</span>
        <button>View Progress</button><span>&nbsp;</span>
        <select id="wd-select-publish-all">
          <option value="PUBLISH ALL">Publish All</option>
        </select><span>&nbsp;</span>
        <button>+ Module</button>
        </div>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Learn what is Web Development</li>
                </ul>
                <li className="wd-lesson">
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Full Stack developer- Chapter 1 - Introduction</li>
                  <li className="wd-content-item">Full Stack developer- Chapter 2 - Creating Us</li>
                </ul>
                </li>
                <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">Creating an HTTP server with node.js</li>
                  <li className="wd-content-item">Creating a React Application</li>
                </ul>
                </li>
              </li>
            </ul>
          </li>
          <li className="wd-module">
            <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                  <li className="wd-content-item">Deploy the assignment to Netlify</li>
                </ul>
                <li className="wd-lesson">
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to HTML and the DOM</li>
                  <li className="wd-content-item">Formatting web content with headings and</li>
                  <li className="wd-content-item">Formatting content with lists and tables</li>
                </ul>
                </li>
              </li>
            </ul>
              </li>
            </ul>
      </div>
  );}
  