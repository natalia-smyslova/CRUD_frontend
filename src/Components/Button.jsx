import PropTypes from 'prop-types';

export default function Button({ icon, color, fontSize, element = null, callback = null }) {
    const styles = { color, fontSize };
    let classes;
  
    switch (element) {
      case 'note':
        classes = "button button__note";
        break;
      case 'footer':
        classes = "button button__footer";
        break;
      default:
        classes = "button";
    }
  
    return <button className={classes} style={styles} onClick={callback}>{icon}</button>;
  }

  Button.propTypes = {
    icon: PropTypes.string,
    color: PropTypes.string,
    fontSize: PropTypes.string,
    element: PropTypes.string,
    callback: PropTypes.any
  }