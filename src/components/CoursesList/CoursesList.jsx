import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import CourseCard from "./CourseCard";
import Grid from "@material-ui/core/Grid";

import { fetchingData, getCoursesByEmail } from "@utils/fetchData";
import Loading from "@common/Loading";
import useUserInfo from "@utils/useUserInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#fff",
    "overflow-y": "auto",
  },
}));

export default function CoursesList() {
  const classes = useStyles();

  const [cursos, setCursos] = useState();
  const [isFetching, setIsFetching] = useState(true);

  const [cookies,,] = useUserInfo();

  useEffect(() => {
    //fetchingData("/course", setCursos, setIsFetching);
    console.log(cookies.name.email);
    getCoursesByEmail(cookies.name.email).then((e) => {
      console.log(e);
      setCursos(e);
      setIsFetching(false);
    });
    
    
    
  }, []);

  //TODO
  // Arreglar el marginBottom de cada fila de cursos (estrecharlo)

  return (
    <>
      {isFetching ? (
        <Loading />
      ) : (
        <Grid className={classes.root} container>
          {cursos &&
            cursos.map((curso) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={curso.id}>
                <CourseCard elem={curso} />
              </Grid>
            ))}
        </Grid>
      )}
    </>
  );
}
