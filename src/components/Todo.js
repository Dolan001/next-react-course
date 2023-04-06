import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) { 

    const [modal, setModal] = useState(false)

    function deleteHandler() {
        setModal(true);
    }
    function deleteModalHandler(){
        setModal(false);
    }

    return (
        <div className='card'>
            <h3>{props.text}</h3>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>

            { modal && <Modal onCancel = {deleteModalHandler} onConfirm = {deleteModalHandler} /> }
            { modal && <Backdrop onCancel = {deleteModalHandler} /> }
        </div>
    )
 }

export default Todo;