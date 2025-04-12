import React from 'react';
import { ProjectBannerPage } from '../ProjectBannerPage/ProjectBannerPage';
import { ConnectSection } from '../ConnectSection/ConnectSection';
import { FAQSection } from '../FAQSection/FAQSection';

const Project = () => {
    return (
        <div className='px-3'>
            <ProjectBannerPage></ProjectBannerPage>
            <ConnectSection></ConnectSection>
            <FAQSection></FAQSection>
        </div>
    );
};

export default Project;