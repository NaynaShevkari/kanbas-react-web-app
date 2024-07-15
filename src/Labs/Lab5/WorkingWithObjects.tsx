import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
      });
      const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`

      const [module, setModule] = useState({
        id: 1,
        name: "NodeJS module",
        description: "Create a NodeJS server with ExpressJS",
        course: "Web Dev"
      });
      const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`
    
  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      
      <h4>Modifying Properties</h4>
      <a id="wd-update-assignment-title"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
        Update Assignment Title
      </a>
      <input className="form-control w-75" id="wd-assignment-title"
        value={assignment.title} onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })}/><br/>

<a id="wd-update-assignment-score"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
        Update Assignment Score
      </a>
      <input className="form-control w-75" id="wd-assignment-score" type="number"
        value={assignment.score} onChange={(e) =>
          setAssignment({ ...assignment, score: Number(e.target.value) })}/><br/>

<a id="wd-update-assignment-completed"
         className="btn btn-primary float-end"
         href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
        Update Assignment Completion Status
      </a>
      <input type= "checkbox"
        value={' ' +assignment.completed} onChange={(e) =>
          setAssignment({ ...assignment, completed: Boolean(e.target.checked) })}/>
           Completed
<br/><br/>

      <a id="wd-update-module-name"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/name/${module.name}`}>
        Update Module Name
      </a>
      <input className="form-control w-75" id="wd-module-name"
        value={module.name} onChange={(e) =>
          setModule({ ...module, name: e.target.value })}/><br/>

      <a id="wd-update-module-description"
         className="btn btn-primary float-end"
         href={`${MODULE_API_URL}/description/${module.description}`}>
        Update Module Description
      </a>
      <input className="form-control w-75" id="wd-module-description"
        value={module.description} onChange={(e) =>
          setModule({ ...module, description: e.target.value })}/>
      <hr />

      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className="btn btn-primary me-3"
         href={`${REMOTE_SERVER}/lab5/assignment`}>
        Get Assignment
      </a>
      <a id="wd-retrieve-modules" className="btn btn-danger"
         href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a><hr/>
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary me-3"
         href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Assignment Title
      </a>
      <a id="wd-retrieve-module-name" className="btn btn-danger"
         href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Module Name
      </a><hr/>
    </div>
);}
