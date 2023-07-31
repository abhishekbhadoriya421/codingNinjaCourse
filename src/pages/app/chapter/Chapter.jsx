import React from "react";
import styles from "./Chapter.module.css";
import { useParams, useOutletContext } from "react-router-dom";

function Chapter() {
  const {chapterId} = useParams();
  const chapters = useOutletContext();
  const currentChapterData = chapters[0].chapters[chapterId];

  return (
    <div>
      <h1>{currentChapterData.title}</h1>
      <hr />
      <h2>{currentChapterData.description}</h2>
      <p className={styles.para}>{currentChapterData.details}</p>
      <br />
      <br />
      <div className={styles.videos}>
        {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
        {/* <iframe
          width="800"
          height="560"
          src=""
          title="React Video"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> */}
      </div>
    </div>
  );
}

export default Chapter;
