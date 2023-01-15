import Brands from "../components/Brands";
import GridImages from "../components/GridImages";
import SpecialComments from "../components/SpecialComments";
import SpecialProducts from "../components/SpecialProducts";
import SuggestedProducts from "../components/SuggestedProducts";

const HomePage = () => {
    return(
        <>
            <SpecialProducts/>
            <GridImages/>
            <SuggestedProducts/>
            <SpecialComments />
            <Brands />
        </>
    );
};

export default HomePage;