import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import validator from '../utils/validator';
import { getData, setData } from '../utils/data';
import TextField from '../components/TextField';
import Modal from '../components/Modal';

const initalState = {
  firstName: '',
  lastName: '',
  yearOfBirth: '',
  portfolio: '',
};

const Form = () => {
  const [data, setaData] = useState(getData() || initalState);
  const [errors, setErrors] = useState({});
  const [modalShow, setModalShow] = useState(false);

  const handleChange = ({ target }) => {
    setaData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validatorConfig = {
    firstName: {
      isRequired: { message: 'Поле обязательно для заполнения' },
      isValidName: {
        message: 'Поле должно содержать от 2 до 20 символов',
      },
    },
    lastName: { isRequired: { message: 'Поле обязательно для заполнения' } },
    yearOfBirth: {
      isRequired: { message: 'Поле обязательно для заполнения' },
      isValidYear: {
        message: `Год рождения должен быть в диапазоне от 1921 до ${new Date(
          Date.now(),
        ).getFullYear()}`,
      },
    },
    portfolio: {
      isRequired: { message: 'Поле обязательно для заполнения' },
      isURL: { message: 'Данные введены некорректно' },
    },
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);

    setErrors(errors);
    return !Object.keys(errors).length;
  };

  const isValid = !Object.keys(errors).length;

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    setData(data);
  };

  const toggleModal = () => {
    setModalShow((prevState) => !prevState);
  };

  return (
    <>
      <div
        className="card shadow container mt-5 p-5"
        style={{ width: '30rem' }}
      >
        <div
          className={`modal-overlay${modalShow ? ' overlay-visible' : ''}`}
        ></div>
        <Modal show={modalShow} onShow={toggleModal} />
        <div className="row">
          <h2 className="mb-3 text-center">
            {getData() ? 'Изменить' : 'Создать'} карточку
          </h2>
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              label="Имя"
              name="firstName"
              value={data.firstName}
              error={errors.firstName}
              onChange={handleChange}
            />
            <TextField
              label="Фамилия"
              name="lastName"
              value={data.lastName}
              error={errors.lastName}
              onChange={handleChange}
            />
            <TextField
              label="Год рождения"
              type="number"
              name="yearOfBirth"
              value={data.yearOfBirth}
              error={errors.yearOfBirth}
              min={1930}
              max={new Date(Date.now()).getFullYear()}
              onChange={handleChange}
            />
            <TextField
              label="Портфолио"
              name="portfolio"
              value={data.portfolio}
              error={errors.portfolio}
              onChange={handleChange}
            />
            <div className="container text-center">
              <Link className="btn btn-secondary m-2" to="/">
                Назад
              </Link>
              <button
                onClick={toggleModal}
                className="btn btn-primary ml-2"
                disabled={!isValid}
              >
                {getData() ? 'Обновить' : 'Создать'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
