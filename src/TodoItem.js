import './TodoItem.css'

function TodoItem(props) {
    return (
        <li>
            <span>✔</span>
            <p className={`${props.completed && "icon_check--completed"}`} id='todoItem--text'>{props.text}</p>
            <span>✖</span>
        </li>
    )
}

export { TodoItem }