function Modal(props){
function gestionAnnuler(){
  props.enAnnulant();
}
function gestionConfirmation(){
  props.enConfirmant();
}
  return (
   <div className="modal">
     <p>Etes vous sure?</p>
     <button className="btn btn--alt" onClick={gestionAnnuler}> Annuler</button>
     <button className="btn" onClick={gestionConfirmation}>Confirmer</button>
   </div>

 );

}
export default Modal;