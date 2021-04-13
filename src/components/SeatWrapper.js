import React, {useState,useEffect} from 'react';
import Seat from './Seat';

const SeatWrapper = ()=>{
    const availableSeatCount = 10;
    const maxAllowedSeat = 3;
    const [state,setState]=useState({availableSeats:[],selectedSeats:[]});

    useEffect(()=>{
        console.log('mountedv-----')
        setAvailableSeats(availableSeatCount);
    }, []);

    const setAvailableSeats = (count) => {
        console.log('set avail seats -----')
        const availableSeatsArr = [];
        for (let index = 1; index <= count; index++) {
            availableSeatsArr.push(index);            
            setState({...state,availableSeats:availableSeatsArr})
        }
    }

    const renderSeats = () => {
        console.log('inside renderSeats');
        return state.availableSeats.map((seat)=>{
            return (<Seat key={seat} data={seat} onClick={handleSeatClick} selected={state.selectedSeats.includes(seat)}/>)
        })
    }

    const handleSeatClick = (id) => {
        console.log('click id: ', id)
        let updatedSelectedSeat;
        if(state.selectedSeats.includes(id)){
            // remove seat
            updatedSelectedSeat = state.selectedSeats.filter(currentSeat => id !== currentSeat)
        } else {
            //add 
            if(state.selectedSeats.length < maxAllowedSeat) {
                updatedSelectedSeat = [...state.selectedSeats, id];            
                console.log('updatedSelectedSeat',updatedSelectedSeat);
            }else {
                return ("Maximum Allowed Seat Capacity is 3")
            }
            
        }
        setState({ ...state, selectedSeats: updatedSelectedSeat})
    }

    return(
        <div style={{textAlign:'center'}}>
            <h1>Seat Allocation!</h1>
            <div style={{ background: '#eee', maxWidth: 600, margin: '0 auto', padding: 10, display: 'flex'}}>
                {renderSeats()}
            </div>
            <small><i>max {maxAllowedSeat} seats allowed</i></small>
        </div>
    )
}


export default SeatWrapper;