import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import TempleCard from './TempleCard';

const TemplesList = () => {
  const { pagodas } = useContext(DataContext);
  return (
    <section id="temples">
      <div className="container">
        <h2>Các Ngôi Chùa Nổi Tiếng</h2>
        <div className="temples-grid">
          {pagodas.map(temple => (
            <TempleCard key={temple._id} temple={temple} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TemplesList;
