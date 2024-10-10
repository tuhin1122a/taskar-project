import { useState } from "react";
import TasksList from "../TasksList";
import SearchBox from "./SearchTask";
import TasksAction from "./TasksAction";

export default function TasksBord() {
  const defaultTask = {
    id: crypto.randomUUID(),
    title: "API",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently",
    tags: '["web" , "react" , "javaScript" ]',
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTask]);
  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchBox />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TasksAction />
          <TasksList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
