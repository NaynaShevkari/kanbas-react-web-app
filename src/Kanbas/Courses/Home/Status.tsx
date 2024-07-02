import React from 'react';
import { RiProhibited2Line } from "react-icons/ri";
import { BsCheckCircleFill } from "react-icons/bs";
import { IoDownloadOutline } from "react-icons/io5";
import { LiaFileImportSolid } from "react-icons/lia";
import { IoMdHome } from "react-icons/io";
import { RiBarChart2Fill } from "react-icons/ri";
import { TfiAnnouncement } from "react-icons/tfi";
import { IoMdNotifications } from "react-icons/io";

export default function CourseStatus() {
    return (
        <div id="wd-course-status" >
            <h2>Course Status</h2>
            <div className="d-flex">

            <div className="w-45 pe-1">
            <button className="btn btn-lg btn-secondary w-100 mt-1">
                  <RiProhibited2Line className="me-2 fs-6" />
                  Unpublish
            </button>
            </div>

            <div className="w-45">
            <button className="btn btn-lg btn-success w-100 mt-1w-100 mt-1">
                  <BsCheckCircleFill className="me-2 fs-6" />
                  Publish
            </button>
            </div>
            </div>
            <br/>


            <div className="list-group">
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                  <IoDownloadOutline className="me-2 fs-6" />
                  Import Existing Content
            </button>
            </div>  

            <div className="list-group">
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                  <LiaFileImportSolid className="me-2 fs-6" />
                  Import from Commons
            </button>
            </div> 

            <div className="list-group">
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                  <IoMdHome className="me-2 fs-6" />
                  Choose Home Page
            </button>
            </div>   

            <div className="list-group">
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                  <RiBarChart2Fill  className="me-2 fs-6" />
                  View Course Stream
            </button>
            </div> 

            <div className="list-group">
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                  <TfiAnnouncement  className="me-2 fs-6" />
                  New Announcement
            </button>
            </div>

            <div className="list-group">
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                  <RiBarChart2Fill className="me-2 fs-6" />
                  New Analytics
            </button>
            </div>

            <div className="list-group">
            <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
                  <IoMdNotifications  className="me-2 fs-6" />
                  View Course Notifications
            </button>
            </div>            
        </div>
    );
}
