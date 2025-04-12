import React from 'react';
import { ProjectBannerPage } from '../ProjectBannerPage/ProjectBannerPage';
import { ConnectSection } from '../ConnectSection/ConnectSection';

const Project = () => {
    return (
        <div className='px-3'>
            <ProjectBannerPage></ProjectBannerPage>
            <ConnectSection></ConnectSection>
        </div>
    );
};

export default Project;