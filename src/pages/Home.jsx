import React from 'react';
import { Link } from 'react-router-dom';
import { getData } from '../utils/data';
import Card from '../components/Card';

const Home = () => {
  return (
    <>
      {!getData() ? (
        <div
          className="card center-block shadow mt-5"
          style={{ width: '30rem' }}
        >
          <div className="card text-center p-5">
            <h2 className="card-title">Карточка студента</h2>
            <p className="card-text">Нет данных о студенте</p>
            <Link className="btn btn-primary" to="/form">
              Добавить
            </Link>
          </div>
        </div>
      ) : (
        <Card />
      )}
    </>
  );
};

export default Home;
