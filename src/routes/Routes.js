import React from 'react'
import { Route } from 'react-router-dom'
// import NavBar from '../components/NavBar'
import BunchOfCards from '../components/BunchOfCards'
import Calculator from '../pages/Calculator'
import MDPreviewer from '../pages/MDPreviewer'
import AboutMe from '../pages/AboutMe'

export default function Routes() {
    return (
        <React.Fragment>
            <Route path="/" exact component={BunchOfCards} />
            <Route path="/calculator"  component={Calculator} />
            <Route path="/mdpreviewer"  component={MDPreviewer} />
            <Route path="/aboutme"  component={AboutMe} />
        </React.Fragment>
    )
}
