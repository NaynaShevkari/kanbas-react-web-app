
import { useParams } from "react-router";
import { assignments, enrollments, grades, users } from "../../Database";
import { FaFileImport, FaFileExport, FaSearch, FaCaretDown } from "react-icons/fa";
import { CiFilter, CiSettings } from "react-icons/ci";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function Grades() {
    const { cid } = useParams();
    const enrolledStudents = enrollments.filter((enrollment) => enrollment.course === cid);
    const students = enrolledStudents.map((enrollment) => users.find((user) => user._id === enrollment.user));
    const courseAssignments = assignments.filter((assignment) => assignment.course === cid);
    const studentsWithGrades = students.map((student) => {
        const studentGrades = courseAssignments.map((assignment) => {
            const studentGrade = grades.find((grade) => grade.assignment === assignment._id && grade.student === student?._id);
            return studentGrade ? studentGrade.grade : "N/A";
        });
        return {
            ...student,
            grades: studentGrades
        };
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <div className="btn-group float-end">
                        <button type="button" className="btn btn-light">
                            <CiSettings className="fs-4" />
                        </button>
                        <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown">
                            <FaFileExport className="me-1" /> Export
                        </button>
                        <button type="button" className="btn btn-light">
                            <FaFileImport className="me-1" /> Import
                        </button>
                    </div>
                    <br /><br />
                    <div className="row mb-3">
                        <div className="col-md-6">
                            <h6><strong>Student Names</strong></h6>
                            <div className="input-group">
                                <span className="input-group-text"><FaSearch /></span>
                                <input type="text" className="form-control" placeholder="Search Students" />
                                <span className="input-group-text"><FaCaretDown /></span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h6><strong>Assignment Names</strong></h6>
                            <div className="input-group">
                                <span className="input-group-text"><FaSearch /></span>
                                <select className="form-select" id="assignment-select">
                                    <option value="" selected disabled>Search Assignments</option>
                                    {courseAssignments.map((assignment) => (
                                        <option key={assignment._id} value={assignment._id}>
                                            {assignment.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-light mb-3" style={{ width: "20%" }}>
                        <CiFilter className="me-1" /> Apply Filters
                    </button>
                    <div className="table-responsive mb-3">
                        <table className="table table-striped table-bordered w-100">
                            <thead>
                                <tr>
                                    <th scope="col" className="w-20">Student Name</th>
                                    {courseAssignments.map((assignment) => (
                                        <th key={assignment._id} scope="col" className="text-center">
                                            {assignment.title}<br />
                                            Out of {assignment.points}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {studentsWithGrades.map((student) => (
                                    <tr key={student._id}>
                                        <th scope="row" className="text-danger">{student.firstName + " " + student.lastName}</th>
                                        {student.grades.map((grade, index) => (
                                            <td key={index} className="text-center">{grade}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <br /><br /><br /><br /><br /><br /><br />
                    </div>
                </div>
            </div>
        </div>
    );
}
