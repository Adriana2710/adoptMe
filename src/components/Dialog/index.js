import './dialog.css'


const Dialog = ( {message, onCancel, deleteYes} ) => {
    console.log(deleteYes, "delete")
    return (
        <div className='dialog__container'>
            <div className='dialog__child'>
                <h3 className='dialog__message'>{message}</h3>
                <div className='dialog__options'>
                    <button className='btn__green' onClick={()=> deleteYes ? deleteYes() : false}>Yes</button>
                    <button className='btn__red' onClick={()=> onCancel()}>No</button>
                </div>
            </div>
            
        </div>

      
    )   
}; 

export default Dialog