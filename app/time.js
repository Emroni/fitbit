import clock from 'clock';
import document from 'document';

const time = document.getElementById('time');

clock.granularity = 'minutes';

clock.ontick = (e) => {
    const hours = e.date.getHours();
    const minutes = e.date.getMinutes();
    time.text = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}