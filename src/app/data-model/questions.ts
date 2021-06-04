
export const question = [
  {
    key: 'areyoulaergic',
    wrappers: ['panel'],
    defaultValue: 'No',
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
    defaultValue: 'No',
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
    defaultValue: 'No',
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
  {
    key: 'Have you been infected by COVID-19 on last 15 days?',
    wrappers: ['panel'],
    defaultValue: 'No',
    templateOptions: { label: 'Have you been infected by COVID-19 on last 15 days?' },
    fieldGroup: [
      {
        key: 'What disease?',
        type: 'select',
        className: 'col-3',
        templateOptions: {
          label: 'What disease?',
          placeholder: 'Select',
          multiple: true,
          options: [
            { label: 'Disease A', value: 'Disease A' },
            { label: 'Disease B', value: 'Disease B' },
          ],
        },
      },
    ],
  },
  {
    key: 'Do you have any symptoms?',
    wrappers: ['panel'],
    defaultValue: 'No',
    templateOptions: { label: 'Do you have any symptoms?' },
    fieldGroup: [
      {
        className: 'col-3',
        type: 'input',
        key: 'What disease?',
        templateOptions: {
          label: 'What disease?',
        },
      },
    ],
  },
];
