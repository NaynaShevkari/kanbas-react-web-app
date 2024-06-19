// import { useParams } from "react-router";
// import { assignments } from "../../Database"; import { FaPlus, FaSearch, FaCheck, FaRegAddressBook } from 'react-icons/fa';
// import { BiSolidDownArrow } from "react-icons/bi";
// import { IoEllipsisVertical } from "react-icons/io5";
// import { BsGripVertical, BsPlus } from 'react-icons/bs';
// import { PiNotePencilLight } from "react-icons/pi";
// import LessonControlButtons from '../Modules/LessonControlButtons';
// export default function Assignments() {
//   const { cid } = useParams();
//   const assignmentList = assignments.filter((assignment) => assignment.course === cid);
//   return (
//     <div id="wd-assignments" className="container active border border-0">
//       <div className="d-flex align-items-center my-3 ">
//         <div className="input-group ">
//           <div className="input-group-text bg-white"><FaSearch /></div>
//           <input type="text" className="form-control" placeholder="Search for Assignments" />
//         </div>
//         <div className="d-flex">
//           <button className="btn btn-outline-secondary me-2 d-flex align-items-center" style={{ marginLeft: '150px' }}>
//             <FaPlus className="me-2 text-black" /> Group
//           </button>
//           <button className="btn btn-danger d-flex align-items-center">
//             <FaPlus className="me-2 " />  Assignment
//           </button>
//         </div>
//       </div>

//       <li className="wd-module list-group p-0 mb-5 fs-5 border-gray ">
//         <div className="wd-title p-3 ps-2 wd-bg-color-gray ">
//           <div className="wd-title p-3 ps-1 wd-bg-color-gray w-100 d-flex align-items-center"
//             style={{ justifyContent: "space-between" }}>
//             <div >
//               <h4>
//                 <BsGripVertical className="me-2 fs-3" />
//                 <BiSolidDownArrow className="me-2 fs-6" />
//                 <b>ASSIGNMENTS</b>
//               </h4>
//             </div>
//             <div className=" d-flex align-items-center">
//               <div style={{
//                 border: "1px solid #c7cdd158",
//                 borderRadius: "25px",
//                 padding: "5px 10px",
//                 marginRight: "10px"
//               }}>
//                 <label className="btn btn-outline-secondary me-2 align-items-center text-black">
//                   40% of Total
//                 </label>
//               </div>
//               <BsPlus className="fs-4 me-2" />
//               <IoEllipsisVertical className="fs-4" />
//             </div>
//           </div>
//         </div>
//       </li>
//       {
//         assignmentList && assignmentList.map((item) => (
//           <ul className="wd-lessons list-group rounded-0">
//             <li className="wd-assignment-list-item list-group-item p-3" style={{ borderLeft: "4px solid green" }}>
//               <div className="row align-items-center">
//                 <div className="col-auto">
//                   <BsGripVertical className="fs-3" />
//                 </div>
//                 <div className="col-auto">
//                   <PiNotePencilLight className="text-success fs-3" />
//                 </div>
//                 <div className="col">
//                   <a className="wd-assignment-link text-dark link-underline link-underline-opacity-0"
//                     href={`#/Kanbas/Courses/${cid}/Assignments/${item._id}`}>
//                     <h5><b>{item.title}</b></h5>
//                   </a>
//                   <p>
//                     <span className="text-danger"> Multiple Modules </span>
//                     | <b>Not available until</b> {item.available} | <b>Due</b> {item.due} | {item.points} pts
//                   </p>
//                 </div>
//                 <div className="col float-end">
//                   <LessonControlButtons />
//                 </div>
//               </div>
//             </li>
//           </ul>
//         ))
//       }

//       <br /><br /><br />
//       <br />
//       <br />
//     </div>
//   );
// }


import { useParams } from "react-router";
import { assignments } from "../../Database";
import { FaPlus, FaSearch } from 'react-icons/fa';
import { BiSolidDownArrow } from "react-icons/bi";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical, BsPlus } from 'react-icons/bs';
import { PiNotePencilLight } from "react-icons/pi";
import LessonControlButtons from '../Modules/LessonControlButtons';

export default function Assignments() {
  const { cid } = useParams();
  const assignmentList = assignments.filter(assignment => assignment.course === cid);

  return (
    <div id="wd-assignments" className="container active border border-0">
      <div className="d-flex align-items-center my-3">
        <div className="input-group">
          <div className="input-group-text bg-white"><FaSearch /></div>
          <input type="text" className="form-control" placeholder="Search for Assignments" />
        </div>
        <div className="ms-auto d-flex">
          <button className="btn btn-outline-secondary me-2 d-flex align-items-center">
            <FaPlus className="me-2 text-black" /> Group
          </button>
          <button className="btn btn-danger d-flex align-items-center">
            <FaPlus className="me-2" /> Assignment
          </button>
        </div>
      </div>

      <div className="list-group mb-5 fs-5 border-gray">
        <div className="list-group-item p-3 ps-2 bg-light">
          <div className="d-flex align-items-center justify-content-between">
            <h4 className="mb-0">
              <BsGripVertical className="me-2 fs-3" />
              <BiSolidDownArrow className="me-2 fs-6" />
              <b>ASSIGNMENTS</b>
            </h4>
            <div className="d-flex align-items-center">
              <div style={{
                border: "1px solid #c7cdd158",
                borderRadius: "25px",
                padding: "5px 10px",
                marginRight: "10px"
              }}>
                <span className="btn btn-outline-secondary me-2 text-black">
                  40% of Total
                </span>
              </div>
              <BsPlus className="fs-4 me-2" />
              <IoEllipsisVertical className="fs-4" />
            </div>
          </div>
        </div>
      </div>

      {assignmentList.map(item => (
        <div className="list-group rounded-0" key={item._id}>
          <div className="list-group-item p-3" style={{ borderLeft: "4px solid green" }}>
            <div className="row align-items-center">
              <div className="col-auto">
                <BsGripVertical className="fs-3" />
              </div>
              <div className="col-auto">
                <PiNotePencilLight className="text-success fs-3" />
              </div>
              <div className="col">             
                <a className="wd-assignment-link text-dark link-underline link-underline-opacity-0"
                    href={`#/Kanbas/Courses/${cid}/Assignments/${item._id}`}>
                    <h5><b>{item.title}</b></h5>
                  </a>
                <p className="mb-0">
                  <span className="text-danger">Multiple Modules</span> | 
                  <b> Not available until </b> {item.available} | 
                  <b> Due </b> {item.due} | 
                  {item.points} pts
                </p>
              </div>
              <div className="col ms-auto">
                <LessonControlButtons />
              </div>
            </div>
          </div>
        </div>
      ))}

<br /><br /><br /><br /><br /><br />
       <br />
     <br />
    </div>
  );
}
