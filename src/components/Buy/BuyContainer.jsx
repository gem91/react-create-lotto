import React from "react";
import { useRef } from "react";
import styles from "./BuyContainer.module.scss";
import BuyTicektNumbers from "./BuyTicektNumbers";

const BuyContainer = ({ money, setMoney, randomArray }) => {
   // input useRef 사용하기
   const inputRef = useRef();
   const submitData = () => {
      let moneyValue = inputRef.current.value;
      if (moneyValue % 1000 === 0) {
         setMoney(moneyValue);
         inputRef.current.value = "";
         inputRef.current.blur();
      } else {
         alert("1000원 단위로 입력해주세요.");
         inputRef.current.value = "";
         inputRef.current.focus();
      }
   };
   // 버튼 클릭했을때, 데이터 보내기
   const onSubmit = () => submitData();
   // Enter 눌렀을때, 데이터 보내기
   const handleKeyPress = (e) => {
      if (e.key === "Enter") submitData();
   };

   return (
      <div className={styles.buyTicketContainer}>
         <div className={styles.enterMoney}>
            <input
               type="number"
               placeholder="구입할 가격을 입력하세요"
               ref={inputRef}
               onKeyPress={handleKeyPress}
            />
            <button
               className={styles.btnConfirm}
               type="submit"
               onClick={onSubmit}
            >
               가즈아!!
            </button>
         </div>
         <BuyTicektNumbers money={money} randomArray={randomArray} />
      </div>
   );
};
export default BuyContainer;
