import TeethIcon from '../images/teeth.png';
import MuscleIcon from '../images/muscle-removebg-preview.png';
import SyringeIcon from '../images/syringe-removebg-preview.png';
import EyeIcon from '../images/eyes-removebg-preview.png';
import DrIcon from '../images/Physician-removebg-preview.png';
import HeartIcon from '../images/heart.png';

const appointmentData = [
    {
        profession: 'Dentist',
        icon: TeethIcon,
        time: '09:00-11:00',
        consultant: 'Dr. Cameron Williamson',
        cardColor: '#3634a8',
        textColor: '#fff'
    },
      {
        profession: 'Physiotherapy Appointment',
        icon: MuscleIcon,
        time: '11:00-12:00',
        consultant: 'Dr. Kevin Djones'
    },
      {
        profession: 'Health checkup complete',
        icon: SyringeIcon,
        time: '14:00 PM'
    },
    {
        profession: 'Ophthalmologist',
        icon: EyeIcon,
        time: '11:00 AM'
    },
    {
        profession: 'Cardiologist',
        icon: HeartIcon,
        time: '12:00 AM'
    },
    {
        profession: 'Neurologist',
        icon: DrIcon,
        time: '16:00 PM'
    }
]
export default appointmentData;