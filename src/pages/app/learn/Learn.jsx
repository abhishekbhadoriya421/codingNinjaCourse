import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
import { useParams,Link } from "react-router-dom";
// Task4: Import all the required elements from the react-router-dom
function Learn() {

  // fetch the data using id
  const id = useParams();
  const data = coursesData.filter((ele)=>{
    return id.courseId === ele.id;
  })

  console.log(data);
  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
        <Link to={(1)}><h2 className={style.back}>{"<<"}</h2></Link>

        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{data[0].title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul>{ data[0].chapters.map((ele,index)=>{
            return <li key={index}><span>{ele.chapter}</span> <samp>{ele.description}</samp></li>
          })}</ul>
        </div>
      
      <div className={style.courses}>
        {/**Task5:  Chapter Details Must be rendered here */}
      </div>
    </div>
</div>
  );
}

export default Learn;
