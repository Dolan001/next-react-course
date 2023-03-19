function Todo(props) { 
    function deleteHandler() {
        console.log('Clicked ' + props.text);
    }
    return (
        <div className='card'>
            <h3>{props.text}</h3>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
 }

export default Todo;