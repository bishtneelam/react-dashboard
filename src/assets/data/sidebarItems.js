import dashboardIcon from '../images/dashboard.jpg';
import historyIcon from '../images/history.png';
import calendarIcon from '../images/calendar.png';
import appointmentIcon from '../images/Appointment.png';
import statisticsIcon from '../images/stats.png';
import chatIcon from '../images/chat.jpeg';
import supportIcon from '../images/support2.png';
import settingsIcon from '../images/settings.png'

const sidebarItems = [
  {
    section: 'General',
    items: [
      { label: 'Dashboard', icon: dashboardIcon },
      { label: 'History', icon: historyIcon },
      { label: 'Calendar', icon: calendarIcon },
      { label: 'Appointments', icon: appointmentIcon },
      { label: 'Statistics', icon: statisticsIcon },
    ],
  },
  {
    section: 'Tools',
    items: [
      { label: 'Chat', icon: chatIcon },
      { label: 'Support', icon: supportIcon },
    ],
  },
  {
    section: '',
    items: [
      { label: 'Setting', icon: settingsIcon },
    ],
  },
];
export default sidebarItems;