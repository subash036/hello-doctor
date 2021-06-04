
export const question = [
  {
    key: 'areyoulaergic',
    wrappers: ['panel'],
    templateOptions: { label: 'Are you alergic?' },
    fieldGroup: [
      {
        key: 'whattypeofalergydoyouhave',
        type: 'select',
        className: 'col-3',
        templateOptions: {
          label: 'What type of alergy do you have?',
          placeholder: 'Select',
          multiple: true,
          options: [
            { label: 'Alergy A', value: 'Alergy A' },
            { label: 'Alergy B', value: 'Alergy B' },
          ],
          // "change": modelChangeEvent
        },
      },
    ],
  },
  {
    key: 'doyouusedrug',
    wrappers: ['panel'],
    templateOptions: { label: 'Do you use drug?' },
    fieldGroup: [
      {
        key: 'Whattypeofalergydoyouhave',
        type: 'select',
        className: 'col-3',
        templateOptions: {
          label: 'What type of drug do you use?',
          placeholder: 'Select',
          multiple: true,
          options: [
            { label: 'Drug A', value: 'Drug A' },
            { label: 'Drug B', value: 'Drug B' },
          ],
        },
      },
    ],
  },
  {
    key: 'doyousmoke',
    wrappers: ['panel'],
    templateOptions: { label: 'Do you smoke?' },
    fieldGroup: [
      {
        className: 'col-3',
        type: 'input',
        key: 'howmanyperday',
        templateOptions: {
          label: 'How many cigarettes per day?',
        },
      },
    ],
  },
];
