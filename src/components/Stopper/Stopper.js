import styles from './Stopper.module.scss';
import {useRef, useState} from "react";
import Button from "../Button/Button";
import Timer from "../Timer/Timer";

const Stopper = () => {

  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setTime(prev => prev + 10);
    }, 10);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    stop();
    setTime(0);
  };


  return (
      <div className={styles.container}>
        <Timer time={time}/>
        <section>
          <Button title={'Start'} onClick={start}/>
          <Button title={'Stop'} onClick={stop}/>
          <Button title={'Reset'} onClick={reset}/>
        </section>
      </div>
  );
}

export default Stopper;