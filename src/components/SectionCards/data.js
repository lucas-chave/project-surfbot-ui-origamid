import pran1 from '../../images/pran.svg';
import pran2 from '../../images/pran1.svg';
import pran3 from '../../images/pran2.svg';

export const cardsData = (childDispatch, adultDispatch, professionalDispatch) => [
  {
    image: pran1,
    title: 'INFANTIL',
    tags: [
      'Público entre 5 e 15 anos',
      'equipamentos fornecidos',
      'Horários de sexta a sábado',
      '2 horas seguidas de aula',
    ],
    price: '49,00',
    function: childDispatch,
  },
  {
    image: pran2,
    title: 'ADULTO',
    tags: [
      'Público entre 5 e 15 anos',
      'equipamentos fornecidos',
      'Horários de sexta a sábado',
      '2 horas seguidas de aula',
    ],
    price: '49,00',
    function: adultDispatch,

  },
  {
    image: pran3,
    title: 'PROFISSIONAL',
    tags: [
      'Público entre 5 e 15 anos',
      'equipamentos fornecidos',
      'Horários de sexta a sábado',
      '2 horas seguidas de aula',
    ],
    price: '49,00',
    function: professionalDispatch,
  },
];