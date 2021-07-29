import { Redirect, Route, useParams } from "react-router-dom";

import * as config from "@settings/config";
import CourseResources from "./CourseResources";
import CourseUsers from "./CourseUsers";
import CourseNav from "@layout/CourseNav";
import useUserInfo from "@utils/useUserInfo";

function Course() {
  let prefix = "/cursos/:id";
  const { courseId } = useParams();
  const [cookies, headers] = useUserInfo();
  const kinds = [
    {
      kind: "A",
      path: prefix + config.courseUrls.dashboard,
    },
    {
      kind: "M",
      path: prefix + config.courseUrls.material,
    },
    {
      kind: "T",
      path: prefix + config.courseUrls.tareas,
    },
    {
      kind: "E",
      path: prefix + config.courseUrls.examenes,
    },
    {
      path: prefix + config.courseUrls.personas,
      customComponent: <CourseUsers courseId={courseId} />,
    },
  ];

  return (
    <>
      {!cookies.name ? <Redirect to="/login" /> : <></>}
      <CourseNav courseId={courseId} />
      {/* TODO: Iterate!! */}
      <Redirect
        to={config.urls.cursos + "/" + courseId + config.courseUrls.dashboard}
      />

      {kinds.map((elem) => {
        if (elem.customComponent)
          return (
            <Route exact path={elem.path}>
              {elem.customComponent}
            </Route>
          );

        return (
          <Route exact path={elem.path}>
            <CourseResources kind={elem.kind} />
          </Route>
        );
      })}
    </>
  );
}

export default Course;
