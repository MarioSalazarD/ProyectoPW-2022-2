import Button from 'react-bootstrap/Button';


const Botones = () => {
    return (
        <>
                    <Button href="#" 
                      style={{'background-color':'grey', border: 'none', color: 'black',
                      padding: '8px 50px', 'text-align': 'center', 'text-decoration': 'none',
                      display: 'inline-block', 'font-size': '16px'}}>
                      Back</Button>
                      <div className='divider'/>
                      <Button href="#"
                      style={{'background-color':'#571AA1', border: 'none', color: 'white',
                      padding: '8px 50px', 'text-align': 'center', 'text-decoration': 'none',
                      display: 'inline-block', 'font-size': '16px'}}>
                      Next</Button>
        </>)

}

export default Botones;