import React from 'react';
import { FaFileImport } from "react-icons/fa6";
import { FaFileExport } from "react-icons/fa6";
import { CiFilter } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { FaSearch, FaCaretDown } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  LiaCogSolid } from 'react-icons/lia';
export default function Grades() {
  return (
    <div className="container-fluid">
  <div className="row">
    <div className="col-md-8 offset-md-2">
    <div className="btn-group ml-2 d-inline me-1 float-end">
          <button type="button" className="btn btn-light mr-2">
          <CiSettings className="fs-4" />
          </button>
          </div>
    <div className="btn-group ml-2 dropdown d-inline me-1 float-end">
            <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <FaFileExport className="mr-1" /> Export
            </button>
        </div>
        
        <div className="btn-group ml-2 d-inline me-1 float-end">
          <button type="button" className="btn btn-light mr-2">
          <FaFileImport  className="mr-1" /> Import
          </button>

          
          </div>
          <br/><br/>
          
            <div className="row">
                <div className="col-md-6">
                    <h6><b>Student Names</b></h6>
                    <div className="input-group">
                        <span className="input-group-text"><FaSearch /> </span>
                        <input placeholder="Search Students" type="text" className="form-control" />
                        <span className="input-group-text"><FaCaretDown /></span>
                    </div>
                    
                </div>
                <div className="col-md-6">
                    <h6><b>Assignment Names</b></h6>
                    <div className="input-group">
                        <span className="input-group-text"><FaSearch /> </span>
                        <input placeholder="Search Assignments" type="text" className="form-control" />
                        <span className="input-group-text"><FaCaretDown /></span>
                    </div>
                    
                </div>
            </div>
            
        <div><br/>
                <button type="button" className="btn btn-light ml-2 " style={{ width: "20%" }}>
                <CiFilter className="mr-1" /> Apply Filters
                </button>
              </div><br/>
      
      <div className="table-responsive col-lg mb-3">
        <table className="table-striped table table-bordered mx-0 w-100">
          <thead>
            <tr>
              <th className="col">Student Name</th>
              <td scope = "col"className="col text-center">A1 SETUP<h6>out of 100</h6></td>
              <td scope = "col"  className="col text-center">A2 HTML<h6>out of 100</h6></td>
              <td scope = "col"className="col text-center">A3 CSS<h6>out of 100</h6></td>
              <td scope = "col" className=" col text-center">A4 BOOTSTRAP<h6>out of 100</h6></td>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td className="text-danger col">Jene Adams</td>
              <td className="text-center col">100%</td>
              <td className="text-center col">96.67%</td>
              <td className="text-center col">92.18%</td>
              <td className="text-center col">66.22%</td>
            </tr>
            <tr>
              <td className="text-danger col">Christina Allen</td>
              <td className="text-center col">100%</td>
              <td className="text-center col">100%</td>
              <td className="text-center col">100%</td>
              <td className="text-center col">100%</td>
            </tr>
            <tr>
              <td className="text-danger  col">Samreen Ansari</td>
              <td className="text-center  col">100%</td>
              <td className="text-center  col">100%</td>
              <td className="text-center  col">100%</td>
              <td className="text-center  col">100%</td>
            </tr>
            <tr>
              <td className="text-danger  col">Han Bao</td>
              <td className="text-center  col">100%</td>
              <td className="text-center  col">100%</td>
              <td className="text-center  col"><input type="text" className="form-control text-center" value="88.03"/></td>
              <td className="text-center  col">98.99%</td>
            </tr>
            <tr>
              <td className="text-danger  col">Mahi Sai Srinivas</td>
              <td className="text-center  col">100%</td>
              <td className="text-center  col">96.67%</td>
              <td className="text-center  col">98.37%</td>
              <td className="text-center  col">100%</td>
            </tr>
            <tr>
              <td className="text-danger col">Siran Cao</td>
              <td className="text-center col">100%</td>
              <td className="text-center col">100%</td>
              <td className="text-center col">100%</td>
              <td className="text-center col">100%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>


  );
}