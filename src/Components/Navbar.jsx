import {  NavLink} from 'react-router-dom'
// className={({ isActive }) => (isActive ? 'active' : 'inactive')}
const Navbar = () => {
  return (
    <nav className='flex justify-between p-5'>
      <div>
        <p className='font-bold text-2xl'>AlPatrn</p>
      </div>
      <div className='md:w-2/5 justify-around mr-8 flex'>
        <ul className='hidden md:block'>
           <li > 
            <NavLink to='/' >HomePage</NavLink>
           </li> 
           <li>
            <NavLink to='/about'>Generator</NavLink>
            </li> 
           <li> <NavLink to='/about'>Pricing Plan</NavLink></li> 
           <li> <NavLink to='/about'>Blog - News</NavLink></li> 
        </ul>
        <ul className='hidden md:block'>
            <li><NavLink to='/about'>About Us</NavLink></li>
            <li><NavLink to='/about'>Features </NavLink></li>
            <li><NavLink to='/about'> Collection-2023</NavLink></li>
            <li><NavLink to='/about'>Career</NavLink></li>
        </ul>
        <div className=''>
            <select className='border p-2 border-black rounded-full'>
                <option value="Menu">Menu</option>
            </select>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
