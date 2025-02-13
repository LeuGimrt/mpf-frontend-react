import React,{useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { endP } from "@settings/config";
import { fetchData } from "@utils/fetchData";
import { putData } from "@utils/putData";
import { useForm } from 'react-hook-form';

// st. Proin et mauris ligula. Ut pretium ligula nec lorem commodo, vitae mo
export default function EditCourseDialog(props) {
  const {courseId,courseUpdated,setCourseUpdated,headers,onClose,openEditCourse } = props;
  const [obj,setObj]=useState([]);
  const {register,handleSubmit,reset} = useForm();
  const [courseUpdatedDialog,setCourseUpdatedDialog]=useState(0);

  // onvallis urna in tristique. Ut id risus sapien. Morbi facilisis mattis tempus. Aenean ut molestie
  const resetState=async ()=>{
    await setCourseUpdated(courseUpdated+1);
    await setCourseUpdatedDialog(courseUpdatedDialog+1);
  }
  // um, ligula ante aliquam elit, in maximus nisi lectus sit amet massa. Sed euismod faucibus lacus sed congue. Quisque et massa purus. Sed placerat arcu eget quam sodales finibus. Vestibulum vitae rutrum leo, auct
  const onSubmit = (data,e) => {
    e.preventDefault();
    var nameObj=e.target[0].value;
    var descriptionObj=e.target[1].value;
    if(e.target[0].value===''){
      nameObj=obj.name;
    }
    if(e.target[1].value===''){
      descriptionObj=obj.description;
    }
    putData(endP({courseId:courseId}).editCourse,{name:nameObj,description:descriptionObj},headers);
    console.log(nameObj);
    console.log(descriptionObj);
    e.target[0].value='';
    e.target[1].value='';
    e.target[0].placeholder=nameObj;
    e.target[1].placeholder=descriptionObj;
    reset();
    resetState();
    onClose();
  };
  
  // m. Nam porta rhoncus nunc, sed tincidunt justo gravida eu. Sed vitae ullamcorper elit, quis vulpu
  useEffect(() => {
    fetchData(endP({courseId:courseId}).getCourse, setObj);
  },[courseUpdatedDialog, courseId]);

  // que dolor felis, aliquam at condimentum luctus, blandit sit amet augue. Suspendiss
  return (
    <div>
      <Dialog open={openEditCourse} onClose={onClose} aria-labelledby="form-dialog-title">
        <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle id="form-dialog-title">Editar Curso</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Ya que usted es creador, tiene la opción de editar el nombre de la clase  y asunto del curso.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            {...register('name')}
            label="Nombre de la clase"
            type="text"
            fullWidth
            placeholder={obj.name}           
          />
          <TextField
            autoFocus
            margin="dense"
            {...register('description')}
            label="Asunto"
            type="text"
            fullWidth
            placeholder={obj.description}            
          />
        </DialogContent>       
    
        <DialogActions>  
          <Button onClick={onClose} color="primary">
            Cancelar
          </Button>
          <Button type="submit" color="primary">
            Editar
          </Button>
        </DialogActions>
        </form> 
      </Dialog>
    </div>
  );
}