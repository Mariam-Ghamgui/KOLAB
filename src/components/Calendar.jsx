import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import moment from "moment";

const localizer = momentLocalizer(moment);

function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null); // Track the selected task
  const [newTask, setNewTask] = useState({
    id: "",
    title: "",
    start: null,
    end: null,
    color: "red", // Default color
  });

  const onDragEnd = (result) => {
    if (!result.destination) return; // Task wasn't dropped on the calendar

    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(result.source.index, 1); // Remove the task from the source position
    updatedTasks.splice(result.destination.index, 0, movedTask); // Insert the task at the destination position

    setTasks(updatedTasks);
  };

  const addTask = (newTask) => {
    if (
      newTask.title.trim() !== "" &&
      newTask.start !== null &&
      newTask.end !== null
    ) {
      setTasks([...tasks, newTask]);
      setNewTask({
        id: "",
        title: "",
        start: null,
        end: null,
        color: "red", // Reset color to default after adding
      });
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setSelectedTask(null); // Clear the selected task
  };

  const modifyTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? updatedTask : task
    );
    setTasks(updatedTasks);
    setSelectedTask(null); // Clear the selected task
  };

  const handleTaskClick = (event, taskId) => {
    // Find the task by ID and set it as the selected task for modification
    const taskToModify = tasks.find((task) => task.id === taskId);
    setSelectedTask(taskToModify);
  };

  const clearSelectedTask = () => {
    setSelectedTask(null); // Clear the selected task
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({
      ...newTask,
      [name]: value,
    });
  };

  return (
    <div style={{ paddingTop: "30px", paddingLeft: "0px" }}>
      <h1 style={{color: '#696464'}}>Calendar</h1> {/* Title */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="calendar">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <Calendar
                localizer={localizer}
                events={tasks}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 600, width: 1220 }}
                selectable
                onSelectEvent={(event) => handleTaskClick(event, event.id)}
              />
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* Add Task Form */}
      {!selectedTask && (
        <div>
          <h2 style={{color: '#696464'}}>Add Task</h2>
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            value={newTask.title}
            onChange={handleChange}
          />
          <input
            type="datetime-local"
            name="start"
            placeholder="Start Time"
            value={moment(newTask.start).format("YYYY-MM-DDTHH:mm")}
            onChange={handleChange}
          />
          <input
            type="datetime-local"
            name="end"
            placeholder="End Time"
            value={moment(newTask.end).format("YYYY-MM-DDTHH:mm")}
            onChange={handleChange}
          />
          <label>Task Color:</label>
          <select
            name="color"
            value={newTask.color}
            onChange={handleChange}
          >
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            {/* Add more color options as needed */}
          </select>
          <button onClick={() => addTask(newTask)}>Add Task</button>
        </div>
      )}

      {/* Modify Task Form */}
      {selectedTask && (
        <div>
          <h2>Modify Task</h2>
          <input
            type="text"
            name="title"
            placeholder="Task Title"
            value={selectedTask.title}
            onChange={(e) =>
              setSelectedTask({ ...selectedTask, title: e.target.value })
            }
          />
          <input
            type="datetime-local"
            name="start"
            placeholder="Start Time"
            value={moment(selectedTask.start).format("YYYY-MM-DDTHH:mm")}
            onChange={(e) =>
              setSelectedTask({
                ...selectedTask,
                start: moment(e.target.value).toDate(),
              })
            }
          />
          <input
            type="datetime-local"
            name="end"
            placeholder="End Time"
            value={moment(selectedTask.end).format("YYYY-MM-DDTHH:mm")}
            onChange={(e) =>
              setSelectedTask({
                ...selectedTask,
                end: moment(e.target.value).toDate(),
              })
            }
          />
          <label>Task Color:</label>
          <select
            name="color"
            value={selectedTask.color}
            onChange={(e) =>
              setSelectedTask({ ...selectedTask, color: e.target.value })
            }
          >
            <option value="primary">Red</option>
            <option value="blue">Blue</option>
            <option value="#76B1A6">Green</option>
            {/* Add more color options as needed */}
          </select>
          <button onClick={() => modifyTask(selectedTask.id, selectedTask)}>
            Modify Task
          </button>
          <button onClick={clearSelectedTask}>Cancel</button>
        </div>
      )}

      {/* Delete Task Button */}
      {selectedTask && (
        <div>
          <button onClick={() => deleteTask(selectedTask.id)}>Delete Task</button>
        </div>
      )}
    </div>
  );
}

export default App;
