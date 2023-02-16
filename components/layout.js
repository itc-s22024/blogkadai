import Header from 'components/header'
import Footer from 'components/footer'
import Container from './container'

const Layout = ({ children }) =>
    <>
        <Header />

        <main>
            <Container>{children}</Container>
        </main>

        <Footer />
    </>

export default Layout