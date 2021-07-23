import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";
import { useStyles } from "./_styles";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';

import useRedirectUrl from "@utils/useRedirectUrl";
import { endP } from "@settings/config";
import AddResourceDialog from "@components/CourseResources/AddResourceDialog";
import { useEffect } from "react";
import { fetchData } from "@utils/fetchData";
import useUserInfo from "@utils/useUserInfo";

function CourseNav({ courseId }) {
  const classes = useStyles();

  const [, redirectTo] = useRedirectUrl();

  const [, , isCreator] = useUserInfo();

  const nav = ["Anuncios", "Materiales", "Tareas", "Exámenes", "Personas"];
  const routes = ["dash", "materiales", "tareas", "examenes", "personas"];
  const [selectedTab, setSelectedTab] = useState(0);
  const [openAddMaterial, setOpenAddMaterial] = useState(false);
  const [course, setCourse] = useState({});

  const [hiddenButton, setHiddenButton] = useState(false);

  useEffect(() => {
    fetchData(endP({ courseId }).getCourse, setCourse);
  }, [courseId]);

  const handleClickOpenAddMaterial = () => {
    setOpenAddMaterial(true);
  };

  const handleChange = (event, newValue) => {
    redirectTo("/cursos/" + courseId + "/" + routes[newValue]);
    setSelectedTab(newValue);
  };

  useEffect(() => {
    isCreator(courseId).then((res) => setHiddenButton(!res));
  }, [isCreator, courseId]);

  return (
    <>
      <Grid container
            direction="row"
            
            alignItems="center" 
            spacing={2}>
        <Grid item >
        <Typography className={classes.courseTitle} variant='h3'>
          {course.name}
        </Typography>
        </Grid>
        <Grid item >
          <Button
            variant='contained'
            color='#b2ff59'
            startIcon={<EditIcon />}
          >
            Editar
          </Button>
        </Grid>
      </Grid>
      <Tabs value={selectedTab} onChange={handleChange}>
        {nav.map((item) => (
          <Tab disableRipple label={item} className={classes.tab} />
        ))}
        <Button
          hidden={hiddenButton}
          className={classes.buttonAddMaterial}
          onClick={handleClickOpenAddMaterial}
          variant='contained'
          color='#b2ff59'
        >
          <span style={{ "font-size": "20px", marginRight: "5px" }}>+</span>{" "}
          Nuevo Recurso
        </Button>
      </Tabs>
      <AddResourceDialog
        openAdd={openAddMaterial}
        setOpenAdd={setOpenAddMaterial}
      />
    </>
  );
}

export default CourseNav;
