import React from 'react'
import { Document, Page } from 'react-pdf';
import ResumePdf from '../../pdfs/CB.pdf'

const Resume = () => {
    return (
        <div>
            <Document file={ResumePdf}>
                <Page/>
            </Document>
            
        </div>
    )
}

export default Resume




