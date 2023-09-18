import PropTypes from 'prop-types';

export function ButtonGray(props) {
  const { string } = props;
  const { clickCalc } = props;
  return (
    <button className="buttons-group1" type="button" onClick={() => { clickCalc(string); }}>
      {string}
    </button>
  );
}

ButtonGray.defaultProps = {
  string: 0,
  clickCalc: () => {},
};

ButtonGray.propTypes = {
  string: PropTypes.string,
  clickCalc: PropTypes.func,
};

export function ButtonOrange(props) {
  const { string } = props;
  const { clickCalc } = props;
  return (
    <button className="buttons-group2" type="button" onClick={() => { clickCalc(string); }}>
      {string}
    </button>
  );
}

ButtonOrange.defaultProps = {
  string: 0,
  clickCalc: () => {},
};

ButtonOrange.propTypes = {
  string: PropTypes.string,
  clickCalc: PropTypes.func,
};

export function ButtonZero(props) {
  const { string } = props;
  const { clickCalc } = props;
  return (
    <button className="buttons-group3" type="button" onClick={() => { clickCalc(string); }}>
      {string}
    </button>
  );
}

ButtonZero.defaultProps = {
  string: 0,
  clickCalc: () => {},
};

ButtonZero.propTypes = {
  string: PropTypes.string,
  clickCalc: PropTypes.func,
};
