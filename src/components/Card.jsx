import React from 'react';
import { getData } from '../utils/data';
import { Link } from 'react-router-dom';

const Card = () => {
  // const object = {
  //   firstName: 'Johnny',
  //   lastName: 'Ivanov',
  //   yearOfBirth: 1234,
  //   portfolio: 'github.io',
  // };
  const { firstName, lastName, yearOfBirth, portfolio } = getData();
  return (
    <div className="card center-block shadow mt-5" style={{ width: '30rem' }}>
      <div className="card-body text-center">
        <h2 className="card-title">Карточка студента</h2>
        <div className="text-container text-left">
          <p className="card-text">
            <b>Имя: </b>
            {firstName}
          </p>
          <p className="card-text">
            <b>Фамилия: </b>
            {lastName}
          </p>
          <p className="card-text">
            <b>Год рождения: </b>
            {yearOfBirth}
          </p>
          <p className="card-text">
            <b>Портфолио: </b>
            <a href={portfolio}>{portfolio}</a>
          </p>
        </div>
        <Link className="btn btn-primary mt-2" to="/form">
          Редактировать
        </Link>
      </div>
    </div>
  );
};
export default Card;
