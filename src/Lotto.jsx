import { useState } from "react";
import styles from "./Lotto.module.scss";
import BuyContainer from "./components/Buy/BuyContainer";
import ResultContainer from "./components/Result/ResultContainer";
import { useEffect } from "react";
import ModalPopup from "./components/Modal";

function App() {
   const 로또개수 = 7;
   const [money, setMoney] = useState(0);
   const [randomArray, setRandomArray] = useState([]);
   const [winNums, setWinNums] = useState({
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
      sixth: 0,
      seventh: 0,
   });

   const [ isModal, setIsModal ] = useState(false);
   const [ sameNumCount, setSameNumCount ] = useState(null)


   // 돈 입금하면 랜덤 번호얻기
   useEffect(() => {
      const getRandomLists = [];
      for (let ticket = 0; ticket < money / 1000; ticket++) {
         const setRandomData = new Set();
         while (setRandomData.size !== 로또개수) {
            const random = getRandomNumber(1, 45);
            setRandomData.add(random);
         }
         getRandomLists.push([...setRandomData]);
      }
      setRandomArray([...getRandomLists]);
   }, [money]);

   // 랜덤 구하기 함수
   function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min) + 1;
   }

   // 팝업창 다루는 함수
   const handlePopup = () => {
      setIsModal(true);
      // 당첨 & 내 번호 비교값 
      getWinNumberArray(randomArray, Object.values(winNums).map((win) => Number(win)));
   }

   // 당첨 & 내번호 비교하기
    const getWinNumberArray = ( random, winNum ) => {
      const winArray = [];
      for( let ticket = 0; ticket < money / 1000; ticket ++ ){
        let sameNumberArray = random[ticket].filter((el) => {  // 같은번호 구하는 부분
         return winNum.includes(el);
         })
         winArray.push(sameNumberArray.length)
         setSameNumCount(winArray)
      }

    }
   return (
      <>
      <div className={styles.wrap}>
         <h1>인생 한방, 행운의<span className={styles.icon}>💎</span>LOTTO</h1>
         <div className={styles.inner}>
            <p className={styles.text}>구입할 금액을 <span className={styles.pointText}>1000원</span> 단위로 입력해주세요</p>
            <BuyContainer
               money={money}
               setMoney={setMoney}
               setRandomArray={setRandomArray}
               randomArray={randomArray}
            />
            <ResultContainer winNums={winNums} setWinNums={setWinNums} handlePopup={handlePopup} />
         </div>
      </div>
      { isModal &&
         <ModalPopup setIsModal={setIsModal} sameNumCount={sameNumCount} money={money} setMoney={setMoney} setWinNums={setWinNums} winNums={winNums} />
       }
      </>
   );
}

export default App;
