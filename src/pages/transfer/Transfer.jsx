import React, { useState } from "react";
import Header from "../../components/header/Header";

import "./transfer.css";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DialogTitle from "@mui/material/DialogTitle";
import jsPDF from "jspdf";
import logo from "../../images/logo.png";
import  "jspdf-autotable";
import {
  ButtonGroup,
 Stack
  
} from "@mui/material";

const data=[
  {
    "collectionDate":"12-12-2021",
    "amount":12000,
    "service":"CBI",
    "bank_reference":125353663763,
    "mobicash_reference":1224255252

}
]

function Transfer() {

  const todaydate=new Date().toISOString().slice(0,10);
  const generatePdf= () => {
    const doc = new jsPDF();
    doc.addImage(logo, "JPEG", 20, 10, 50, 20);
    doc.setFont("Helvertica", "normal");
    doc.text("Mobicash Ltd", 20, 50);
    doc.text("Company Name: Mobicash", 20, 55);
    doc.text("Email: mobicash@reb.rw", 20, 60);
    doc.setFont("Helvertica", "normal");
    doc.text(`Date ${todaydate}`, 140, 65);
    doc.setFont("Helvertica", "bold");
    doc.text("List of Approved Transfer Report", 70, 75);
    const tableColumn = [
      "Collection Date",
      "Service",
      "Amount",
      "Bank Referance",
      "Mobicash Referance"
    ];
    const tableRows = [];

    data.map((d) => {

      const Data = [
        d.collectionDate,
        d.service,
        d.amount,
        d.bank_reference,
        d.mobicash_reference,
        
        // format(new Date(student.updated_at), "yyyy-MM-dd")
      ];
      tableRows.push(Data);
      
    });

    doc.autoTable(tableColumn, tableRows, {
      startY: 80,
      theme: "striped",
      margin: 10,
      styles: {
        font: "courier",
        fontSize: 12,
        overflow: "linebreak",
        cellPadding: 3,
        halign: "center",
      },
      head: [tableColumn],
      body: [tableRows],
    });
    const date = Date().split(" ");
    const dateStr = date[0] + date[1] + date[2] + date[3] + date[4];

    doc.save(`report_${dateStr}.pdf`);
  };
 
  return (
    <>
      <div className="home">
        <Header />
        
        <div className="tableDisplay">
          <DialogTitle>APPROVED TRANSFER</DialogTitle>
          <Box component="div" sx={{ display: "inline" }}>
              <Box>
                <div className="datecontent">
                  <Stack component="form" noValidate spacing={3}>
                  <ButtonGroup variant="text" aria-label="text button group">
                <Button onClick={generatePdf}>Generate PDF</Button>
                <Button>Generate CSV</Button>
              </ButtonGroup>
                  </Stack>
                </div>
              </Box>
            </Box>
          <TableContainer component={Paper}>
            <Table aria-label="caption table">
              <caption className="textTitle">Approved Data</caption>
              <TableHead>
                <TableRow>
                  <TableCell>DATE</TableCell>
                  <TableCell align="center">SERVICE</TableCell>
                  <TableCell align="center">AMOUNT</TableCell>
                  <TableCell align="center">BANK TRANSACTION</TableCell>
                  <TableCell align="center">STATUS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {/* {moment(row.collection_date).format("DD/MM/YYYY")} */}
                    12/107/2022
                  </TableCell>
                  <TableCell align="center">CBHI</TableCell>
                  <TableCell align="center">800000</TableCell>
                  <TableCell align="center">12837363636</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {/* {moment(row.collection_date).format("DD/MM/YYYY")} */}
                    1/107/2022
                  </TableCell>
                  <TableCell align="center">RRA</TableCell>
                  <TableCell align="center">900000</TableCell>
                  <TableCell align="center">122837363636</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default Transfer;
