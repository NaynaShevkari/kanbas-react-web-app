export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><h2>Assignment Name</h2></label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" rows={8} cols={50} >
      The assignment is available online.
      Submit a link to the landing page of your Web application running on Netlify.
      The landing page should include the following:
      Your full name and section
      Links to each of the lab assignments
      Link to the Kanbas application
      Links to all relevant source code repositories
      The Kanbas application should include a link to navigate back to the landing page.
      </textarea>
      <br />
      <table>
      <tr>
        <td align="left" valign="top">
          <label htmlFor="wd-points">Points </label>
          <input id="wd-points" value={100} />
        </td>
      </tr>
      <br/>
      <tr>
      <td align="left" valign="top">
      <label htmlFor="wd-group"> Assignment Group </label>
      <select id="wd-assignment">
        <option value="Assignmnets">Assignmnets</option>
        <option value="Assignmnets">A1</option>
        <option value="Assignmnets">A2</option>
        <option value="Assignmnets">A3</option>
      </select>
      </td>
      </tr>
      <br/>
      <tr>
      <td align="left" valign="top">
      <label htmlFor="wd-display-grade-as"> Display Grade Type </label>
      <select id="wd-display-grade-as">
        <option value="Grade">Percentage</option>
        <option value="Grade">GPA</option>
      </select>
      </td>
      </tr>
      <br/>
      <tr>
      <td align="left" valign="top">
      <label htmlFor="wd-submission-type"> Submission Type </label>
      <select id="wd-Submission-Type">
        <option value="Submission">Online</option>
        <option value="Submission">Offline</option>
      </select>
      </td>
      </tr>
      <br/>
      <label>Online Entry Options</label><br/>

<input type="checkbox" name="Entry Option" id="wd-text-entry"/>
<label htmlFor="wd-text-entry">Text Entry</label><br/>

<input type="checkbox" name="Entry Option" id="wd-website-url"/>
<label htmlFor="wd-website-url">Website URL</label><br/>

<input type="checkbox" name="Entry Option" id="wd-media-recordings"/>
<label htmlFor="wd-media-recordings">Media Recordings</label><br/>

<input type="checkbox" name="Entry Option" id="wd-student-annotation"/>
<label htmlFor="wd-student-annotation">Student Annotation</label><br/>

<input type="checkbox" name="Entry Option" id="wd-file-upload"/>
<label htmlFor="wd-file-upload">File Uploads</label><br/><br/>

<label htmlFor="wd-assign-to">Assign to </label><br/>
    <input id="wd-assign-to" value="Everyone"  /> <br /><br/>

<label htmlFor="wd-due-date"> Due </label><br/>
<input type="date"
      id="wd-due-date"
      value="2024-05-22"/><br/><br/>

<label htmlFor="wd-available-from"> Available From </label><br/>
<input type="date"
      id="wd-available-from"
      value="2024-08-05"/><br/><br/>
  <label htmlFor="wd-available-until"> Until </label><br/>
<input type="date"
      id="wd-available-until"
      value="2024-05-22"/><br/>
    </table>
    <div >
            <hr color="grey"/>
    </div> 

    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <button id="wd-cancel">
          Cancel
      </button>
      <span>&nbsp;</span>
      <button id="wd-save" type="button">
          Save
      </button>
      </div>
  </div>
);}