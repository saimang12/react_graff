import { DEFAULT, DEFAULT_CONTENTS, NAV } from "./data/default";
import Header from "./pages/Header";
import TopBanner from "./pages/TopBanner";
const App = () => {
    return (
        <>
            <TopBanner DEFAULT_CONTENTS={DEFAULT_CONTENTS} />
            <Header DEFAULT={DEFAULT} NAV={NAV} />
        </>
    )

}

export default App;