import Task from "./Task"

// const tasks = [
//     {
//         id: 1,
//         text: "Doctor's Appointment",
//         day: "Feb 5th at 2:30pm",
//         reminder: true,
//     },
//     {
//         id: 2,
//         text: "Meeting at School",
//         day: "Feb 6th at 1:30pm",
//         reminder: true,
//     },
//     {
//         id: 3,
//         text: "Food Shopping",
//         day: "Feb 5th at 2:30pm",
//         reminder: false,
//     },
// ] -> we don't want to use it like this

const Tasks = ({ tasks, onDelete }) => {

    return (
        <>
            {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete}/>))}
        </>
    )
}

export default Tasks

// we create a list using maps
// state is immutable, so you cant use tasks.push
// state should be at the top level, so we moved it to App.js