import React, { useEffect, useState } from "react";

function InstallButtonFuturama() {
    const [showButton, setShowButton] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isInstalled, setIsInstalled] = useState(false); // Estado para verificar si la app está instalada

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
    }, []);

    const handleInstallClick = async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;

            if (outcome === 'accepted') {
                console.log('El usuario aceptó la instalación');
                setIsInstalled(true); // Marca que la app está instalada
            } else {
                console.log('El usuario canceló la instalación');
            }

            setDeferredPrompt(null);
            setShowButton(false);
        }
    };

    if (!showButton || isInstalled) {
        return null; // No mostrar el botón si la app ya está instalada
    }

    return (
        <button onClick={handleInstallClick} className="install-button">
            Instalar App
        </button>
    );
}

export default InstallButtonFuturama;
