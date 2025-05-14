
import React, { useState } from 'react';
import Header from '../components/header/Header';
import '../index.css';
import Section1 from '../components/main/Section1';
import Section2 from '../components/main/Section2';
import Footer from '../components/Footer';

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <div>
      <Header/>
      <Section1/>
      <Section2 searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Footer/>
    </div>
  );
};



