import React, { useRef } from "react";
import styles from "./ResultContainer.module.scss";

const ResultContainer = ({ winNums, setWinNums }) => {
   // console.log(Object.values(winNums));

   const resultRef = useRef();

   const handleChange = (e) => {
      const { name, value } = e.target;
      setWinNums({ ...winNums, [name]: value });
   };

   const handleMaxLengh = (e) => {
      let value = resultRef.current.value;
      if (value.length <= e.target.maxLength) {
         if (value >= 46) {
            alert("45이하 숫자만 입력하세요");
            e.target.value = "";
         } else if (value === "0") {
            alert("0은 입력하면 안됩니다.");
            e.target.value = "";
         } else {
            console.log(value);
         }
      }
   };

   return (
      <div className={styles.resultWrap}>
         <p className={styles.desc}>
            지난 주 <span className={styles.pointColor}>당첨번호 6자리</span>와{" "}
            <span className={styles.pointColor}>보너스 넘버 1개</span>를
            입력해주세요.
         </p>
         <div className={styles.inputSubject}>
            <span>당첨번호</span>
            <span>보너스</span>
         </div>
         <div className={styles.inputBoxes}>
            {Object.values(winNums).map((item, idx) => (
               <input
                  key={idx}
                  ref={resultRef}
                  type="number"
                  placeholder="0"
                  onChange={handleChange}
                  onInput={handleMaxLengh}
                  maxLength="2"
               />
            ))}
         </div>
         <button className={styles.btnResultCheck} type="button">
            ⭐도비 👑 탈출 ⭐
         </button>
      </div>
   );
};

export default ResultContainer;
