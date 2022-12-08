import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CgArrowRightO } from 'react-icons/cg';
import { Link } from 'react-router-dom';

const State = ({ name, code }) => {
  return (
    <Link
      to={`/${name}/weather`}
      className="d-flex align-items-center justify-content-between p-3 state"
    >
      <div>
        <h2 className="fw-bold fs-5 fs-md-2 color-primary">
          {name}
        </h2>
        <p className="text-white fw-bold fs-5 fs-md-2">
          {code}
        </p>
      </div>
      <div>
        <CgArrowRightO className="text-white fs-1 fs-md-2" />
      </div>
    </Link>
  );
};

export default State;
