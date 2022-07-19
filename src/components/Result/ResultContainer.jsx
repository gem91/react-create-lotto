import React, { useRef } from "react";
import styles from "./ResultContainer.module.scss";

const ResultContainer = ({ winNums, setWinNums, setIsModal }) => {
   const resultRef = useRef();

   const handleChange = (e) => {
      let { name , value } = e.target;
      if(value >= 0 || value <= 9 ){
         if (value >= 46) {
            alert("45이하 숫자만 입력하세요");
            setWinNums({ ...winNums, [name] : '' })
         } else if (value === "0") {
            alert("0은 입력하면 안됩니다.");
            setWinNums({ ...winNums, [name] : '' })
         } else {
            setWinNums({ ...winNums, [name] : value })
         }
      }
   };

   const handleModal = (e) => {
      setIsModal(true)
   }

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
            {Object.entries(winNums).map(([key, value]) => (
               <input
                  key={[key]}
                  name={[key]}
                  value={value || ""}
                  ref={resultRef}
                  type="text"
                  onChange={handleChange}
                  maxLength="2"
               />
            ))}
         </div>
         <button className={styles.btnResultCheck} type="button" onClick={handleModal}>
            ⭐도비 👑 탈출 ⭐
         </button>
      </div>
   );
};

export default ResultContainer;
