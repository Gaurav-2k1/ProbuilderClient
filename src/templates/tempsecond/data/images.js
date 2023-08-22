import power from '../assets/techstack/cloud/power.jpg';
// import redshift from '../assets/techstack/database/redshift.webp';
import sql from '../assets/techstack/database/sql.png';
import powerbi from '../assets/techstack/tools/powerbitool.png';
// import tableu from '../assets/techstack/tools/tableau.png';
// import dax from '../assets/techstack/tools/DAX.png';
import SSis from '../assets/techstack/tools/SSIS.png';
import azure from '../assets/techstack/cloud/azure.jpg';
import sp from '../assets/techstack/cloud/sharepoint.jpg';
import datalake from '../assets/techstack/cloud/datalake.png'
import oracle from '../assets/techstack/database/oracle.png'
import alterxy from "../assets/techstack/tools/alter.png"
import adf from "../assets/techstack/tools/adf.jpg"
import ssms from "../assets/techstack/tools/SSIS.png"
import java from "../assets/techstack/framework/java.png"
import c from "../assets/techstack/framework/c.png"
const stack = {
    Cloud: [
        {
            icon: power,
            name: " Power BI Service"
        },
        {
            icon: sp,
            name: "SharePoint"
        },
        {
            icon: azure,
            name: "File Blob Storage"
        },
        {
            icon: datalake,
            name: "Data Lake Storage"
        },

    ],
    Databases: [
        {
            icon: oracle,
            name: "Oracle SQL Developer"
        },
        {
            icon: sql,
            name: "SQL Server"
        },

    ],
    Tools: [
        {
            icon: powerbi,
            name: "Power BI"
        },
        {
            icon: SSis,
            name: "SSIS"
        },
        {
            icon: alterxy,
            name: "ALTERYX"
        },

        {
            icon: adf,
            name: "ADF"
        },
        {
            icon: ssms,
            name: "SSMS"
        },


    ],
    language: [
        {
            icon: java,
            name: "Core Java"
        },
        {
            icon: c,
            name: "C"
        },
    ]
}

export default stack;