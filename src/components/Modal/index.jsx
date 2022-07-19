import React from 'react';
import styles from "./ModalPopup.module.scss";

const ModalPopup = ({setIsModal}) => {
  const onReset = () => {
    handleClose()
  }

  const handleClose = () => {
    setIsModal(false)
  }
  return (
    <>
      <div className={styles.modalWrap}>
        <div className={styles.container}>
          <h2>🏆 당첨 통계 🏆</h2>
          <div className={styles.modalContent}>
            <table className={styles.tableLists}>
                <thead>
                  <tr>
                      <th>일치 갯수</th>
                      <th>당첨금</th>
                      <th>당첨 갯수</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>개수</td>
                    <td>toLocaleString</td>
                    {/* {el.당첨금.toLocaleString()} */}
                    <td>몇 개</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                      <td colSpan="3">당신의 총 수익률은 -100% 입니다.</td>
                  </tr>
                </tfoot>
            </table>
            <div className={styles.resetArea}>
              <button className={styles.resetButton} onClick={onReset}>다시 시작하기</button>
              <span className={styles.tooltip}>Are you sure?</span>
            </div>
          </div>
          <button
            className={styles.closeButton}
            type="button"
            onClick={handleClose}
          >
            close
          </button>
        </div>
        <div className={styles.dimmed}></div>
      </div>
    </>
  )
}

export default ModalPopup;