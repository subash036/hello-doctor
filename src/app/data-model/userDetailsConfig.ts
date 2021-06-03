export const abutConfig= [
    {
      "fieldGroupClassName": "row",
      "fieldGroup": [
        {
          "className": "col-3",
          "type": "input",
          "key": "firstName",
          "templateOptions": {
            "label": "First Name"
          }
        },
        {
          "className": "col-3",
          "type": "input",
          "key": "middlename",
          "templateOptions": {
            "label": "Middle Name"
          }
        },
        {
          "className": "col-3",
          "type": "input",
          "key": "lastName",
          "templateOptions": {
            "label": "Last Name"
          }
        },
        {
          "className": "col-3",
          "type": "input",
          "key": "placeofbirth",
          "templateOptions": {
            "label": "Place Of Birth"
          }
        },

        {
          "key": "weight",
          "className": "col-3",
          "type": "select",
          "templateOptions": {
            "label": "Select Weight",
            "options": [
              {"label": "10KG", "value": "10"},
              {"label": "20KG", "value": "20"},
              {"label": "40KG", "value": "40"},
              {"label": "80KG", "value": "80"}
            ]
          }
        },
        {
          "key": "height",
          "className": "col-3",
          "type": "select",
          "templateOptions": {
            "label": "Select Height",
            "options": [
              {"label": "4`", "value": "4"},
              {"label": "4.5`", "value": "4.5"},
              {"label": "5`", "value": "5"},
              {"label": "6`", "value": "6"}
            ]
          }
        },
        {
          "key": "bloodtype",
          "type": "select",
          "className": "col-3",
          "templateOptions": {
            "label": "Select Blood Type",
            "options": [
              {"label": "A", "value": "A"},
              {"label": "B", "value": "B"},
              {"label": "AB", "value": "AB"},
              {"label": "O", "value": "O"},
              {"label": "O-", "value": "O-"}
            ]
          }
        },
        {
          "key": "nationality",
          "type": "select",
          "className": "col-3",
          "templateOptions": {
            "label": "Select Nationality",
            "options": [
              {"label": "Indian", "value": "Indian"},
              {"label": "Australia", "value": "Australia"}
            ]
          }
        }

      ]
    },
    {
      "className": "section-label",
      "template": "<hr /><div><strong>Address:</strong></div>"
    },
    {
      "fieldGroupClassName": "row",
      "fieldGroup": [
        {
          "className": "col-6",
          "type": "input",
          "key": "street",
          "templateOptions": {
            "label": "Street"
          }
        },
        {
          "className": "col-3",
          "type": "input",
          "key": "cityName",
          "templateOptions": {
            "label": "City"
          }
        },
        {
          "className": "col-3",
          "type": "input",
          "key": "zip",
          "templateOptions": {
            "type": "number",
            "label": "Zip",
            "max": 99999,
            "min": 0,
            "pattern": "\\d{5}"
          }
        }
      ]
    },
    { "template": "<hr />" },
    {
      "type": "textarea",
      "key": "otherInput",
      "templateOptions": {
        "label": "Other Details"
      }
    },
    {
      "className": "col-3",
      "type": "date",
      "key": "dateofbirth",
      "templateOptions": {
        "label": "Date Of Birth"
      }
    }
  ]
