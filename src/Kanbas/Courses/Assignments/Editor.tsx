import { useLocation, useParams } from "react-router";
import { assignments } from "../../Database";
import { Link } from "react-router-dom";

export default function AssignmentEditor() {
    const { cid } = useParams();
    const { pathname } = useLocation();

    const assignmentId = pathname.split("/").pop();
    const currentAssignment = assignments.find(assignment => assignment._id === assignmentId);

    return (
        <div className="container">
            <div className="row mb-3">
                <label htmlFor="assignment-name" className="form-label"><h2>Assignment Name</h2></label>
                <input id="assignment-name" className="form-control" defaultValue={currentAssignment?.title} />
            </div>

            <div className="row mb-3">
                <textarea id="assignment-description" className="form-control" rows={10} defaultValue={currentAssignment?.description} />
            </div>

            <div className="row mb-3">
                <div className="col-md-6 text-end">
                    <label htmlFor="assignment-points" className="col-form-label">Points</label>
                </div>
                <div className="col-md-6">
                    <input id="assignment-points" type="number" className="form-control" defaultValue={currentAssignment?.points} />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6 text-end">
                    <label htmlFor="assignment-group" className="col-form-label">Assignment Group</label>
                </div>
                <div className="col-md-6">
                    <select id="assignment-group" className="form-select">
                        <option>ASSIGNMENTS</option>
                        <option>QUIZZES</option>
                        <option>EXAMS</option>
                        <option>PROJECT</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6 text-end">
                    <label htmlFor="grade-display" className="col-form-label">Display Grade as</label>
                </div>
                <div className="col-md-6">
                    <select id="grade-display" className="form-select">
                        <option>Percentage</option>
                        <option>Points</option>
                        <option>Complete/Incomplete</option>
                        <option>Letter Grade</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6 text-end">
                    <label htmlFor="submission-type" className="col-form-label">Submission Type</label>
                </div>
                <div className="col-md-6">
                    <div className="border p-2">
                        <select id="submission-type" className="form-select">
                            <option>Online</option>
                            <option>On Paper</option>
                            <option>No Submission</option>
                        </select>
                        <br />
                        <div>
                            <label><b>Online Entry Options</b></label>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="online-option-text" />
                                <label className="form-check-label" htmlFor="online-option-text">Text Entry</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="online-option-url" />
                                <label className="form-check-label" htmlFor="online-option-url">Website URL</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="online-option-media" />
                                <label className="form-check-label" htmlFor="online-option-media">Media Recordings</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="online-option-annotation" />
                                <label className="form-check-label" htmlFor="online-option-annotation">Student Annotation</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="online-option-file" />
                                <label className="form-check-label" htmlFor="online-option-file">File Uploads</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6 text-end">
                    <label htmlFor="assign-to" className="col-form-label">Assign</label>
                </div>
                <div className="col-md-6">
                    <div className="border p-2">
                        <label><b>Assign to</b></label>
                        <input id="assign-to" className="form-control" defaultValue="Everyone" />
                        <br />
                        <label><b>Due</b></label>
                        <input id="due-date" className="form-control" type="date" defaultValue={currentAssignment?.due} />
                        <br />
                        <div className="row">
                            <div className="col-md-6">
                                <label><b>Available from</b></label>
                                <input id="available-from" className="form-control" type="date" defaultValue={currentAssignment?.available} />
                            </div>
                            <div className="col-md-6">
                                <label><b>Until</b></label>
                                <input id="available-until" className="form-control" type="date" defaultValue="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <hr />
            </div>

            <div className="mb-2 text-end">
                <Link key={'save'} to={`/Kanbas/Courses/${cid}/Assignments`}>
                    <input type="button" className="btn btn-danger ms-2" value="Save" />
                </Link>
                <Link key={'cancel'} to={`/Kanbas/Courses/${cid}/Assignments`}>
                    <input type="button" className="btn btn-secondary ms-2" value="Cancel" />
                </Link>
            </div>

            <div className="row" style={{ height: '30px', width: '100%' }}></div>
        </div>
    )
}