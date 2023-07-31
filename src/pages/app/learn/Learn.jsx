import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
import { useParams,Link, Outlet } from "react-router-dom";
// Task4: Import all the required elements from the react-router-dom
function Learn() {

  // fetch the data using id
  const id = useParams();
  const data = coursesData.filter((ele)=>{
    return id.courseId === ele.id;
  })

  return (
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
        <Link to={'/courses'}><h2 className={style.back}>{"<<"}</h2></Link>

        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{data[0].title}</h1>
      </div>0
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul>{ data[0].chapters.map((ele,index)=>{
            return <div key={index} className={style.chapterId}><span>{ele.chapter}</span> <Link to={`chapter/${index}`}>{ele.title}</Link></div>
          })}</ul>
        </div>
      
      <div className={style.courses}>
        {/**Task5:  Chapter Details Must be rendered here */}
        <Outlet context={data}/>
      </div>
    </div>
</div>
  );
}

export default Learn;
