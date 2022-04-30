import React from 'react'
import Category from '../category/category.component';
import './categories.styles.scss';

const Categories = ({categories}) => {
  return (
    <div className='categories-container'>
             {
                 categories.map(category => <Category category={category} key={category.id}/>)
             }
    </div>
  )
}

export default Categories;