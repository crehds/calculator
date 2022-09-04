import { Back } from '../../../Icons/Back';
import { CalendarIcon } from '../../../Icons/CalendarIcon';
import { Check } from '../../../Icons/Check';

export const keys = [
  {
    props: {
      color: 'gray-100',
      type: 'operation',
    },
    children: '÷',
  },
  {
    props: {
      color: 'white',
    },
    children: '1',
  },
  {
    props: {
      color: 'white',
    },
    children: '2',
  },
  {
    props: {
      color: 'white',
    },
    children: '3',
  },
  {
    props: {
      color: 'white',
      type: 'back',
    },
    children: <Back />,
  },
  {
    props: {
      color: 'gray-100',
      type: 'operation',
    },
    children: 'x',
  },
  {
    props: {
      color: 'white',
    },
    children: '4',
  },
  {
    props: {
      color: 'white',
    },
    children: '5',
  },
  {
    props: {
      color: 'white',
    },
    children: '6',
  },
  {
    props: {
      color: 'white',
      type: 'reset',
    },
    children: 'c',
  },
  {
    props: {
      color: 'gray-100',
      type: 'operation',
    },
    children: '-',
  },
  {
    props: {
      color: 'white',
    },
    children: '7',
  },
  {
    props: {
      color: 'white',
    },
    children: '8',
  },
  {
    props: {
      color: 'white',
    },
    children: '9',
  },
  {
    props: {
      color: 'cyan-500',
      type: 'future',
      column: [5, 6],
      row: [4, 6],
    },
    children: <Check />,
  },
  {
    props: {
      color: 'gray-100',
      type: 'operation',
    },
    children: '+',
  },
  {
    props: {
      color: 'white',
    },
    children: <CalendarIcon />,
  },
  {
    props: {
      color: 'white',
    },
    children: '0',
  },
  {
    props: {
      color: 'white',
      type: 'decimal',
    },
    children: '.',
  },
];
