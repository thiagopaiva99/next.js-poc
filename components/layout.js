import Header from './header'
import Footer from './footer'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  fontFamily: 'Arial',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout