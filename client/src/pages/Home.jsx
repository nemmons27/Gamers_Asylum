import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    let navigate = useNavigate()

    return (
        <div>
            <h3>Gamer's Asylum</h3>
            <p>Been turning Tweaking Timmy into Saiyan Gods since '23</p>
            <br />
            <br />
            <section className='home-login'>
                <button className='button' onClick={() => navigate('/register')}>Sign Up Here</button>
                <button className='button' onClick={() => navigate('/login')}>Log In</button>
            </section>
        </div>
    )
}

export default Home