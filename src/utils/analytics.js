export const sendEvent = (eventName, params = {}) => {
    if (window.gtag) {
        window.gtag("event", eventName, params);
    } else {
        console.warn("gtag not loaded yet");
    }
};