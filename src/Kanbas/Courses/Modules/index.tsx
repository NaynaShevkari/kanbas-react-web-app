import { BsGripVertical } from 'react-icons/bs';
import ModulesControls from './ModulesControls';
import LessonControlButtons from './LessonControlButtons';
import ModuleControlButtons from './ModuleControlButtons';
export default function Modules() {
  return (
    <div id="wd-modules">
      <ModulesControls /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
           <BsGripVertical className="me-2 fs-3" />
          <b>Week 1</b>
           <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
             <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">LEARNING OBJECTIVES</span>
               <LessonControlButtons />

               </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">Introduction to the course</span>
              <LessonControlButtons />

            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">Learn what is Web Development</span>
              <LessonControlButtons />

            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">LESSON 1</span>
              <LessonControlButtons />

              </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">LESSON 2</span>
              <LessonControlButtons />

            </li>
          </ul>
        </li>

        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-2 fs-3" />
          <b>Week 2</b>
          <ModuleControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <LessonControlButtons />

            </li>
            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">LESSON 1</span>
              <LessonControlButtons />
            </li>

            <li className="wd-lesson list-group-item p-3 ps-1">
            <BsGripVertical className="me-2 fs-3" />
              <span className="wd-title">LESSON 2</span>
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}