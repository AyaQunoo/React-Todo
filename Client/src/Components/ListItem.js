// import TickIcon from './TickIcon'
import ProgressBar from './ProgressBar'
import { useState } from 'react'
import getData from "../utils/getData";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Modal from './Modal'
const ListItem = ({ task }) => {
    const [showModal, setShowModal] = useState(false)
    const deleteData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/todo/${task.id}`, {
                method: 'DELETE'
            })
            if (response.status === 200) {
                getData()
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div className="list-item">
            <div className="info-container">
                <p className='task-title'>{task.title}</p>
                <ProgressBar progress={task.progress} />
            </div>
            <div >
                <IconButton aria-label="edit" onClick={() => {
                    setShowModal(true)
                }}>
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" onClick={deleteData}>
                    <DeleteIcon />
                </IconButton>
            </div>
            {showModal && <Modal setShowModal={setShowModal} mode={'edit'} task={task} />}
        </div>
    );
}
export default ListItem;
