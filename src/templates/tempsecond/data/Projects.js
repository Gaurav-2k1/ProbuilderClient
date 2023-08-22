import powerbi from '../assets/project/Power-BI-Dashboard.png'
import bi from '../assets/project/po.png'
import p from '../assets/project/birep.png'
import sq from '../assets/project/ser.jpg'
const projects = [
    {
        id: 1,
        company: "PricewaterhouseCoopers Accelerations Center, Bangalore",
        url: powerbi,
        projectDetail: {
            name: "ETS COI",
            Duration: "Aug 2021 - Till Date",
            Tools: ": Power BI Desktop, Alteryx, SSIS, SSMS, Oracle SQL Developer, Jira, Share Point",
            Database: "Oracle SQL Server",
            Language: "SQL, DAX, M-Query",
            Cloud: "Power BI Service,SharePoint,Confluence"
        },
        Roles: [
            "Responsible for development of interactive reports as per requirement.",
            "Used different kind of visualization and charts to build interactive reports.",
            "RLS and Bookmark implementation.",
            "Worked on Power Query Editor in terms of Data modelling.",
            "Ingested the data in Import and Direct query mode from different table, views,SharePoint Folder and Online Jira tool for creating the report.",
            "Writing DAX query to create measures and calculations to use them in different visualization"
        ]
    },
    {
        id: 2,
        company: "Capgemini Ltd, Mumbai,Maharashtra",
        url: bi,
        projectDetail: {
            name: "Athena Fast track",
            Duration: "Feb 2020 – July 2021",
            Tools: "SSIS, Power BI Desktop, SSMS",
            Database: "SQL Server",
            Language: "SQL/PLSQL",
            Cloud: "Power BI Service,Share Point"
        },
        Roles: [
            "As ETL Developer designed and implemented three Use cases.",
            "Developed SSIS packages for loading the data from multiple sources like SQL server and flat files; Business logic for data validation and transformation followed by creation of reporting views Unit testing, end to end integration testing and UAT.",
            "Responsible for development of interactive reports/ dashboards and  publishing on power bi service"
        ]
    },
    {
        id: 3,
        company: "Majesco Solution India Ltd, Mumbai,Maharashtra",
        url: p,
        projectDetail: {
            name: "Bulk Reserves",
            Duration: "Dec 2018- Dec 2019",
            Tools: "SSIS, Power BI Desktop, SSMS",
            Database: "SQL Server",
            Language: "SQL/PLSQL",
            Cloud: "Power BI Service,Share Point"
        },
        Roles: [
            "Analyze the requirement provided through client to calculate the Bulk Reserve for different Allocation Bases.(i.e.Stat, IBNR)",
            "Create the SSIS packages for doing the calculation of Bulk Reserve based on the User Interface request and load the calculated BulkReserve amountinto a Data Warehouse Fact table."
        ]
    },
    {
        id: 4,
        company: "Hexaware Technologies Ltd, Mumbai,Maharashtra",
        url: sq,
        projectDetail: {
            name: "Trustmark, Chicago",
            Duration: "Mar 2016- Dec 2018",
            Tools: "SSIS, SSMS",
            Database: "SQL Server",
            Language: "SQL/PLSQL",
            Cloud: ""
        },
        Roles: [
            "Detailed mapping design specification, interface design specification documents.",
            "Database development in SQL - Create Staging area tables, Create Lookup tables, Create Final output table for interfaces / modules assigned.",
            "Build automated ETL processing system which will perform: Import data from Excel, Apply Transformation"
        ]
    },

]


export default projects;