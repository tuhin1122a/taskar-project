import { useState } from "react";

import AddTaskModel from "./AddTaskModel";
import NoTaskFound from "./NoTaskFound";
import SearchBox from "./SearchTask";
import TasksAction from "./TasksAction";
import TasksList from "./TasksList";

export default function TasksBord() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "React native",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently",
    tags: ["web", "react", "javaScript"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  const [showAddTask, setShowAddTask] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  function handleAddTask(newTask, isAdd) {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }

    setShowAddTask(false);
  }
  function handleEditTask(task) {
    setTaskToUpdate(task);
    setShowAddTask(true);
  }
  function handleCloseClick() {
    setShowAddTask(false);
    setTaskToUpdate(null);
  }
  function handleDeleteTask(taskId) {
    const taskAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(taskAfterDelete);
  }

  function handleAllDeleteClick() {
    tasks.length = 0;
    setTasks([...tasks]);
  }
  function handleOnFAvorite(taskId) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId);
    const newTasks = [...tasks];
    newTasks[taskIndex].isFavorite = !newTasks[taskIndex].isFavorite;
    setTasks(newTasks);
  }
  function handleSearch(scarchTram) {
    console.log(scarchTram);
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(scarchTram.toLowerCase())
    );
    setTasks([...filtered]);
  }
  return (
    <section className="mb-20" id="tasks">
      {showAddTask && (
        <AddTaskModel
          onSave={handleAddTask}
          onCloseClick={handleCloseClick}
          taskToUpdate={taskToUpdate}
        />
      )}
      <div className="container sm:w-full h-full">
        <div className="p-2 flex justify-end">
          <SearchBox onScarch={handleSearch} />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TasksAction
            onAddClick={() => setShowAddTask(true)}
            onDeleteAll={handleAllDeleteClick}
          />
          {tasks.length > 0 ? (
            <TasksList
              tasks={tasks}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onFav={handleOnFAvorite}
            />
          ) : (
            <NoTaskFound />
          )}
        </div>
      </div>
    </section>
  );
}
