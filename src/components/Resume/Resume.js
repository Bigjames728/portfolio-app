import React, { Component } from 'react'

import Profile from './Profile';
import AboutNew from './AboutNew';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m4 l3">
                        <Profile />
                    </div>
                    <div className="col s12 m8 l9">
                        <AboutNew />
                        <Education />
                        <Experience />
                        <Skills />
                    </div>
                </div>
            </div>
        )
    }
}




// import React, { useState } from 'react';
// import { Document, Page, pdfjs } from 'react-pdf';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // This allows the links inside the pdf to show up and be clickable
// // import resumePDF from '../../src/Resume.pdf';

// function Resume() {
//   const [numPages, setNumPages] = useState(null);
//   const [pageNumber, setPageNumber] = useState(1);

//   pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

//   function onDocumentLoadSuccess({ numPages }) {
//     setNumPages(numPages);
//   }

//   function removeTextLayerOffset() {
//       const textLayers = document.querySelectorAll(
//           '.react-pdf_Page_textContent'
//       );
//       textLayers.forEach((layer) => {
//           const { style } = layer;
//           style.top = '0';
//           style.left = '0';
//           style.transform = '';
//       });
//   }

//   return (
//     <div className="pdfContainer">
//       <Document file="Resume.pdf" onLoadSuccess={onDocumentLoadSuccess} className="pdfResponsive" >
//         <Page pageNumber={pageNumber} onLoadSuccess={removeTextLayerOffset} />
//       </Document>
//         <div className="buttons">
//             <button
//                 className="button--left"
//                 onClick={() => {
//                     setPageNumber(pageNumber - 1);
//                 }}>
//                 Previous
//             </button>
//             <p>Page {pageNumber} of {numPages}</p>
//             <button
//                 className="button--right"
//                 onClick={() => {
//                     setPageNumber(pageNumber + 1);
//                 }}>
//                 Next
//             </button>
//         </div>
//     </div>
//     // {/* <div className="pdfContainer" position="relative" display="block" width="95%">
//     //   <iframe src={`${resumePDF}#view=fitH`} title="James Fleming Resume" />
//     // </div> */}
//   );
// }

// export default Resume;