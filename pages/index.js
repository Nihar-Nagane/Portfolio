import About from '../components/about'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Header from '../components/header'
import Info from '../components/info'
import Portfolio from '../components/portfolio'
import Skills from '../components/skills'

export default function Home(props) {
  return (
    <div>
      <main className='main'>
      <Header/>
      <Info/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact EMAIL_JS_SERVICE_ID={props.EMAIL_JS_SERVICE_ID} EMAIL_JS_TEMPLATE_ID={props.EMAIL_JS_TEMPLATE_ID} EMAIL_JS_PUBLIC_KEY={props.EMAIL_JS_PUBLIC_KEY}  />
      <Footer/>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  return {
    props: {
            EMAIL_JS_SERVICE_ID: process.env.EMAIL_JS_SERVICE_ID,
            EMAIL_JS_TEMPLATE_ID: process.env.EMAIL_JS_TEMPLATE_ID,
            EMAIL_JS_PUBLIC_KEY: process.env.EMAIL_JS_PUBLIC_KEY,
  }
}
}