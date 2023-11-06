import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { HomeScreens } from '../../widgets/Screens/Home'
import { MainContext } from '../../app/providers/MainContext'

export const Home = () => {
  const { setCurrentPage } = useContext(MainContext)

  useEffect(() => {
    setCurrentPage('home')
  }, [])

  return (
    <>
      {HomeScreens.map((screen, idx) => (
        <React.Fragment key={idx}>{screen}</React.Fragment>
      ))}
    </>
  )
}
