

import Intro from './Intro/Intro.jsx'
import PolaroidMural from './Polaroids/Polaroids.jsx';
import FeatureMenu from './FeatureMenu/FeatureMenu.jsx';
import WhatsNew from './WhatsNew/WhatsNew.jsx';


function Home() {
    return(
        <>
            <Intro/>
            <PolaroidMural/>
            <FeatureMenu/>
            <WhatsNew/> 
        </>
    );
}

export default Home