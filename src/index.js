import Header from './components/header';
import Footer from './components/footer';
import Home from './components/pages/home';
import About from './components/pages/about';
import Contact from './components/pages/contact';
import Portfolio from './components/pages/portfolio';

class App {
    render() {
        return (
            <div>
                <Header/>
                <Home />
                <About />
                <Portfolio />
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default App;