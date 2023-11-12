import './style.css'

function TodoItem(props) {
    return (
        <li>
            <span
                onClick={props.onComplete}>
                ✔
            </span>
            <p className={`${props.completed && "icon_check--completed"}`} id='todoItem--text'>{props.text}</p>
            <span
                onClick={props.onDelete}>
                ✖
            </span>
        </li>
    )
}

export { TodoItem }