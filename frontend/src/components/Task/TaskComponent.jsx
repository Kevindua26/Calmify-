import React, { useState, useEffect } from "react";
import "./TaskComponent.css";
import graph from "../../assets/graph.jpg";
import { Link } from "react-router-dom";
import { TiTickOutline } from "react-icons/ti";

const TaskComponent = () => {
  const initialTaskState = {
    breathe: false,
    questions: false,
    gratitude: false,
    colouring: false,
  };

  const handleVoAaynege = () => {
    const canvas = document.getElementById('vo');
    if (canvas) {
        canvas.style.zIndex = "2";
        const jsConfetti = new JSConfetti({ canvas });
        jsConfetti.addConfetti().then(()=> {
            alert("You completed all tasks of today!!");
            canvas.style.zIndex = "-1";
        })
    } else {
        console.error('Canvas not found!');
    }
}

  const [taskDone, setTaskDone] = useState(initialTaskState);

  useEffect(() => {
    const savedTasks = localStorage.getItem("taskDone");
    if (savedTasks) {
      setTaskDone(JSON.parse(savedTasks));
    }
  }, []);

  const handleTaskClick = (task) => {
    const updatedTasks = {
      ...taskDone,
      [task]: true,
    };
    setTaskDone(updatedTasks);
    localStorage.setItem("taskDone", JSON.stringify(updatedTasks));

    // Check if all tasks are completed
    const allTasksCompleted = Object.values(updatedTasks).every((value) => value === true);
    if (allTasksCompleted) {
      // Reset tasks
      setTaskDone(initialTaskState);
      localStorage.setItem("taskDone", JSON.stringify(initialTaskState));
      handleVoAaynege();
    }
  };
  return (
    <div className="relative">
             <canvas id='vo' className=' w-[100vw] h-[100%]  absolute top-0 left-0 -z-10'></canvas>

      <div className="Main relative">
        <p className="Head absolute p top-4 left-4 text-black">
          <i className="fa-solid fa-chevron-left "></i>
          TASKS
        </p>
        <div className="result">
          <div className="graph">
            {/* <!-- <h3 style="color: chocolate;">yor progress</h3> --> */}
            <img src={graph} alt="graph" className="graphImg" />
          </div>
        </div>
        <div className="task">
          <ul className="perform">
            <li className="first" onClick={() => handleTaskClick("breathe")}>
              <div className="a"></div>
              BREATHE
              <div className="ml-auto">
              {taskDone.breathe && <i className="fa-solid fa-check text-green-600 text-2xl"></i>}</div>
            </li>
            <Link to={"/fillups"}>
              <li className="second" onClick={() => handleTaskClick("questions")}>
                <div className="b"></div>
                QUESTIONS
                <div className="ml-auto">
                {taskDone.questions && <i className="fa-solid fa-check text-green-600 text-2xl"></i>}
                </div>
              </li>
            </Link>
            <Link to={"/gratitude"}><li className="third" onClick={() => handleTaskClick("gratitude")}>
              <div className="c"></div>
              GRATITUDE              
              <div className="ml-auto">
              {taskDone.gratitude && <i className="fa-solid fa-check text-green-600 text-2xl"></i>}</div>
            </li></Link>
            <Link to={"/fillcolor"}><li className="fourth" onClick={() => handleTaskClick("colouring")}>
              <div className="d"></div>
              COLOURING
              <div className="ml-auto">
              {taskDone.colouring && <i className="fa-solid fa-check text-green-600 text-2xl"></i> }</div>
            </li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskComponent;
