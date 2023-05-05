import { ContextProvaider } from "../../context/Context"
import Footer from "./Footer"
import Header from "./header/Header"

export default function Layout({ children }) {
    return (
        <ContextProvaider>
            <Header />
            {children}
            <Footer />
        </ContextProvaider>
    )
}
