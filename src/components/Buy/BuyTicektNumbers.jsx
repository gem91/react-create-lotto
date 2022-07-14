import React from "react";
import SwitchButton from "./SwitchButton";
import styles from "./BuyContainer.module.scss";
import { useState } from "react";

const BuyTicektNumbers = ({ ticketCount }) => {

   const [ toggleIs, setToggleIs ] = useState(false);
   const listType = toggleIs ? styles.grid : styles.list;

   return (
      <div className={styles.hasTickets}>
         <p className={styles.desc}>
            구입한 티켓 장수는
            <span className={styles.pointColor}> {ticketCount}장</span> 입니다.
         </p>
         <SwitchButton setToggleIs={setToggleIs} />
         { ticketCount !== 0 &&
            <ul className={`${styles.ticketNumberLists} ${listType}`} >
               <li>
                  <span className={styles.ticketIcon}>🎟️</span>
                  <p className={styles.TicketNumbers}>
                     <span>0</span>
                     <span>1</span>
                     <span>2</span>
                     <span>3</span>
                     <span>4</span>
                     <span>5</span>
                     <span>6</span>
                  </p>
               </li>
               <li>
                  <span className={styles.ticketIcon}>🎟️</span>
                  <p className={styles.TicketNumbers}>
                     <span>0</span>
                     <span>1</span>
                     <span>2</span>
                     <span>3</span>
                     <span>4</span>
                     <span>5</span>
                     <span>6</span>
                  </p>
               </li>
            </ul>
         }
      </div>
   );
};

export default BuyTicektNumbers;
