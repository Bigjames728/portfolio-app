import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function removeTextLayerOffset() {
      const textLayers = document.querySelectorAll(
          '.react-pdf_Page_textContent'
      );
      textLayers.forEach((layer) => {
          const { style } = layer;
          style.top = '0';
          style.left = '0';
          style.transform = '';
      });
  }

  return (
    <div className="pdf">
      <Document file="Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} onLoadSuccess={removeTextLayerOffset} size="A4" />
      </Document>
        <div className="buttons">
            
                <button
                onClick={() => {
                    setPageNumber(pageNumber - 1);
                }}>Previous</button>
                <p>Page {pageNumber} of {numPages}</p>
                <button
                className="button"
                onClick={() => {
                    setPageNumber(pageNumber + 1);
                }}>Next</button>
                
        </div>
    </div>
  );
}

export default Resume;