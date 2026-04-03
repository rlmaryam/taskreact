export default function AddTask({ taskList, setTaskList, task, setTask }) {

    function handleSubmit(e){
        e.preventDefault();

        if (!task.name || task.name.trim() === "") {
            alert("You can not add any empty task");
            return;
        }

        const date = new Date();

        if (task.id){
            const updatedTaskList = taskList.map((todo) => 
                todo.id === task.id 
                ? {
                    ...todo,
                    name: task.name,
                    date: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
                  }
                : todo
            );

            setTaskList(updatedTaskList);
        } 
        else {
            const newTask = {
    id: Date.now(),
    name: task.name,
    date: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
};


            setTaskList([...taskList, newTask]);
        }

        setTask({ name: "" });
    }

    return(
        <section className="addTask">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="task"
                    autoComplete="off" 
                    placeholder="Add Task" 
                    maxLength={25}
                    value={task.name}
                    onChange={(e)=> setTask({ ...task, name: e.target.value })}
                />

                <button type="submit">
                    {task.id ? "Update" : "Add"}
                </button>
            </form>
        </section>
    );
}