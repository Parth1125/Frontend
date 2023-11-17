
import Navbar from '../Components/Navbar'
import Section1 from '../Components/Section1'
import Card1 from '../Components/Cards/Card1'
import Card2 from '../Components/Cards/Card2'
import Card3 from '../Components/Cards/Card3'
const Home = () => {
  return (
    <div >
      <Navbar/>
      <main  className='p-5'>
        <Section1/>
        <section className='md:flex md:flex-row gap-2 mt-10 flex flex-col items-center'>
            <Card1/>
            <Card2/>
            <Card3/>
        </section>
      </main>
    </div>
  )
}

export default Home
