import { me } from 'appbit';
import clock from 'clock';
import display from 'display';
import document from 'document';
import * as date from './date';
import * as time from './time';

const appElement = document.getElementById('app');

(() => {
    // Initialize clock
    clock.granularity = 'minutes';
    clock.ontick = handleTick;
    
    // Initialize AOD
    if (display.aodAvailable && me.permissions.granted('access_aod')) {
        display.aodAllowed = true;
        display.onchange = handleDisplayChange;
    }

    // Run
    handleDisplayChange();
})();

function handleDisplayChange() {
    appElement.class = display.aodActive ? 'aod' : '';
    handleTick();
}

function handleTick(e) {
    // Update time
    const now = e ? e.date : new Date();
    time.tick(now);

    // Update non-AOD
    if (!display.aodActive) {
        date.tick(now);
    }
}