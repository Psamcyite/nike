import React from 'react';
// import SoundModal from './SoundModal';
// import WifiModal from './WifiModal';
// import ChromePopup from './ChromePopup';

const Desktop = () => {
  return (
    <div className='desktop'>
        {/** Icons on the desktop */}
        <div className='icons-desktop'>
            {/** ... Desktop icons content ... */}
        </div>
    
        {/** Modals */}
        <SoundModal />
        <WifiModal />
        <ChromePopup />
    </div>
  );
};

export default Desktop;