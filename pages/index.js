import Feature from '@/components/Feature'
import FeatureProducts from '@/components/FeatureProducts'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Littlebanner from '@/components/Littlebanner'
import NewArrive from '@/components/NewArrive'
import NewsLatter from '@/components/NewsLatter'
import React from 'react'

const index = () => {
  return (<>
      <Hero/>
      <Feature/>
      <FeatureProducts/>
      <Littlebanner/>
      <NewArrive/>
      <NewsLatter/>
      <Footer/>
    </>
  )
}

export default index