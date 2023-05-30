import { useState } from "react";
import getData from "../utils/getData";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { Slider, TextField, Button, Container } from "@mui/material";
import '../App.css';
const Modal = ({ setShowModal, mode, task }) => {
    let editMode = mode === 'edit' ? true : false
    const [data, setData] = useState({
        title: editMode ? task.title : '',
        progress: editMode ? task.progress : '',
        date: editMode ? task.date : new Date()
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(data => ({
            ...data,
            [name]: value
        }))

    }
    const postData = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/new', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        if (response.status === 200) {
            setShowModal(false);
            getData();
        }
    }
    const editData = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:8000/todo/${task.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)

            })
            if (response.status === 200) {
                setShowModal(false)
                getData();
            }
        } catch (err) {
            console.log(err);
        }

    }
    return (
        <div className="overlay">
            <Container maxWidth="sm" className="modal">
                <div className="title-container">
                    <h3>
                        lets {mode} your task
                    </h3>
                    <IconButton onClick={() => setShowModal(false)} >
                        <CloseIcon />
                    </IconButton>

                </div>
                <form>
                    <TextField label="your task goes here" color="secondary" focused name="title"
                        value={data.title}
                        onChange={handleChange}
                        sx={{ width: '100%', margin: '10px' }}
                        required
                    />
                    <br />
                    <label htmlFor="range">Drag to select current progress</label>
                    <br />
                    <Slider
                        id="range"
                        defaultValue={30}
                        value={data.progress}
                        color="secondary"
                        name="progress"
                        min={0} max={100}
                        onChange={handleChange}
                    />
                    <Button
                        sx={{ width: '100%', margin: '10px' }}
                        color="secondary"
                        onClick={editMode ? editData : postData}
                    >
                        {editMode ? "Edit" : "Submit"}
                    </Button>
                </form>
            </Container>

        </div>
    );
}
export default Modal;

