import React, { useState } from "react";
import Header from "../../components/header/Header";

import "./home.css";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import Input from "@mui/material/Input";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DialogTitle from "@mui/material/DialogTitle";
import * as XLSX from "xlsx";
import {
  ButtonGroup,
 Stack
  
} from "@mui/material";

function Home() {
  const [isSelected, setIsSelected] = useState(false);
  const [selectedFile, setSelectedFile] = useState();

  const uploadFile = async () => {
    

console.log("file name",selectedFile.name) 

  };
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };
  return (
    <>
      <div className="home">
        <Header />
        <Box>
          <label htmlFor="contained-button-file">
            <Input
              type="file"
              name="file"
              className="btn bg-primary"
              onChange={changeHandler}
              accept="image/*"
              id="contained-button-file"
              multiple
            />
            {isSelected ? (
              <div>
                <p style={{ color: "green", padding: "5px" }}>
                  Filename: {selectedFile.name}
                </p>
              </div>
            ) : (
              <p></p>
            )}
            </label>
            <Button variant="contained" component="span" onClick={uploadFile}>
              Upload
            </Button>
        
        </Box>
        <div className="tableDisplay">
          <DialogTitle>DATA FROM UPLOADED FILE</DialogTitle>
          <Box component="div" sx={{ display: "inline" }}>
              <Box>
                <div className="datecontent">
                  <Stack component="form" noValidate spacing={3}>
                  <ButtonGroup variant="outlined" aria-label="text button group">
                <Button>Initiate</Button>
              </ButtonGroup>
                  </Stack>
                </div>
              </Box>
            </Box>
          <TableContainer component={Paper}>
            <Table aria-label="caption table">
              <caption className="textTitle">Data from uploaded file</caption>
              <TableHead>
                <TableRow>
                  <TableCell>DATE</TableCell>
                  <TableCell align="center">SERVICE</TableCell>
                  <TableCell align="center">AMOUNT</TableCell>
                  <TableCell align="center">MOBICASH REFERANCE</TableCell>
                  <TableCell align="center">BANK REFERANCE</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    {/* {moment(row.collection_date).format("DD/MM/YYYY")} */}
                    12/107/2022
                  </TableCell>
                  <TableCell align="center">CBHI</TableCell>
                  <TableCell align="center">800000 Rwf</TableCell>
                  <TableCell align="center">12837363636</TableCell>
                  <TableCell align="center">22835262782</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
}

export default Home;
