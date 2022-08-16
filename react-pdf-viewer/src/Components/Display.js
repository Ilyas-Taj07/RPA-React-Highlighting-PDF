import React, { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "../Styles/DisplayPDF.css"
import "@react-pdf-viewer/core/lib/styles/index.css"
import Highlight from "./Highlight";

export default function Display() {

    const filePdf = require("../Assets/Invoices.pdf")

    const [dimentions, setDimensions] = useState([0, 0, 0, 0])

    // const searchPattern = "63090013";


    // Example Methods
    const handleDimentions_63090013 = (e) => {
        if (e.target.checked) {
            setDimensions([426, 62, 18, 590])
        }
        else {
            setDimensions([0, 0, 0, 0])
        }
    }

    const handleDimentions_66021940 = (e) => {
        if (e.target.checked) {
            setDimensions([440, 62, 18, 590])
        }
        else {
            setDimensions([0, 0, 0, 0])
        }
    }

    return (
        <>

            {/* Example Code */}

            <div style={{ padding: "10px" }}>
                <input type={"checkbox"} onChange={handleDimentions_63090013} />
                <label> ID: 63090013</label>
                <br />
                <input type={"checkbox"} onChange={handleDimentions_66021940} />
                <label> ID: 66021940</label>

            </div>

            {/* Displaying PDF */}

            <div className="Display_PDF" >
                <Highlight
                    fromtop={dimentions[0]}
                    fromleft={dimentions[1]}
                    height={dimentions[2]}
                    width={dimentions[3]}
                />
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                    <Viewer
                        fileUrl={filePdf}
                        className="Display_File"
                    />
                </Worker>
            </div>
        </>
    )
}