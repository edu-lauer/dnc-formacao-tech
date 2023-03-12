import logoDnc from '../../assets/logo-dnc.png'
import './header.scss'


const Header = () => {
    return (
        <div className='header'>
            <img src={logoDnc} alt="logo da escola DNC" className='header__img'></img>
        </div>
    )
}

export default Header