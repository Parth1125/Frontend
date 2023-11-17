
import avatar from '../../assets/images/temp.jpg'
const Card1 = () => {
  return (
    <div className='bg-[url(https://images.unsplash.com/photo-1682685795579-37e731bfefab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]
    w-full md:w-96 h-96 bg-opacity-20 flex flex-col justify-between p-2
    '>
      <p className='text-white border border-white w-10 rounded-full text-center'>01</p>
      <div>
        <div className='flex '>
            <img className="w-10 h-10 rounded-full" src={avatar} alt="Rounded avatar"/>
            <img className="w-10 h-10 rounded-full ml-[-10px]" src={avatar} alt="Rounded avatar"/>
            <img className="w-10 h-10 rounded-full ml-[-10px]" src={avatar} alt="Rounded avatar"/>
        </div>
        <p className='text-white '>Learn from best mentors</p>
        <button className='text-white border border-white rounded-full p-2'>START LEARNING</button>
      </div>
    </div>
  )
}

export default Card1
