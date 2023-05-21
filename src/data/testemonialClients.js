import m01 from '../assets/img/peoples/m01.jpg';
import m02 from '../assets/img/peoples/m02.jpg';
import m03 from '../assets/img/peoples/m03.jpg';
import f01 from '../assets/img/peoples/f01.jpg';
import f02 from '../assets/img/peoples/f02.jpg';

const lorem = 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...';

const testimonialClients = [
   {
      name: 'Emma Thompson',
      gender: 'F',
      text: lorem,
      image: f01,
   },
   {
      name: 'Noah Roberts',
      gender: 'M',
      text: lorem+' qui dolorem',
      image: m01,
   },
   {
      name: 'Ethan Turner',
      gender: 'M',
      text: lorem+' ipsum',
      image: m02,
   },
   {
      name: 'Olivia Parker',
      gender: 'F',
      text: lorem+lorem,
      image: f02,
   },
   {
      name: 'Lucas Scott',
      gender: 'M',
      text: lorem+' lorem ipsum dolorem quim',
      image: m03,
   },
]

export default testimonialClients;