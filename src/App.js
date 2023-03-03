import { DEFAULT, DEFAULT_CONTENTS, NAV } from "./data/default";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import MainVisual from "./pages/MainVisual";
import TopBanner from "./pages/TopBanner";
const App = () => {
    return (
        <>
            <TopBanner DEFAULT_CONTENTS={DEFAULT_CONTENTS} />
            <Header DEFAULT={DEFAULT} NAV={NAV} />
            <MainVisual DEFAULT_CONTENTS={DEFAULT_CONTENTS} />
            <Footer DEFAULT={DEFAULT} NAV={NAV} />
        </>
    )

}

export default App;