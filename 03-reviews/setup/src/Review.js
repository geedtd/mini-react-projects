import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [index,setIndex] = useState(0)
  const {name, job, image, text} = people[index]

  const checkNumber = (number) => { 
    if (number > people.length -1 ) {
      return 0
    }
    if (number < 0) {
      return people.length -1
    }
    return number
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1
      return checkNumber(newIndex)
    })
    // ((index  > people.length) ? setIndex(index + 1) : setIndex(0))
  }
  const previousPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1
      return checkNumber(newIndex)
    })
    // ((index  > people.length) ? setIndex(index + 1) : setIndex(0))
  }

  const randomPerson = () => {
    setIndex(() => {
      let newIndex = Math.floor(Math.random()*people.length )
      if(newIndex === index) {
        newIndex = newIndex + 1
      }
      return checkNumber(newIndex)
    })
  }

  return (
    <article className='review'>
      <div className="img-container">
        <img src={image} alt={name} className='person-img' />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className='prev-btn'onClick={previousPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
        <button className='random-btn' onClick={randomPerson}>
          surprise me
        </button>
    </article>
  );
};

export default Review;
