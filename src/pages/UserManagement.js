import React from "react";
import { m } from "framer-motion";
import Page from "../components/Page";
import InsertDriveFileSharpIcon from "@mui/icons-material/InsertDriveFile";
import {
  Box,
  Button,
  Typography,
  styled,
  Breadcrumbs,
  Link,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

//----------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(6, 0, 0, 0),
}));

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, fName, lName, email, docID, action) {
  return { name, fName, lName, email, docID, action };
}

const rows = [
  createData(
    <Box sx={{ display: "flex" }}>
      <InsertDriveFileSharpIcon />
      breast
    </Box>,
    "Ann",
    "Anderson",
    "ann@gmail.com",
    "doc123",
    <Box>
      <Button variant="contained" size="small" color="success" href="#">
        {" "}
        Accept{" "}
      </Button>{" "}
      <Button variant="contained" size="small" color="error" href="#">
        {" "}
        Reject{" "}
      </Button>
    </Box>
  ),
];

//----------------------------------------------------------------

export default function UserManagement() {
  return (
    <Page title="User manegement">
      <ContentStyle>
        <m.div>
          <Typography variant="h3" paragraph>
            User Manegement
          </Typography>
        </m.div>
      </ContentStyle>

      <Box role="presentation" onClick={handleClick}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Dashboard
          </Link>
          <Typography color="text.primary">User Management</Typography>
        </Breadcrumbs>
      </Box>

      <TableContainer component={Paper} sx={{ paddingTop: "20px" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Document</StyledTableCell>
              <StyledTableCell align="left">Frist Name</StyledTableCell>
              <StyledTableCell align="left">Last Name</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Doctor Id</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.fName}</StyledTableCell>
                <StyledTableCell align="left">{row.lName}</StyledTableCell>
                <StyledTableCell align="left">{row.email}</StyledTableCell>
                <StyledTableCell align="left">{row.docID}</StyledTableCell>
                <StyledTableCell align="left">{row.action}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box style={{ textAlign: "right", padding: "20px" }}>
        <Button variant="contained" color="secondary" href="#">
          {" "}
          Save changes{" "}
        </Button>
      </Box>
    </Page>
  );
}
