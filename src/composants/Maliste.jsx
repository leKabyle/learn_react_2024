
import { useState } from 'react';
import Modal from './Modal';
import BackDrop from './BackDrop';

function Maliste(props){
  const [ modalIsOpen,setModalIsOpen ]= useState(false);

  function gestionEffaceModal(){
    //console.log('Clicked');
   // console.log(props.text);
   setModalIsOpen(true);
  }
  function gestionFermetureModal(){
    //console.log('Clicked');
   // console.log(props.text);
   setModalIsOpen(false);
  }
  return(
    <div className="carte">
    <h2>{props.text}</h2>
    <div className="actions">
        <button className="btn" onClick={gestionEffaceModal}>Efface</button>
    </div>
    { modalIsOpen && <Modal enAnnulant={gestionFermetureModal} enConfirmant={gestionFermetureModal} /> }
    { modalIsOpen && <BackDrop  enAnnulant={gestionFermetureModal}/> }
    
  </div>
  );
}
export default Maliste;
