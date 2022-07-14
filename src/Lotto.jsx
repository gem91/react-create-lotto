import { useState } from "react";
import styles from "./Lotto.module.scss";
import BuyContainer from "./components/Buy/BuyContainer";
import ResultContainer from "./components/Result/ResultContainer";
import { useEffect } from "react";

function App() {
   const [ money, setMoney ] = useState(0);
   const [ ticketCount, setTicketCount ] = useState(0);
   const [ randomNumbers, setRandomNumbers ] = useState([0]);


// 돈 입금하면 랜덤 번호얻기
useEffect(()=>{
   const count = setTicketCount(money/1000);   // 구입한 장수

   const 로또개수 = 7;
   const getRandomLists = [];
   const randomArray = new Set();

   while( randomArray.size !== 로또개수 ){
      const random = getRandomNumber(1, 10);
      randomArray.add(random);
   }
   getRandomLists.push([...randomArray]);
   setRandomNumbers(getRandomLists)
   console.log(randomNumbers);
}, [money])



   function getRandomNumber (min, max) {
      return Math.floor(Math.random() * (max - min) + min) + 1;
   }


   return (
      <div className={styles.wrap}>
         <h1>인생 한방, 행운의 🎱LOTTO-re</h1>
         <div className={styles.inner}>
            <p className={styles.text}>구입할 금액을 입력해주세요</p>
            <BuyContainer money={money} setMoney={setMoney} ticketCount={ticketCount} setTicketCount={setTicketCount} setRandomNumbers={setRandomNumbers} />
            <ResultContainer />
         </div>
      </div>
   );
}

export default App;
