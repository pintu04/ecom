import React from 'react'
import Popularr from '../Components/Popularr/Popularr';
import Hero from '../Components/Hero/Hero';
import Offers from '../Components/Offers/Offers';
import NewCollections from '../Components/NewCollections/NewCollections';
import Newsletter from '../Components/Newsletter/Newsletter';

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popularr />
      <Offers />
      <NewCollections />
      <Newsletter />
    </div>
  )
}

export default Shop;
