import frontLeverImage from '../assets/excercises/front-lever.webp';
import dragonFlagImage from '../assets/excercises/Leg-Raise-Dragon-Flag.gif'
import dipsImage from '../assets/excercises/dips.webp'
import humanflagImage from '../assets/excercises/humanflag.webp'
import l_sitImage from '../assets/excercises/L-Sit.gif'
import muscleupImage from '../assets/excercises/muscle-up.gif'
import push_upImage from '../assets/excercises/push-up.webp'
import pistolSquatImage from '../assets/excercises/pistolsquat.png'
import squatImage from '../assets/excercises/squat.png'
import pull_upImage from '../assets/excercises/pull-up.webp'



export const skillTreeData = [
  {
    id: 'root',
    name: 'Squat',
    description: 'Basic exercise for strengthening the legs.',
    difficulty: 3,
    prerequisites: ['None'],
    youtubeLink: 'https://www.youtube.com/watch?v=ubdIGnX2Hfs',
    connections: [],
    image: squatImage
  },
  {
    id: 'pullup',
    name: 'Pull-up',
    description: 'Exercise for strengthening the upper body, especially the back and arms.',
    difficulty: 7,
    prerequisites: ['Squat'],
    youtubeLink: 'https://www.youtube.com/watch?v=eGo4IYlbE5g&t=2s',
    connections: ['root'],
    image: pull_upImage
  },
  {
    id: 'pushup',
    name: 'Push-up',
    description: 'Basic exercise for chest, triceps, and shoulders.',
    difficulty: 3,
    prerequisites: ['None'],
    youtubeLink: 'https://www.youtube.com/watch?v=IODxDxX7oi4',
    connections: [],
    image: push_upImage
  },
  {
    id: 'dips',
    name: 'Dips',
    description: 'Exercise for strengthening the triceps and chest.',
    difficulty: 6,
    prerequisites: ['Push-up'],
    youtubeLink: 'https://www.youtube.com/watch?v=2z8JmcrW-As',
    connections: ['pushup'],
    image: dipsImage
  },
  {
    id: 'muscleup',
    name: 'Muscle-up',
    description: 'Advanced upper-body pulling and pushing exercise.',
    difficulty: 9,
    prerequisites: ['Pull-up', 'Dips'],
    youtubeLink: 'https://www.youtube.com/watch?v=_iYvlSMgUGE',
    connections: ['pullup', 'dips'],
    image: muscleupImage
  },
  {
    id: 'l-sit',
    name: 'L-sit',
    description: 'Core exercise performed while sitting, strengthening the abs and hip flexors.',
    difficulty: 7,
    prerequisites: ['Push-up'],
    youtubeLink: 'https://www.youtube.com/watch?v=Qv6j5gZyBQ8',
    connections: ['pushup'],
    image: l_sitImage
  },
  {
    id: 'pistol-squat',
    name: 'Pistol Squat',
    description: 'Advanced single-leg squat variation.',
    difficulty: 8,
    prerequisites: ['Squat', 'L-sit'],
    youtubeLink: 'https://www.youtube.com/watch?v=vq5-vdgJc0I',
    connections: ['squat', 'l-sit'],
    image: pistolSquatImage
  },
  {
    id: 'front-lever',
    name: 'Front Lever',
    description: 'Advanced core exercise with body fully extended parallel to the ground.',
    difficulty: 9,
    prerequisites: ['Pull-up', 'L-sit'],
    youtubeLink: 'https://www.youtube.com/watch?v=5g8-sj-8snc',
    connections: ['pullup', 'l-sit'],
    image: frontLeverImage

  },
  {
    id: 'human-flag',
    name: 'Human Flag',
    description: 'Advanced bodyweight exercise where the body is held horizontally, supported by a vertical pole.',
    difficulty: 10,
    prerequisites: ['Front Lever', 'L-sit'],
    youtubeLink: 'https://www.youtube.com/watch?v=TF9XhvYh_m8',
    connections: ['front-lever', 'l-sit'],
    image: humanflagImage
  },
  {
    id: 'dragon-flag',
    name: 'Dragon Flag',
    description: 'Advanced exercise focusing on core strength with the body lifted in a straight line.',
    difficulty: 10,
    prerequisites: ['L-sit', 'Front Lever'],
    youtubeLink: 'https://www.youtube.com/watch?v=7fRemwjcXOQ&t=156s',
    connections: ['l-sit', 'front-lever'],
    image: dragonFlagImage
  },
];
