import { useState } from "react";
import Modal from "./Modal";
import { Button } from "@mui/material";
const ListHeader = ({ listName }) => {
    const [showModal, setShowModal] = useState(false)
    return (
        <div className="list-header">
            <h1>{listName}</h1>
            <div>
                <Button color="secondary" onClick={() => setShowModal(true)}> Add new </Button>
                {showModal && <Modal mode={'create'} setShowModal={setShowModal} />}
            </div>
        </div>
    );
}
export default ListHeader
