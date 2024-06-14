import { FaPlus, FaSearch, FaCheck, FaRegAddressBook } from 'react-icons/fa';
import { BiSolidDownArrow } from "react-icons/bi";
import { BsGripVertical, BsPlus } from 'react-icons/bs';
import { IoEllipsisVertical } from "react-icons/io5";
import { PiNotePencilLight } from "react-icons/pi";
import LessonControlButtons from '../Modules/LessonControlButtons';
export default function Assignments() {
  return (
    <div id="wd-assignments" className="container active border border-0">
      <div className="d-flex align-items-center my-3 ">
        <div className="input-group ">
          <div className="input-group-text bg-white"><FaSearch /></div>
          <input type="text" className="form-control" placeholder="Search for Assignments" />
        </div>
        <div className="d-flex">
          <button className="btn btn-outline-secondary me-2 d-flex align-items-center" style={{ marginLeft: '150px' }}>
            <FaPlus className="me-2 text-black" /> Group
          </button>
          <button className="btn btn-danger d-flex align-items-center">
            <FaPlus className="me-2 " />  Assignment
          </button>
        </div>
      </div>

      <li className="wd-module list-group p-0 mb-5 fs-5 border-gray ">
        <div className="wd-title p-3 ps-2 wd-bg-color-gray ">
          <div className="wd-title p-3 ps-1 wd-bg-color-gray w-100 d-flex align-items-center"
            style={{ justifyContent: "space-between" }}>
            <div >
              <h4>
                <BsGripVertical className="me-2 fs-3" />
                <BiSolidDownArrow className="me-2 fs-6" />
                <b>ASSIGNMENTS</b>
              </h4> 
              </div>
            <div className=" d-flex align-items-center">
              <div style={{
                border: "1px solid #c7cdd158",
                borderRadius: "25px",
                padding: "5px 10px",
                marginRight: "10px"
              }}>
                <label className="btn btn-outline-secondary me-2 align-items-center text-black">
                  40% of Total
                </label>
              </div>
              <BsPlus className="fs-4 me-2" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
        </div>
        <ul  className="wd-lessons list-group">
          <li className="wd-lesson list-group-item">
            <div className=" d-flex align-items-center" style={{ justifyContent: "space-between" }}>
              <div className=" d-flex align-items-center">
                <BsGripVertical className="me-1 fs-2" />
                <PiNotePencilLight color="Green" className="me-3 fs-3" style={{ marginRight: "25px" }} />
                <div className="list-group fs- rounded-5 ">
                  <a className="wd-assignment-link" 
                    href="#/Kanbas/Courses/1234/Assignments/123">
                    <b>A1</b>
                  </a>
                  <p> <span className="text-danger">
                    Multiple Modules </span>| <b>Not available until</b> May 8 at 11:59pm&nbsp;|<br /><b>Due&nbsp;</b>May 22 at 11:59pm&nbsp;|&nbsp;100 pts</p>
                </div></div> <LessonControlButtons /></div>
          </li>
        </ul>

        <ul className="wd-assignments-a2 list-group">
          <li className="wd-assignments-list list-group-item">
            <div className=" d-flex align-items-center" style={{ justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <BsGripVertical className="me-1 fs-2" />
                <PiNotePencilLight   color="Green" className="me-3 fs-3" style={{ marginRight: "25px" }} />
                <div>
                  <a className="wd-assignment-link"
                    href="#/Kanbas/Courses/1234/Assignments/123" >
                    <b>A2</b>
                  </a>
                  <p> <span className="text-danger">
                    Multiple Modules </span>| <b>Not available until</b> May 22 at 11:59pm&nbsp;|<br /><b>Due&nbsp;</b>June 5 at 11:59pm&nbsp;|&nbsp;100 pts</p>
                </div></div> <LessonControlButtons /></div>

          </li>
        </ul>

        <ul className="wd-assignments-a3 list-group">
          <li className="wd-assignments-list list-group-item">
            <div className=" d-flex align-items-center" style={{ justifyContent: "space-between" }}>
              <div className=" d-flex align-items-center">
                <BsGripVertical className="me-1 fs-2" />
                <PiNotePencilLight    color="Green" className="me-3 fs-3" style={{ marginRight: "55px" }} />
                <div>
                  <a className="wd-assignment-link"
                    href="#/Kanbas/Courses/1234/Assignments/123" >
                    <b>A3</b>
                  </a>
                  <p> <span className="text-danger">
                    Multiple Modules </span>| <b>Not available until</b> June 5 at 11:59pm&nbsp;|<br /><b>Due&nbsp;</b>June 19 at 11:59pm&nbsp;|&nbsp;100 pts</p>
                </div></div> <LessonControlButtons /></div>
          </li>
        </ul>
      </li>
      <br/><br/><br/>
      <br/>
      <br/>
    </div>
  );
}