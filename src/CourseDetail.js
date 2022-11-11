import React from "react";
import PdfViewer from "./PdfViewer";
import PDF from "./abcd.pdf";
import "./App.css";
function CourseDetail() {
  


  return (
    
    <div className="content">
    <h1>Course</h1>
    <PdfViewer pdf={PDF} />
  </div>
  );
}

export default CourseDetail;
