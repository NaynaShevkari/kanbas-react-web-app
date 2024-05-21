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
      <label htmlFor="wd-select-Grade-Type"> Display Grade Type </label>
      <select id="wd-Grade-Type">
        <option value="Grade">Percentage</option>
        <option value="Grade">GPA</option>
      </select>
      </td>
      </tr>
      <br/>
      <tr>
      <td align="left" valign="top">
      <label htmlFor="wd-select-Submission-Type"> Submission Type </label>
      <select id="wd-Submission-Type">
        <option value="Submission">Online</option>
        <option value="Submission">Offline</option>
      </select>
      </td>
      </tr>
      <br/>
      <label>Online Entry Options</label><br/>

<input type="checkbox" name="Entry Option" id="wd-chkbox-text"/>
<label htmlFor="wd-chkbox-text">Text Entry</label><br/>

<input type="checkbox" name="Entry Option" id="wd-chkbox-website"/>
<label htmlFor="wd-chkbox-website">Website URL</label><br/>

<input type="checkbox" name="Entry Option" id="wd-chkbox-media"/>
<label htmlFor="wd-chkbox-media">Media Recordings</label><br/>

<input type="checkbox" name="Entry Option" id="wd-chkbox-annotation"/>
<label htmlFor="wd-chkbox-annotation">Student Annotation</label><br/>

<input type="checkbox" name="Entry Option" id="wd-chkbox-file"/>
<label htmlFor="wd-chkbox-file">File Uploads</label><br/><br/>

<label htmlFor="wd-text-fields-assign">Assign to </label><br/>
    <input id="wd-text-fields-assign" value="Everyone"  /> <br /><br/>

<label htmlFor="wd-text-fields-due"> Due </label><br/>
<input type="date"
      id="wd-text-fields-due"
      value="2024-06-05"/><br/><br/>

<label htmlFor="wd-text-fields-available"> Available From </label><br/>
<input type="date"
      id="wd-text-fields-available"
      value="2024-06-05"/><br/><br/>
  <label htmlFor="wd-text-fields-until"> Until </label><br/>
<input type="date"
      id="wd-text-fields-until"
      value="2024-06-05"/><br/>
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