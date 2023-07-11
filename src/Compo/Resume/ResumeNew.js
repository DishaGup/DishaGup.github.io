import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from '../../Assests/Disha_Gupta_Resume.pdf'
import resumeimg from '../../Assests/Disha_Gupta_Resume-1.png'
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const resumeLink ="https://drive.google.com/file/d/1OCOYLpZTUJtfit6cIrK7ZVbHAwBOXU3X/view?usp=sharing";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

const handleResume=()=>{
  window.open(resumeLink)
}



  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid id='myresume' className="resume-section">
       
        <Row style={{ justifyContent: "center", position: "relative" }}>
        
          <Button id="resume-button-no" onClick={handleResume}        >
                <a
                  id="resume-link-no"
                  href={pdf}
                  download="Disha_Gupta_Resume"
                  target="_blank"
                 // className={`${style.resumes} nav-link resume`}
                  rel="noreferrer"
                >
                  Resume 
                </a>
              </Button>
        </Row>

        <Row className="resume">
          <Document  file={pdf} >
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6}  />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
download={resumeLink}

            href={resumeLink}
            target="_blank"
           
            style={{ maxWidth: "350px" }}
          >
            Download Resume
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;