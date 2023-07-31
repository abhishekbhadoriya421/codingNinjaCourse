import style from "./Details.module.css";
import coursesData from "../../../data/courses.json";
import { Link, useParams } from "react-router-dom";
//Third task: import useParams hook

function Details() {
  const param = useParams();  
    //Third Task: get course id and match it with the data (done)
  const data = coursesData.filter((ele)=>{
      return ele.id === param.detailId;
  })

  return (
    <>
      <div className={style.courses_container}>
        <div className={style.card_container}>
          <div className={style.card_image}>
            <div className={style.image_container}>
              {/*Third task: image source here */}
              <img src={data[0].img} alt="iconsLoading..." />
            </div>
          </div>
          <div className={style.card_content}>
            {/*Third Task:  Title and Description here */}
            <h1 className={style.card_title}>{data[0].title}</h1>
            <p className={style.card_description}>{data[0].description}</p>
          </div>
        </div>
        {/* Task4: create Link to the Learn Page */}
        <Link to={`/learn/${data[0].id}`}>
          <button className={style.button}>Start Learning</button>
        </Link>
      </div>
    </>
  );
}

export default Details;
