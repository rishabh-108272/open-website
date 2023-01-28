import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Slider from './Slider';
import OurPrincipals from './OurPrincipals'

import Brand from './Brand';
import TeamArea from './TeamArea';
import Gallery from './Gallery';

import DeployedProjects from '../../pages/projectpage/DeployedProjects'
import UpcomingEvent from '../../pages/eventpage/UpcomingEvent'
import OpenLearning from '../../pages/aboutuspage/OpenLearning'


function Index() {
  return (
    <>
      <Header />
      <main>
        <Slider />
        <UpcomingEvent />
        {/* <OurPrincipals /> */}
        <OpenLearning />
        <DeployedProjects />
        {/* <TeamArea /> */}
        <Gallery />
        <Brand />
      </main>
      <Footer />
    </>
  )
}

export default Index