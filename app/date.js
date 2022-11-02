import document from 'document';

const element = document.getElementById('date');
const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export function tick(date) {
    const day = date.getDay();
    element.text = `${days[day]} ${date.getDate()}`;
}