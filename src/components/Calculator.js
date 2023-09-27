import { useState } from 'react';
import calculate from '../logic/calculate';
import { ButtonGray, ButtonOrange, ButtonZero } from './buttons';

function Calculator() {
  const [calculator, setCalculator] = useState(
    {
      total: null,
      next: null,
      operation: null,
    },
  );

  const [displayNumber, setDisplayNumber] = useState('0');

  const byPassNext = (calculator) => {
    if (calculator.next) {
      return setDisplayNumber(calculator.next);
    }
    if (calculator.total) {
      return setDisplayNumber(calculator.total);
    }
    return setDisplayNumber('0');
  };

  const clickCalc = (value) => {
    const newCalculator = calculate(calculator, value);
    setCalculator(newCalculator);
    byPassNext(newCalculator);
  };

  return (
    <>
      <div className="intro">

        <p className="intro-p">Let&apos;s do some math!</p>

        <div className="default">
          <input type="text" placeholder="0" className="input-result" value={displayNumber} />
          <div className="buttons">

            <ButtonGray string="AC" clickCalc={clickCalc} />
            <ButtonGray string="+/-" clickCalc={clickCalc} />
            <ButtonGray string="%" clickCalc={clickCalc} />
            <ButtonOrange string="÷" clickCalc={clickCalc} />

            <ButtonGray string="7" clickCalc={clickCalc} />
            <ButtonGray string="8" clickCalc={clickCalc} />
            <ButtonGray string="9" clickCalc={clickCalc} />
            <ButtonOrange string="x" clickCalc={clickCalc} />

            <ButtonGray string="4" clickCalc={clickCalc} />
            <ButtonGray string="5" clickCalc={clickCalc} />
            <ButtonGray string="6" clickCalc={clickCalc} />
            <ButtonOrange string="-" clickCalc={clickCalc} />

            <ButtonGray string="1" clickCalc={clickCalc} />
            <ButtonGray string="2" clickCalc={clickCalc} />
            <ButtonGray string="3" clickCalc={clickCalc} />
            <ButtonOrange string="+" clickCalc={clickCalc} />

            <ButtonZero string="0" clickCalc={clickCalc} />
            <ButtonGray string="." clickCalc={clickCalc} />
            <ButtonOrange string="=" clickCalc={clickCalc} />

          </div>
        </div>

      </div>

    </>

  );
}

export default Calculator;
