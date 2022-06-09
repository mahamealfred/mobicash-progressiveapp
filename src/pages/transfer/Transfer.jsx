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
import {
  ButtonGroup,
 Stack
  
} from "@mui/material";



function Transfer() {
 
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
                <Button>Generate PDF</Button>
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
