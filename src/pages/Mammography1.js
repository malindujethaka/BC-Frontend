import { m } from "framer-motion";
// @mui
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography, Container, Box, Button } from "@mui/material";
// components
import Page from "../components/Page";
import NavbarVertical from "src/layouts/dashboard/navbar/NavbarVertical";

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(6, 0, 3, 0),
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

  "&:last-child td, &:last-child th": {
    border: 1,
  },
}));

function createData(name, Percentage_of_Mammograms, Percentage_of_US_Women) {
  return { name, Percentage_of_Mammograms, Percentage_of_US_Women };
}

const rows = [
  createData("White", 73.2, 67.0),
  createData("Black", 10.8, 12.2),
  createData("Asian or Pacific Island", 9.2, 5.2),
  createData("American Indian or Alaska Native", 0.3, 0.7),
  createData("Other or Mixed (2+ races)", 1.6, 1.3),
  createData("Hispanic", 4.9, 13.7),
];

// ----------------------------------------------------------------------

export default function Mammography1() {
  return (
    <Page title="Mammography 1">
      <Container>
        <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
          <m.div>
            <Typography variant="h3" paragraph>
              BCSC MAMOGRAPHY DATA
            </Typography>
          </m.div>
        </ContentStyle>

        <h4 style={{ padding: "20px" }}>
          MAMMOGRAMS BY RACE/ETHNICITY, 1996-2019{" "}
        </h4>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>
                  <b>Race/ETHNICITY </b>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <b>
                    {" "}
                    Percentage of <br /> Mammograms &nbsp; (%)
                  </b>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <b>
                    {" "}
                    Percentage of <br /> US Women &nbsp; (%)
                  </b>
                </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.Percentage_of_Mammograms}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.Percentage_of_US_Women}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box style={{ padding: "40px" }}>
          <p>
            {" "}
            This table shows the racial/ethnic distribution of 12,3616,149
            mammograms recorded in 1996-2019 from the 6 active BCSC sites. The
            BCSC's standardized questions for rance and ethinicity were asked in
            a similar manner as on the Us census in 2000 and 2010
          </p>{" "}
          <br />
          <p>
            The racial/ethnic distribution among 120.7 million US women age 18+
            years in 2010 is shown for comparison.
          </p>
          <br />
          <p>
            {" "}
            <strong>Note:</strong>
            <i>All categories are non-Hispanic except the Hispanic category</i>
          </p>
          <Box sx={{ textAlign: "center", padding: "10px" }}>
            <Button variant="contained" href="#">
              {" "}
              Join Now{" "}
            </Button>
          </Box>
        </Box>
      </Container>
    </Page>
  );
}
