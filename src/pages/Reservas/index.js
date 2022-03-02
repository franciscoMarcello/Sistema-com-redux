import React from 'react';
import {MdDelete, MdAddCircle, MdRemoveCircle} from 'react-icons/md'
import {useSelector, useDispatch} from 'react-redux'
import {removeReserve, updateAmountRequeste} from '../../store/modules/reserve/actions'
import './reserva.css'
export default function Reservas() {

  const dispatch = useDispatch();
  function handleRemove(id){
    dispatch(removeReserve(id));

  }

  function incrementeAmount(trip){
    dispatch(updateAmountRequeste(trip.id, trip.amount+1))
  }

  function decrementAmount(trip){
    dispatch(updateAmountRequeste(trip.id, trip.amount-1))
  }
 
  
  const reserves = useSelector(state => state.reserve)
 return (
   <div>
       <h1 className='title'>Voce solicitou {reserves.length} reserva</h1>
       {reserves.map(reserve=>(
          <div className='reservas' key={reserve.id}>
            <img src={reserve.image} alt={reserve.title}/>
            <strong>{reserve.title}</strong>
            <div id="amount">
              <button type='button' onClick={()=> decrementAmount(reserve)}>
                <MdRemoveCircle size={25} color="#191919"/>
                </button>
            <input type='text' readOnly value={reserve.amount}/>
            <button type='button' onClick={()=> incrementeAmount(reserve)}>
                <MdAddCircle size={25} color="#191919"/>
                </button>
            </div>
            <button type='button' onClick={() => handleRemove(reserve.id)}>
              <MdDelete size={20}  color="#191919"/>
            </button>
        </div>
       ))}
      
       <footer>
         <button type='button'>Solicitar Reservas</button>
       </footer>
   </div>
 );
}