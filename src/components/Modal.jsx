import React from 'react';
import { Link } from 'react-router-dom';

const Modal = ({ show, onShow }) => {
  return (
    <div
      style={{ width: '30rem' }}
      className={`modal-window shadow center-block ${
        show ? 'modal-open' : 'modal-overlay'
      }`}
    >
      <div className="modal-content text-center">
        <div className="modal-body">
          <p className="mb-0 fs-4">Данные обновлены</p>
        </div>
        <div className="modal-footer">
          <Link to="/">
            <button
              onClick={onShow}
              type="button"
              className="btn btn-primary px-4"
              data-bs-dismiss="modal"
            >
              Закрыть
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Modal;
