import React from "react";
import SwitchButton from "./SwitchButton";
import TicketList from "./TicketList";
import styles from "./BuyContainer.module.scss";
import { useState } from "react";

const BuyTicektNumbers = ({ money, randomArray }) => {
   const [toggleIs, setToggleIs] = useState(false);
   const listType = toggleIs ? styles.grid : styles.list;
   const count = money / 1000;

   return (
      <div className={styles.hasTickets}>
         {count !== 0 && (
            <>
               <p className={styles.desc}>
                  구입한 티켓 장수는
                  <span className={styles.pointColor}> {count}장</span> 입니다.
               </p>
               <SwitchButton setToggleIs={setToggleIs} />
               <ul className={`${styles.ticketNumberLists} ${listType}`}>
                  {randomArray.map((random, idx) => (
                     <TicketList key={idx} random={random} />
                  ))}
               </ul>
            </>
         )}
      </div>
   );
};

export default BuyTicektNumbers;
