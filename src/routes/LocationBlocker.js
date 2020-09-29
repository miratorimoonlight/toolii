//This is to prevent duplicate location added to history when click on the same ROUTE
//ref: https://forum.freecodecamp.org/t/routing-issue-in-react-react-router-creates-duplicate-history-to-the-same-location/423089

//My understanding: 
//history.block(prompt tha tov muk - ber URL doch knea no (return false); ber URL khos knea yes(unblock tov))

import {useHistory} from 'react-router-dom'

export default function useLocationBlocker() {
    console.log("location blocker.....")

    const history = useHistory()

    history.block((location) => {
        if(location.pathname === history.location.pathname)
            return false
        else 
            return true
    })
}
