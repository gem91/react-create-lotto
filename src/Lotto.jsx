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

   // 돈 입금하면 랜덤 번호얻기
   useEffect(() => {
      const getRandomLists = [];
      for (let ticket = 0; ticket < money / 1000; ticket++) {
         const setRandomData = new Set();
         while (setRandomData.size !== 로또개수) {
            const random = getRandomNumber(1, 10);
            setRandomData.add(random);
         }
         getRandomLists.push([...setRandomData]);
      }
      setRandomArray([...getRandomLists]);
      console.log(randomArray);
   }, [money]);

   function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min) + min) + 1;
   }

   return (
      <>
      <div className={styles.wrap}>
         <h1>인생 한방, 행운의<span className={styles.icon}>💎</span>LOTTO</h1>
         <div className={styles.inner}>
            <p className={styles.text}>구입할 금액을 입력해주세요</p>
            <BuyContainer
               money={money}
               setMoney={setMoney}
               setRandomArray={setRandomArray}
               randomArray={randomArray}
            />
            <ResultContainer winNums={winNums} setWinNums={setWinNums} setIsModal={setIsModal} />
         </div>
      </div>
      { isModal &&
         <ModalPopup setIsModal={setIsModal} />
       }
      </>
   );
}

export default App;
