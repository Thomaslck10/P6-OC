import '../../styles/Collapse.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Collapse({ title, content}) {
  const [toggle, setToggle] = useState();

  return (
    <div className="collapse">
      <h3 className="collapse-title" onClick={() => setToggle(!toggle)}>
        {title}
        <FontAwesomeIcon
          icon={faAngleDown}
          className={toggle ? 'arrow-upside' : 'arrow-downside'}
        />
      </h3>
      <div className={toggle ? 'show-content' : 'hidden-content'}>
        {Array.isArray(content)
          ? content.map((item, index) => {
              return <p key={index}>{item}</p>;
            })
          : content}
      </div>
    </div>
  );
}

export default Collapse;
