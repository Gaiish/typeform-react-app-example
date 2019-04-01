//this is the page for applying
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Bodymain from '../components/bodymain'
import Applyform from '../components/applyform'

export default()=>(
  <Layout title='Mobile apps Onsite - Hackers Yacht'>
    <Navbar navClass='bg-dark' />
    <Bodymain>
      <div className='row'>
        <Applyform url="https://urlOfTypeform.typeform.com/..." />
      </div>
    </Bodymain>
  </Layout>
)
