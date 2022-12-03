import React, { useState , useEffect} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import Pre_ArmadoApi from '../../api/Pre_Armado';

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <FontAwesomeIcon icon= {faMagnifyingGlass} style = {{color: 'white', marginTop: '.7rem', marginRight: '1rem'}} />
  </a>
));

// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
    const [value, setValue] = useState('');



    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <Form.Control  style = {{width: '20em'}}
          autoFocus
          className="mx-3 my-2"
          placeholder="Search components"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <ul className="list-unstyled" style ={{fontSize: '1.5rem'}}>
        <span style={{marginLeft : '1rem'}}>Products</span>
        <hr style={{marginTop: '0.5rem'}} />
          {React.Children.toArray(children).filter(
            (child) =>
              !value || child.props.children.toLowerCase().startsWith(value),
          )}
          <hr/>
        </ul>
      </div>
    );
  },
);

const SearchBar = () => {

  const [ prearmadoData, setPreArmadoData] = useState([])

  useEffect(() => {
      handleOnLoad()
  },[])

  const handleOnLoad = async () => {
      const result = await Pre_ArmadoApi.findOne();
      setPreArmadoData(result.data)
      console.log(result);
  } 


  const DropDownRows = prearmadoData.map(item => {
    const {id, name, descripcion } = item
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{level}</td>
        <td>{idProfessor}</td>
      </tr>  
    )
})


    return(
    
        

    )
}
  
export default SearchBar