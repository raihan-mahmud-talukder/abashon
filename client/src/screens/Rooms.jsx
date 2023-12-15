import { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

export const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [duplcate, setDuplicate] = useState([])
    const [filter, setFilter] = useState('all')
    document.title = 'ROOMS'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = (await axios.get('/api/rooms/getallrooms')).data
                setRooms(data)
                setDuplicate(data)
            } catch (error) { console.log(error) }
        }
        fetchData()
    }, [])

    const filtered = event => {
        setFilter(event)
        if (event !== 'all') {
            if (event === 'ac') {
                const temp = duplcate.filter(room => room.ac)
                setRooms(temp)
            } else if (event === 'dining') {
                const temp = duplcate.filter(room => room.dining)
                setRooms(temp)
            } else if (event === 'washroom') {
                const temp = duplcate.filter(room => room.washroom)
                setRooms(temp)
            } else {
                const temp = duplcate.filter(room => room.type === event)
                setRooms(temp)
            }
        } else { setRooms(duplcate) }
    }

    return (
        <div className="rooms">
            <span>Filter:</span>
            <select value={filter} onChange={event => filtered(event.target.value)}>
                <option value="all">All</option>
                <option value="economy">Economy</option>
                <option value="family">Family</option>
                <option value="premium">Premium</option>
                <option value="luxury">Luxury</option>
                <option value="corporate">Corporate</option>
                <option value="ac">A/C</option>
                <option value="washroom">Washroom</option>
                <option value="dining">Dining</option>
            </select>
            <h4>{rooms.length} rooms are available</h4>
            {rooms.map(room => { return <Room room={room} key={room._id} /> })}
        </div>
    )
}

const Room = ({ room }) => {
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('currentUser'))

    const privateRoute = () => {
        console.log(room._id)
        if (user) {
            alert('Confirmed')
            navigate(`/book/${room._id}`)
        } else {
            alert('login first!')
            navigate('/login')
        }
    }
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
                    <button onClick={privateRoute}>Book Suit</button>
                </div>
            </div>
        </div>
    )
}
