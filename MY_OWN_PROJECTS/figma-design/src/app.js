import { Fragment } from "react";
import Header from './components/Header';
import CoverImage from './components/CoverImage';
import MainContent from "./components/MainContent";

const App = props => {
    return <Fragment>
        <Header />
        <CoverImage />
        <MainContent />
    </Fragment>
};

export default App;