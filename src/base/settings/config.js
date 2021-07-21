export const urls = {
  home: "/",
  login: "/login",
  register: "/register",
  cursos: "/cursos",
  calendario: "/calendario",
  grupos: "/grupos",
  config: "/configuracion",
};

export const courseUrls = {
  dashboard: "/dash",
  material: "/materiales",
  tareas: "/tareas",
  examenes: "/examenes",
  personas: "/personas",
};

export const endP = ({ courseId, userId, pubId, commentId, email, code, groupId }) => {
  console.log("endP commentId ", { courseId, userId, pubId, commentId });
  return {
    blockAllGroups: `/group/lock_all/${courseId}`,
    blockGroup: `/group/lock/${groupId}`,
    createCourse: "/course",
    createGroup: `/group/create/${courseId}/default`,
    createUser: "/user",
    delegateUser: `/course/${courseId}/delegate/${userId}`,
    enrollCourseByMail: `/course/${courseId}/enroll/by_email/${email}`,
    enrollMeByCode: `/course/${code}/enroll_me`,
    getInscriptions: `/course/${courseId}/inscriptions`,
    getCourse: `/course/${courseId}`,
    getCourses: "/course",
    getGroups: `/group/group/${courseId}`,
    getUser: `/user/${userId}`,
    getUsers: "/user",
    getComments: `/comment/publication/${pubId}`,
    getAnswers: `/comment/sub/${commentId}`,
    postAnnounce: `/publication/exam/${courseId}`,
    postAnswer: `/comment/${commentId}`,
    postComment: `/publication/${pubId}/comment`,
    postExam: `/publication/exam/${courseId}`,
    postMaterial: `/publication/material/${courseId}`,
    postTask: `/publication/assignment/${courseId}`,
  };
};
