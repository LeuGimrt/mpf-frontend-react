import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import UsersList from "./UsersList";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  root: {
    margin: [[10, 5]],
  },
  header: {
    padding: [[8, 15]],
  },
  content: {
    padding: [[0, 8]],
    height: "280px",
    overflow: "auto",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
  },
});

function GroupCard({ users }) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardHeader className={classes.header} title='Grupo 1' />
        <Divider />
        <CardContent className={classes.content} disableSpacing>
          <UsersList users={users} />
        </CardContent>
        <Divider />
        <CardActions className={classes.actions} disableSpacing>
          <Button
            backgroundColor='#000000'
            variant='contained'
            color='secondary'
          >
            Unirme
          </Button>
          <Button
            backgroundColor='#000000'
            variant='contained'
            color='secondary'
          >
            Bloquear grupo
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default GroupCard;
