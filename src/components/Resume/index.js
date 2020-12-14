import React, { useState } from 'react';
import ResumePdf from '../../pdfs/Claire Bohlen Resume.pdf'
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';



const Resume = () => {
    
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
      }
   
    return (
        <div>
        <Document file = {ResumePdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>Page {pageNumber} of {numPages}</p>
      </div>
    )
}

export default Resume


   
    