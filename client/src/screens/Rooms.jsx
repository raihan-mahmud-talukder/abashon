import { useEffect, useState } from "react"
import axios from 'axios'

export const Rooms = () => {
    const [rooms, setRooms] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = (await axios.get('/api/rooms/getallrooms')).data
                setRooms(data)
            } catch (error) { console.log(error) }
        }
        fetchData()
    }, [])

    return (
        <div className="rooms">
            {rooms.map(room => { return <Room room={room} key={room._id} /> })}
        </div>
    )
}

const Room = ({ room }) => {
    return (
        <div className="room">
            <h3>{room.name}</h3>
            <div className="info">
                <img src={room.img} alt={room.name} />
                <div className="details">
                    <span><b>Capacity: </b>{room.capacity} Person</span><br />
                    <span><b>Room Category: </b>{room.category}</span><br />
                    <span><b>Room Area: </b>{room.size} sqft</span><br />
                    <span><b>Air Conditioned: </b>{room.ac ? 'Yes' : 'No'}</span><br />
                    <span><b>Washroom: </b>{room.washroom ? 'Attached' : 'Shared'}</span><br />
                    <span><b>Dining: </b>{room.dining ? 'Seperate' : 'Shared'}</span><br />
                    <p>{room.type}</p>
                    <p>BDT {room.price}</p>
                    <button>Book Suit</button>
                </div>
            </div>
        </div>
    )
}
