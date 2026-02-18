import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Fetch = () => {

    const [number, setNumber] = useState(0)
    const [name, setName] = useState("wG")
    const [allusers, setallusers] = useState([])

    useEffect(() => {
        console.log("use effect called")

        const makeRequest = async () => {
            try {
                let data = await axios.get('https://jsonplaceholder.typicode.com/users')
                console.log(data.data);
                setallusers(data.data)

            } catch (error) {
                console.log(error);
            }

        }

        makeRequest()
    }, [name])

    // useEffect(() => {
    //     first

    //     return () => {
    //         second
    //     }
    // }, [third])


    // without dependency array, use effect  will run on every render and when any state changes in the 
    // component, it will run the cleanup function before running the effect function again.
    // empty dep array-> onload runs , when any state changes it doesn't run
    // dependency array with a state ->onload it runs, it then runs when that particular state changes.
    return (
        <div>



            <button className='btn btn-dark' onClick={() => setNumber(number + 1)}> {number}</button>
            <button className='btn btn-warning' onClick={() => setName("wG Ventures")}>{name}</button>

            <div className='d-flex flex-wrap gap-3 mt-3'>


                {
                    allusers.map((user, index) => {
                        return <div key={user.id} className="card" style={{ width: "18rem" }} >
                            {/* {<img src="..." className="card-img-top" alt="..." />} */}
                            <div className="card-body">
                                <h5 className="card-title"> <strong>Name:</strong> {user.name}</h5>
                                <p className="card-text"><strong>Email:</strong> {user.email}</p>
                                <p className='card-text'><strong>Username:</strong> {user.username}</p>
                                <p className='card-text'><strong>Phone:</strong> {user.phone}</p>
                                <p className='card-text'><strong>Website:</strong> {user.website}</p>
                                <p className='card-text'><strong>Company:</strong> {user.company.name}</p>
                                <p className='card-text'><strong>Address:</strong> {user.address.street + ' ' + user.address.suite + ' ' + user.address.city + ' '+ user.address.zipcode + ''+ user.address.geo.lat + ' ' + user.address.geo.lng}</p>


                                <a href="#" className="btn btn-warning">TOUCH mE</a>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Fetch

