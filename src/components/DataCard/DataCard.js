import './DataCard.scss';
function DataCard(props) {
     
  let Cardclasses = ["Card"];
  let contentClasses  = ["iconify"];
  
  if(props.active){
    Cardclasses.push("active");
  }
  
  return (
    <button 
      className={Cardclasses.join(" ")}
      onClick={props.clicked}
      disabled={props.active} 
    >
      <span 
        className={contentClasses.join(" ")} 
        data-icon={props.value} 
        data-inline="false" 
        data-width="60" 
        data-height="60"
      >
      </span>
    </button>
  );
    

    
}
export default DataCard;