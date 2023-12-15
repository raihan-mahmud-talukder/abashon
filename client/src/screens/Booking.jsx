import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from 'axios'

export const Booking = () => {
    const [room, setRoom] = useState()
    const { roomid } = useParams()
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('currentUser'))

    useEffect(() => {
        const fetchData = async () => {
            if (!user) { navigate = '/login' }
            try {
                const data = (await axios.post('/api/rooms/getroombyid', { roomid })).data
                setRoom(data)
                console.log(data)
            } catch (error) { console.log(error) }
        }
        fetchData()
    }, [])

    const confirmed = async () => {
        const booking = { room, user }
        try {
            const result = await axios.post('/api/bookings/bookroom', booking)
            alert('Booking is confirmed!')
            navigate('/rooms')
        }
        catch (error) { console.log(error) }
    }

    return (
        <div className="book">
            <div className="room">
                <h3>Booking Details</h3>
                {room && (
                    <>
                        <div className="info">
                            <img src={room.img} alt={room.name} />
                            <div className="details">
                                <span>{room.name}</span><br />
                                <span><b>Name: </b>{user.name}</span><br />
                                <span><b>Email: </b>{user.email}</span><br />
                                <span><b>Mobile: </b>{user.mobile}</span><br />
                                <span><b>Admin: </b>{user.admin ? 'YES' : 'NO'}</span><br />
                                <p>{room.type}</p>
                                <p>BDT {room.price}</p>
                                <button onClick={confirmed}>Confirm</button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
