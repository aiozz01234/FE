import React, {useState,useEffect} from 'react'
import Homepage from './components/homepage/Homepage'
import './App.css'
import Popup from './components/popup/Popup'
const App = () => {
        const [ showPopup, setShowPopup ] = useState( false );
        const [popUpData, setPopUpdata] = useState({})
        return (
                <React.Fragment>
                        <Homepage setPopUpdata={setPopUpdata} setShowPopup={setShowPopup} />
                        {showPopup?<Popup popUpData={popUpData} setPopUpdata={setPopUpdata} setShowPopup={setShowPopup} />: null}
                </React.Fragment>
                      
                
        )
}

export default App
