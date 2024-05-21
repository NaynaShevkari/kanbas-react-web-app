export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
            <img src="/images/reactjs.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/TOC.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                TOC
              </a>
              <p className="wd-dashboard-course-title">
                Theory of Computation
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/cyber1.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                Cyber Security
              </a>
              <p className="wd-dashboard-course-title">
                Computer and Network protection
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/data1.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                Data Science
              </a>
              <p className="wd-dashboard-course-title">
                Data Insights, R, Python
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/AI.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                Artificial Intelligence
              </a>
              <p className="wd-dashboard-course-title">
                Artificial Intelligence
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/ml1.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                Meachine Learning
              </a>
              <p className="wd-dashboard-course-title">
                Meachine Learning
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
          <div className="wd-dashboard-course">
            <img src="/images/swe.jpg" width={200} />
            <div>
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home">
                Software Development
              </a>
              <p className="wd-dashboard-course-title">
              Software Development Lifecycle
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a>
            </div>
          </div>
        </div>
      </div>
  );}
  