import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/Testing';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
        <nav>
           <Logo/>
        </nav>
        <div className='container page'>
            <div className='info'>
            <h2> Job <span>Tracking</span> App</h2>
            <p>With our huge networks and clients, getting a job,
             the one you like is just a few steps away.</p>
             <button className='btn btn-hero'>Login/Register</button>
            </div>
            <img src={main} alt='job hunt' className='img main-img' />
        </div>
    </Wrapper>
  )
}

export default Landing