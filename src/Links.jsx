import { NavLink } from 'react-router-dom'
function Links() {
  return (
    <div>
      <NavLink style={({isActive})=>({color:isActive && 'yellow'})} to={'/calculate/saka'}>
        calculate
      </NavLink>
      <NavLink style={({isActive})=>(
        {
          color: isActive && 'yellow'
        }
      )} to={'/guy'}>
        GUY
      </NavLink>

    </div>
  )
}

export default Links
