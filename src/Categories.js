import React from 'react';

const Categories = ({ categories, filterItems }) => {

  return <div className='btn-container'>
    <button className='filter-btn' onClick={()=>{filterItems('breakfast')}}>
      breakfast
    </button>
    <button className='filter-btn' onClick={()=>{filterItems('lunch')}}>
      lunch
    </button>
    <button className='filter-btn' onClick={()=>{filterItems('shakes')}}>
      shakes
    </button>
    <button className='filter-btn' onClick={()=>{filterItems('all')}}>
      all
    </button>
  </div>;
};

export default Categories;
