export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
        <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col"  style={{ width: "300px" }}>
          <div className="card">
            <img src="/images/reactjs.jpg" width={200} />
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
                style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title card-text">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home " className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img src="/images/TOC.jpg" width={228} />
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS2345 TOC
              </a>
              <p className="wd-dashboard-course-title card-text">
                Theory of Computation
              </p>
              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
            </div>
          </div>
          </div>

          <div className="wd-dashboard-course col" style={{ width: "300px" }}>
          <div className="card">
            <img src="/images/cyber1.jpg" width={215} />
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS3456 Cyber Security
              </a>
              <p className="wd-dashboard-course-title card-text">
                Computer and Network protection
              </p>
              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
            </div>
          </div>
          </div>


          <div className="wd-dashboard-course" style={{ width: "300px" }}>
          <div className="card">
            <img src="/images/data1.jpg" width={210} />
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS4567 Data Science
              </a>
              <p className="wd-dashboard-course-title card-text">
                Data Insights, R, Python
              </p>
              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
            </div>
          </div>
          </div>


          <div className="wd-dashboard-course" style={{ width: "300px" }}>
          <div className="card">
            <img src="/images/AI.jpg" width={165} />
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS5678 Artificial Intelligence
              </a>
              <p className="wd-dashboard-course-title card-text">
                Artificial Intelligence
              </p>
              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
            </div>
          </div>
          </div>

          <div className="wd-dashboard-course" style={{ width: "300px" }}>
          <div className="card">
            <img src="/images/ml1.jpg" width={220} />
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS6789 Meachine Learning
              </a>
              <p className="wd-dashboard-course-title card-text">
                Meachine Learning
              </p>
              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
            </div>
          </div>
          </div>

          <div className="wd-dashboard-course" style={{ width: "300px" }}>
          <div className="card">
            <img src="/images/swe.jpg" width={238} />
            <div className="card-body">
              <a className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home" style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                CS7890 Software Development
              </a>
              <p className="wd-dashboard-course-title card-text">
              Software Development Lifecycle
              </p>
              <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> Go </a>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
  );}
  