const headShotA = require('../../../assets/images/headshota.jpg');
const headShotB = require('../../../assets/images/headshotb.jpg');
const headShotC = require('../../../assets/images/headshotc.jpg');
const headShotD = require('../../../assets/images/headshotd.jpg');

import { Actor } from '../../../../types/actor';

export const ActorList: Actor[] = [
  {
    id: 1,
    firstName: 'Tom',
    lastName: 'Cruise',
    image: headShotA,
  },
  {
    id: 2,
    firstName: 'Melanie',
    lastName: 'B',
    image: headShotB,
  },
  {
    id: 3,
    firstName: 'Brighton',
    lastName: 'Bay',
    image: headShotC,
  },
  {
    id: 4,
    firstName: 'Seemore',
    lastName: 'Gates',
    image: headShotD,
  },
];
