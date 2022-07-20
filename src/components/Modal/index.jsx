import React from 'react';
import styles from "./ModalPopup.module.scss";

const ModalPopup = ({setIsModal, sameNumCount, setMoney, money, winNums, setWinNums}) => {
  // 당첨금 데이터 배열리스트
  const winInfo = {
    3: {
      result : 3,
      prize : 5000,
    },
    4: {
      result : 4,
      prize : 50000,
    },
    5: {
      result : 5,
      prize : 1500000,
    },
    6: {
      result : 6,
      prize : 30000000,
    },
    7: {
      result : 7,
      prize : 2000000000,
    }
  }

  // 같은숫자 count 값 구하기
  const resultCount = sameNumCount.reduce((prev, current) => {
    if( !prev.has(current) ){
      prev.set( current, 1 );
    }else{
      prev.set( current, prev.get(current) + 1 )
    }
    return prev;
  }, new Map())
  
  // 당첨금 배열리스트
  const winData = Object.keys(winInfo).map( key => winInfo[key]);

  // count값 추가한 새로운 배열
  const addCountArray = winData.map((el) => (
    { ...el, count: resultCount.get(el.result) || '힘냉😭' }
  ));

  // count만 담긴 배열 구하기
  const onlyCountArray = addCountArray.map( list => list.count > 0 ? list.count : 0 )
  // 구한 count값 모두 더하기
  const totalCount = onlyCountArray.reduce( (prev, cur) => {
    return prev + cur
  }, 0)

  const onReset = () => {
    handleClose()
  }

  const handleClose = () => {
    setIsModal(false)
    setMoney(0)
    setWinNums(Object.values(winNums).map( number => number = 0))
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
                  { addCountArray.map((list, idx) => 
                    <tr key={idx}>
                      <td>{list.result}</td>
                      <td>{list.prize.toLocaleString()}</td>
                      <td>{list.count}</td>
                    </tr>
                  )}
                </tbody>
                <tfoot>
                  <tr>
                      <td colSpan="3">당신의 총 수익률은 <span className={styles.revenue}>{ totalCount === 0 ? 0 : (- totalCount / (money/1000) * - 100).toFixed(2)}% </span>입니다.</td>
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