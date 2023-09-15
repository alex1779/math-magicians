function Calculator() {
  return (

    <div className="default">

      <input type="text" placeholder="0" className="input-result" />

      <div className="buttons">

        <button className="buttons-group1" type="button">AC</button>
        <button className="buttons-group1" type="button">+/-</button>
        <button className="buttons-group1" type="button">%</button>
        <button className="buttons-group2" type="button">÷</button>

        <button className="buttons-group1" type="button">7</button>
        <button className="buttons-group1" type="button">8</button>
        <button className="buttons-group1" type="button">9</button>
        <button className="buttons-group2" type="button">x</button>

        <button className="buttons-group1" type="button">4</button>
        <button className="buttons-group1" type="button">5</button>
        <button className="buttons-group1" type="button">6</button>
        <button className="buttons-group2" type="button">-</button>

        <button className="buttons-group1" type="button">1</button>
        <button className="buttons-group1" type="button">2</button>
        <button className="buttons-group1" type="button">3</button>
        <button className="buttons-group2" type="button">+</button>

        <button className="buttons-group3" type="button">0</button>
        <button className="buttons-group1" type="button">.</button>
        <button className="buttons-group2" type="button">=</button>

      </div>

    </div>

  );
}

export default Calculator;
