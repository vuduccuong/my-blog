import styles from "./quote.module.css";

const Quote = () => {
  const PlayHHH = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  };

  return (
    <div className={styles.main}>
      <div className={styles.quote__container}>
        <div className={styles.quote__text}>
          <i className="fas" className={styles.fa_quote_left}></i>
          <span id="quote" className={styles.long__quote} onClick={PlayHHH}>
            Xã hội này chỉ có làm, chịu khó, cần cù thì bù siêng năng, chỉ có
            làm thì mới có ăn, những cái loại không làm mà đòi có ăn thì ăn đầu
            b ăn c!
          </span>

          <audio className="audio-element">
            <source src="./voices/Huan_Hoa_Hong.mp3"></source>
          </audio>
        </div>

        <div className={styles.quote__author}>
          <span id="author">--Huấn Hoa Hồng--</span>
        </div>

        {/* <div className={styles.button__container}>
          <button className="fab fa-twitter" id="twitter" title="Tweet This!">
            <i className="fab fa-twitter" className={styles.fa__twitter}></i>
          </button>
          <button id="new-quote" className={styles.button}>
            New Quote
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Quote;
