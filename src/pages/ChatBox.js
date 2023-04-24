import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { IconButton, Typography } from "@mui/material";
import ListItemText from "@material-ui/core/ListItemText";
import { Icon } from "@iconify/react";
import Fab from "@material-ui/core/Fab";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import Page from "../components/Page";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#B3B6B7",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
  messageArea: {
    height: "70vh",
    overflowY: "auto",
    backgroundColor: "#FBD2FB",
  },
});

const ChatBox = () => {
  const classes = useStyles();

  return (
    <Page title="Chat Box">
      <Box>
        <Box sx={{ padding: "10px" }}>
          <IconButton>
            <ArrowCircleLeftOutlinedIcon />
          </IconButton>
        </Box>

        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-start"
        >
          <Grid item xs={10}>
            <Typography variant="h5" style={{ padding: "10px" }}>
              <Icon icon="teenyicons:chatbot-outline" inline={true} /> Hope
              World
            </Typography>

            <Item>
              <List className={classes.messageArea}>
                <ListItem>
                  <Grid item xs={5}>
                    <ListItemText
                      align="left"
                      primary="Hello, I'm Yeshi..."
                      style={{
                        backgroundColor: "#DE52DE",
                        padding: "10px",
                        borderRadius: "50px",
                      }}
                    />
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container justifyContent="flex-end">
                    <Grid item xs={5}>
                      <ListItemText
                        align="right"
                        primary="Hola"
                        style={{
                          backgroundColor: "#DE52DE",
                          padding: "10px",
                          borderRadius: "50px",
                        }}
                      ></ListItemText>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
              <Divider />
              <Grid
                container
                style={{ padding: "20px", backgroundColor: "#DA72DA" }}
              >
                <Grid item xs={11}>
                  <TextField
                    variant="filled"
                    label="Type Here......."
                    fullWidth
                    style={{ backgroundColor: "white", borderRadius: "5px" }}
                  />
                </Grid>
                <Grid xs={1} align="right">
                  <Fab color="secondary" aria-label="add">
                    <SendIcon />
                  </Fab>
                </Grid>
              </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

export default ChatBox;
