import Layout from '../components/layout.js'
import Input from '../components/input'

const Contact = () => (
    <Layout>
       <form>
           <Input label="Name" type="text" placeholder="Name" />
           <Input label="Email" type="email" placeholder="Email" />
       </form>
    </Layout>
)
  
export default Contact