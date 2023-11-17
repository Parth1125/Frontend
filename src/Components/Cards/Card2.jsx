import { SlArrowDownCircle } from "react-icons/sl";

const Card2 = () => {
  return (
    <div className='bg-[url(https://images.unsplash.com/photo-1682685795579-37e731bfefab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]
       w-full md:w-96 h-96 bg-opacity-20 flex flex-col justify-between p-2
    '>
      <br/>
      <div>
        <ul className="text-white items-center">
          <li className="flex justify-between">Free Edit <span><SlArrowDownCircle /></span></li>
          <br />
          <hr  className="h-6 "/>
          <li className="flex justify-between">Interactive <span><SlArrowDownCircle /></span></li>
          <br />
          <hr className="h-6"/>
          <li className="flex justify-between">Easy Interface <span><SlArrowDownCircle /></span></li>
          <br />
          <hr  className="h-6"/>
          <li className="flex justify-between">Compare to other <span><SlArrowDownCircle /></span></li>
          <br/>
        </ul>
      </div>
    </div>
  )
}

export default Card2
