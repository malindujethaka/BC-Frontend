import React from "react";
import { m } from "framer-motion";
import {
  styled,
  Box,
  Paper,
  Stack,
  IconButton,
  Badge,
  Typography,
  Breadcrumbs,
  Link,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import InsertDriveFileSharpIcon from "@mui/icons-material/InsertDriveFile";
import Page from "../components/Page";

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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));

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

function createData(name, btn1, btn2, btn3) {
  return { name, btn1, btn2, btn3 };
}

const rows = [
  createData(
    <Box sx={{ display: "flex" }}>
      <InsertDriveFileSharpIcon /> Discharge Details
      <Badge color="error" variant="dot" />
    </Box>,
    <Button variant="contained" size="small" color="secondary" href="#">
      {" "}
      View{" "}
    </Button>,
    <Button variant="contained" size="small" color="success" href="#">
      {" "}
      Update{" "}
    </Button>,
    <Button variant="contained" size="small" color="error" href="#">
      {" "}
      Delete{" "}
    </Button>
  ),
];

//----------------------------------------------------------------

export default function KnowledgeManagement() {
  return (
    <Page title="Knowledge Management">
      <Box sx={{ width: "100%" }}>
        <Stack spacing={2}>
          <Item sx={{ textAlign: "right" }}>
            <IconButton color="secondary">
              <Badge badgeContent={2} color="error">
                <NotificationsIcon fontSize="large" />
              </Badge>
            </IconButton>
            <IconButton color="secondary">
              <AccountCircleIcon fontSize="large" />
            </IconButton>
          </Item>

          <Item>
            <ContentStyle>
              <m.div>
                <Typography variant="h3" paragraph>
                  Knowledge Management
                </Typography>
              </m.div>
            </ContentStyle>

            <Box role="presentation" onClick={handleClick}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                  Dashboard
                </Link>
                <Typography color="text.primary">
                  {" "}
                  Knowledge Management
                </Typography>
              </Breadcrumbs>
            </Box>
          </Item>

          <Item>
            <TableContainer component={Paper} sx={{ paddingTop: "20px" }}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell align="left"></StyledTableCell>
                    <StyledTableCell align="left"></StyledTableCell>
                    <StyledTableCell align="left"></StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <StyledTableRow key={row.name}>
                      <StyledTableCell component="th" scope="row">
                        {row.name}
                      </StyledTableCell>
                      <StyledTableCell align="left">{row.btn1}</StyledTableCell>
                      <StyledTableCell align="left">{row.btn2}</StyledTableCell>
                      <StyledTableCell align="left">{row.btn3}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Item>
        </Stack>
      </Box>
    </Page>
  );
}
