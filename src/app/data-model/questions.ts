export const question = [
  {
    "className": "section-label",
    "template": "<hr /><div><strong>Are you alergic?</strong></div>"
  },
  {
    "fieldGroupClassName": "row",
    "fieldGroup": [
      {
        key: 'areyoualergic',
        type: 'radio',
        "className": "col-4",
        templateOptions: {
          // label: 'Are you alergic?',
          // placeholder: 'Are you alergic?',
          description: 'Description',
          required: true,
          options: [
            { value: "YES", label: 'Yes' },
            { value: "NO", label: 'No' }
          ],
        },
      },
    ]
  },
  {
    "className": "section-label",
    "template": "<hr /><div><strong>Do you use Drugs?</strong></div>"
  },
  {
    "fieldGroupClassName": "row",
    "fieldGroup": [
      {
        key: 'doyouusedrugs',
        type: 'radio',
        "className": "col-4",
        templateOptions: {
          // label: 'Are you alergic?',
          // placeholder: 'Are you alergic?',
          description: 'Description',
          required: true,
          options: [
            { value: "YES", label: 'Yes' },
            { value: "NO", label: 'No' }
          ],
        },
      },
    ]
  },
  {
    "className": "section-label",
    "template": "<hr /><div><strong>Do you moke?</strong></div>"
  },
  {
    "fieldGroupClassName": "row",
    "fieldGroup": [
      {
        key: 'doyousmoke',
        type: 'radio',
        "className": "col-4",
        templateOptions: {
          // label: 'Are you alergic?',
          // placeholder: 'Are you alergic?',
          description: 'Description',
          required: true,
          options: [
            { value: "YES", label: 'Yes' },
            { value: "NO", label: 'No' }
          ],
        },
      },
    ]
  },
  { "template": "<hr />" },
]
