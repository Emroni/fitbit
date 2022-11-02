import document from 'document';

const element = document.getElementById('time');

export function tick(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    element.text = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
}