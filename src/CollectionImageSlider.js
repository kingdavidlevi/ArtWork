import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import img from './Images/download (6).jpeg';
const CollectionImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const create = () => {
    navigate('/CreateCollection');
  };
  return <div></div>;
};

export default CollectionImageSlider;
