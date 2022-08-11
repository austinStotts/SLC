import Header from "../components/header";
import Footer from "../components/footer";
import SearchResults from "./searchResults";

import { useRouter } from "next/router";

export default function Search () {
    let router = useRouter()
    let toShow = (showid) => {
        router.push(`/show/${showid}`);
    }

    return (
        <div className="search-main-wrapper">
            <Header />
            <SearchResults ts={toShow}/>
            <Footer />
        </div>
    )
}