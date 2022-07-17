import React from "react";
import styles from "./BuyContainer.module.scss";

const TicketList = ({ random }) => {
   return (
      <li>
         <span className={styles.ticketIcon}>🎟️</span>
         <p className={styles.TicketNumbers}>
            {random.map((num) => (
               <span>{num}</span>
            ))}
         </p>
      </li>
   );
};

export default TicketList;
