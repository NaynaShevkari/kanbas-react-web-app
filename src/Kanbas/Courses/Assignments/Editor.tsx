import "./Assignments.css"
export default function AssignmentEditor() {
  return (

    <div id="wd-assignments-editor" className="container">

      <div className="form-group row">
        <div >
          <div className="form-group">
            <label htmlFor="wd-name">
              <h2 className="text-right">Assignment Name</h2>
            </label>
            <input
              id="wd-name"
              className="form-control"
              value="A1"
            /><br></br>
          </div>
          <div className="form-group">
            <textarea
              id="wd-description"
              className="form-control"
              rows={6}
            >
              The assignment is available online
              Submit a link to the landing page of your web application
              runnung on Netlify.The landing page should incude the following:
              Your Full name and section links to each of the lab assignments
              Link to the Canbas application Links to all relevant source code repositories
              The kanbas application should include a link to navigate back to the landing page.
            </textarea>
          </div><br />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 text-end">
          <label className="mx-3">Points</label>
        </div>
        <div className="col-md-6">
          <input id="wd-points"
            className="form-control"
            value={100} />
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-md-6 text-end">
          <label className="mx-3">Assignment Group</label>
        </div>
        <div className="col-md-6">
          <select className="form-control form-select">
            <option>ASSIGNMENTS</option>
            <option>QUIZZES</option>
            <option>EXAMS</option>
            <option>PROJECT</option>
          </select>
        </div>
      </div>

      <br />

      <div className="row">
        <div className="col-md-6 text-end">
          <label>Display Grade as</label>
        </div>
        <div className="col-md-6">
          <select className="form-control form-select">
            <option>Percentage</option>
            <option>Points</option>
            <option>Complete/Incomplete</option>
            <option>Letter Grade</option>
          </select>
        </div>
      </div>
      <br />

      <div className="row">
        <div className="col-md-6 text-end">
          <label>Submission Type</label>
        </div>
        <div className="col-md-6">
          <div className="border p-2">
            <select className="form-control from-select">
              <option>Online</option>
              <option>On Paper</option>
              <option>No Submission</option>
            </select><br />

            <div className="row">
              <label><b>Online Entry Options</b></label>
              <div className="col-md-6">
                <input type="checkbox" id="wd-text-entry" />
                <label htmlFor="wd-text-entry" className="mx-1">Text Entry</label>
                <br />
                <input type="checkbox" id="wd-website-url" checked/>
                <label htmlFor="wd-website-url" className="mx-1">Website URL</label>
                <br />
                <input type="checkbox" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings" className="mx-1">Media Recordings</label>
                <br />
                <input type="checkbox" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation" className="mx-1">Student Annotation</label>
                <br />
                <input type="checkbox" id="wd-file-upload" />
                <label htmlFor="wd-file-upload" className="mx-1">File Uploads</label>

              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
      <br />
      <div className="row">
        <div className="col-md-6 text-end">
          <label>Assign</label>
        </div>
        <div className="col-md-6">
          <div className="border p-2">
            <label><b>Assign to</b></label>
            <br />
            <input className="form-control" value="Everyone" />
            <br />

            <label><b>Due</b></label>
            <input type="date" id="wd-due-date" value="2024-05-22"
              className="form-control"/>
            <br />
            
            <div className="row">
              <div className="col-md-6">
                <label><b>Available from</b></label>
                <input type="date" id="wd-available-from" value="2024-05-08"
                className="form-control"/>
              </div>

              <div className="col-md-6">
                <label><b>Until</b></label>
                <input type="date" id="wd-available-until" value="2024-05-22"
                className="form-control"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex">
        <div className="ms-auto">
          <button className="btn btn-danger ms-3 float-end">
            Save
          </button>
          <button
            className="btn btn-secondary float-end">
            Cancel
          </button>
        </div>
      </div><br />
    </div>
  );
}