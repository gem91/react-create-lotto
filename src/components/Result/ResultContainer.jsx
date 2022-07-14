import React from "react";
import styles from "./ResultContainer.module.scss";

const ResultContainer = (props) => {
   return (
      <div className={styles.resultWrap}>
         <p className={styles.desc}>
            지난 주 <span className={styles.pointColor}>당첨번호 6자리</span>와 <span className={styles.pointColor}>보너스 넘버 1개</span>를 입력해주세요.
         </p>
         <div className={styles.inputSubject}>
            <span>당첨번호</span>
            <span>보너스</span>
         </div>
         <div className={styles.inputBoxes}>
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <input type="text" />
         </div>
         <button className={styles.btnResultCheck} type="button">
         ⭐도비 👑 탈출 ⭐
         </button>
      </div>
   );
};

export default ResultContainer;
