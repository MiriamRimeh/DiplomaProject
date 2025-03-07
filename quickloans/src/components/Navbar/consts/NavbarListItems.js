/**
 * const file is from where we mark and render the contents of the drawer
 * 
 * This file contains the objects of the main navbar
 */
import HomeIcon from '@mui/icons-material/Home';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PersonIcon from '@mui/icons-material/Person';

export const mainNavbarItems = [
    {
        id:0,
        icon:  <HomeIcon />,
        label: 'Начало',
        route: '/home'
    },
    {
        id:1,
        icon:  <AssignmentTurnedInIcon />,
        label: 'Кандидатствай',
        route: '/apply'
    },
    {
        id:2,
        icon: <QuestionAnswerIcon />,
        label: 'Въпроси',
        route: '/faq'
    },
    {
        id:3,
        icon:  <PersonIcon/>,
        label: 'Профил',
        route: '/profile'
    }     
]