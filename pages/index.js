
import Meetme from '../component/meet-up'
import Layout from '../component/layout'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <Layout/>
    <div className='container testbg'>
     <p >Hi</p><button className='btn btn-primary'>FUCK</button>
     <Meetme name='sq'/>
     <Meetme name='qq'/> 
     <button className='btn btn-primary'><Link href='/new-meetup' className='text-white noUnderline'> Let's go</Link></button>

    </div>
    </>

  )
}
