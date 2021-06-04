export const questionNO = [
  {
    fieldGroupClassName: 'row',
    ref_id: 'areyoualergic_NO',
    fieldGroup: [
      {
        key: 'doyouusedrug',
        type: 'radio',
        className: 'col-3',
        templateOptions: {
          label: 'Do you use Drug?',
          placeholder: 'Do you use Drug?',
          required: true,
          options: [
            { value: 'YES', label: 'Yes' },
            { value: 'NO', label: 'No' },
          ],
          // "change": modelChangeEvent
        },
      },
    ],
  },
  {
    fieldGroupClassName: 'row',
    ref_id: 'doyouusedrug_NO',
    fieldGroup: [
      {
        key: 'doyousmoke',
        type: 'radio',
        className: 'col-3',
        templateOptions: {
          label: 'Do you smoke?',
          placeholder: 'Do you smoke?',
          required: true,
          options: [
            { value: 'YES', label: 'Yes' },
            { value: 'NO', label: 'No' },
          ],
          // "change": modelChangeEvent
        },
      },
    ],
  },
];
export const questionYES = [
  {
    fieldGroupClassName: 'row',
    ref_id: 'areyoualergic_YES',
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
            { label: 'Alergy B', value: 'Alergy B' }
          ],
          // "change": modelChangeEvent
        },
      },
    ],
  },
  {
    fieldGroupClassName: 'row',
    ref_id: 'doyouusedrug_YES',
    fieldGroup: [
      {
        key: 'whattypeofalergydoyouuse',
        type: 'select',
        className: 'col-3',
        templateOptions: {
          label: 'What type of drug do you use?',
          placeholder: 'Select',
          multiple: true,
          options: [
            { label: 'Drug A', value: 'Drug A' },
            { label: 'Drug B', value: 'Drug B' }
          ],
          // "change": modelChangeEvent
        },
      },
    ],
  },

  {
    fieldGroupClassName: 'row',
    ref_id: 'doyousmoke_YES',
    fieldGroup: [
      {
        "className": "col-3",
        "type": "input",
        "key": "cigarettesperday",
        "templateOptions": {
          "label": "How many cigarettes per day?"
        }
      },
    ],
  },
];
export const question = [
  {
    fieldGroupClassName: 'row',

    fieldGroup: [
      {
        key: 'areyoualergic',
        type: 'radio',
        className: 'col-3',
        templateOptions: {
          label: 'Are you alergic?',
          placeholder: 'Are you alergic?',
          required: true,
          options: [
            { value: 'YES', label: 'Yes' },
            { value: 'NO', label: 'No' },
          ],
          // "change": modelChangeEvent
        },
      },
    ],
  },
  // ,
  // {
  //   className: 'section-label',
  //   template: '<hr /><div><strong>Are you alergic?</strong></div>',
  // },
  // {
  //   fieldGroupClassName: 'row',
  //   fieldGroup: [
  //     {
  //       key: 'areyoualergic',
  //       type: 'radio',
  //       className: 'col-4',
  //       templateOptions: {
  //         // label: 'Are you alergic?',
  //         // placeholder: 'Are you alergic?',
  //         required: true,
  //         options: [
  //           { value: 'YES', label: 'Yes' },
  //           { value: 'NO', label: 'No' },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   className: 'section-label',
  //   template: '<hr /><div><strong>Do you use Drugs?</strong></div>',
  // },
  // {
  //   fieldGroupClassName: 'row',
  //   fieldGroup: [
  //     {
  //       key: 'doyouusedrugs',
  //       type: 'radio',
  //       className: 'col-4',
  //       templateOptions: {
  //         // label: 'Are you alergic?',
  //         // placeholder: 'Are you alergic?',
  //         required: true,
  //         options: [
  //           { value: 'YES', label: 'Yes' },
  //           { value: 'NO', label: 'No' },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // {
  //   className: 'section-label',
  //   template: '<hr /><div><strong>Do you moke?</strong></div>',
  // },
  // {
  //   fieldGroupClassName: 'row',
  //   fieldGroup: [
  //     {
  //       key: 'doyousmoke',
  //       type: 'radio',
  //       className: 'col-4',
  //       templateOptions: {
  //         // label: 'Are you alergic?',
  //         // placeholder: 'Are you alergic?',
  //         required: true,
  //         options: [
  //           { value: 'YES', label: 'Yes' },
  //           { value: 'NO', label: 'No' },
  //         ],
  //       },
  //     },
  //   ],
  // },
  // { template: '<hr />' },
];
