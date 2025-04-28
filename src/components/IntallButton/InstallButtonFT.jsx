import React,{useEffect,useState} from "react";

function InstallButton(){
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setShowButton(true);
        };
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    },[]);

    const handleInstallClick = async () => {
        if (deferredPrompt){
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            if (outcome === 'accepted'){
                console.log('El usuario acepto la instalacion');
            }
            else {
                console.log('El usuario cancelo la instalacion');
            }

            //reinciar
            setDeferredPrompt(null);
            setShowButton(false);
        }
    };
    if (!showButton){
        return null;
    }
    return(
        <button onClick={handleInstallClick} className="install-button">
            Instalar App
        </button>
    );
}

export default InstallButton;