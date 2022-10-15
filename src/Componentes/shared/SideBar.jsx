import Container from 'react-bootstrap/Container';
import './SideBar.css'
import Button from 'react-bootstrap/Button';



const SideBar = () => 
{
    return(
        <div className='MenuBox'>
            <ul>
                <li>
                    <Button id='Button' href="/Shoppinghistory">Order History</Button>
                </li>
                <li>
                    <Button id='Button' href="Profile">Profile Info</Button>
                </li>
                <li>
                    <Button id='Button' href="/">Log Out</Button>
                </li>
            </ul>
        </div>
    )
}

export default SideBar