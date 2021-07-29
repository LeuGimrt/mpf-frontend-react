import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import CoursesList from "@components/CoursesList/CoursesList";
import AddCourseDialog from "@components/CoursesList/AddCourseDialog";
import JoinCourseDialog from "@components/CoursesList/JoinCourseDialog";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import Course from "./Course";

import * as config from "@settings/config";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

// Modal component

import { Route } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles({
  wrapper: {
    padding: "15px 10px",
    display: "flex",
    justifyContent: "flex-end",
  },
  btn: {
    margin: "0 5px",
  },
});

function Courses() {
  const [openAdd, setOpenAdd] = useState(false);
  const [openJoin, setOpenJoin] = useState(false);
  const [openSBCreate, setOpenSBCreate] = useState(false);
  const [openSBJoin, setOpenSBJoin] = useState(false);

  const classes = useStyles();
  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };
  const handleClickOpenJoin = () => {
    setOpenJoin(true);
  };

  const handleCloseSBCreate = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSBCreate(false);
  };

  const handleCloseSBJoin = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSBJoin(false);
  };

  return (
    <>
      <Route exact path={config.urls.cursos}>
        <Container maxWidth='xl' className={classes.wrapper}>
          <Button
            className={classes.btn}
            variant='contained'
            color='secondary'
            onClick={handleClickOpenAdd}
          >
            Crear
          </Button>
          <Button
            className={classes.btn}
            variant='contained'
            color='secondary'
            onClick={handleClickOpenJoin}
          >
            Unirse
          </Button>
        </Container>

        <CoursesList statusDialog={openAdd} />
      </Route>
      <Route path={`${config.urls.cursos}/:courseId`}>
        <Course />
      </Route>

      <AddCourseDialog
        open={openAdd}
        setOpen={setOpenAdd}
        setOpenSB={setOpenSBCreate}
      />

      <Snackbar
        open={openSBCreate}
        autoHideDuration={3000}
        onClose={handleCloseSBCreate}
      >
        <Alert onClose={handleCloseSBCreate} severity='success'>
          Curso creado satisfactoriamente
        </Alert>
      </Snackbar>

      <JoinCourseDialog
        open={openJoin}
        setOpen={setOpenJoin}
        setOpenSB={setOpenSBJoin}
      />

      <Snackbar
        open={openSBJoin}
        autoHideDuration={3000}
        onClose={handleCloseSBJoin}
      >
        <Alert onClose={handleCloseSBJoin} severity='success'>
          Inscripción al curso satisfactoria
        </Alert>
      </Snackbar>
    </>
  );
}

export default Courses;
