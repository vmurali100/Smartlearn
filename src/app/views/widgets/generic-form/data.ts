import { Validators } from '@angular/forms';

export const createForm: any[] = [
  {
    type: 'input',
    label: 'Program Name',
    inputType: 'text',
    name: 'progName',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Program Name is Required'
      }
    ]
  },
  {
    type: 'input',
    label: 'Task Description',
    inputType: 'text',
    name: 'taskDesc',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Task Description is Required'
      }
    ]
  },
  {
    type: 'input',
    label: 'Project Phase',
    inputType: 'text',
    name: 'projectPhase',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Project Phase is Required'
      }
    ]
  },
  {
    type: 'input',
    label: 'Email',
    inputType: 'email',
    name: 'email',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Email Required'
      },
      {
        name: 'pattern',
        validator: Validators.pattern(
          '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'
        ),
        message: 'Invalid email'
      }
    ]
  },
  {
    type: 'input',
    label: 'Password',
    inputType: 'password',
    name: 'password',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Password Required'
      }
    ]
  },
  {
    type: 'radiobutton',
    label: 'Gender',
    name: 'gender',
    options: ['Male', 'Female'],
    value: 'Male'
  },
  {
    type: 'date',
    label: 'DOB',
    name: 'dob',
    validations: [
      {
        name: 'required',
        validator: Validators.required,
        message: 'Date of Birth Required'
      }
    ]
  },
  {
    type: 'checkbox',
    label: 'Accept Terms',
    name: 'term',
    value: true
  },
  {
    type: 'button',
    label: 'Save'
  }
];



/** -------------------------------------------------------------------------------- */
export const createFormTab1: any[] = [
  {
    type: 'multiselect',
    label: 'Customer',
    name: 'customer1',
    value: '',
    options: [
      {
        key: 'FCA', value: 'Ford Chrysler Automobiles'
      },
      {
        key: 'BMW', value: 'BMW'
      },
      {
        key: 'LEAR', value: 'Lear'
      },
      {
        key: 'TOY', value: 'Toyota'
      }
    ]
  },
  {
    type: 'input',
    label: 'Program Name',
    inputType: 'text',
    name: 'progName',
    validations: [
    ]
  },
  {
    type: 'textarea',
    label: 'Task Description',
    inputType: 'text',
    name: 'taskDesc',
    validations: [
    ]
  },
  {
    type: 'input',
    label: 'Effective Orderer',
    inputType: 'text',
    name: 'effectiveOrderer',
    validations: [
    ]
  },
  {
    type: 'date',
    label: 'Deadline Request Date',
    name: 'deadlineReqDate',
    validations: [
    ]
  },
  {
    type: 'date',
    label: 'Program SOP Date',
    name: 'prgSOPDate',
    validations: [
    ]
  },
  {
    type: 'input',
    label: 'Project Phase',
    inputType: 'text',
    name: 'projectPhase',
    validations: [
    ]
  },
  {
    type: 'select',
    label: 'Customer',
    name: 'customer',
    value: '',
    options: [
      {
        key: 'FCA', value: 'Ford Chrysler Automobiles'
      },
      {
        key: 'BMW', value: 'BMW'
      },
      {
        key: 'LEAR', value: 'Lear'
      },
      {
        key: 'TOY', value: 'Toyota'
      }
    ]
  },
  {
    type: 'select',
    label: 'Region',
    name: 'region',
    value: '',
    options: [
      {
        key: 'AP', value: 'Asia Pacific'
      },
      {
        key: 'CHINA', value: 'China'
      },
      {
        key: 'NA', value: 'North America'
      },
      {
        key: 'SA', value: 'South America'
      },
      {
        key: 'SS-JPN', value: 'Speciality Seating - Japan'
      }
    ]
  },
  {
    type: 'select',
    label: 'Group CG, PG or PBU',
    name: 'group',
    value: '',
    options: [
      {
        key: 'CG-AP', value: 'CG - Asia Pacific'
      },
      {
        key: 'CG-EU', value: 'CG - Europe'
      },
      {
        key: 'CG-NA', value: 'CG - North America'
      },
      {
        key: 'CG-SA', value: 'CG - South America'
      },
      {
        key: 'FOAM', value: 'Foam'
      },
      {
        key: 'TRIM', value: 'Trim'
      }
    ]
  },
  {
    type: 'select',
    label: 'Product Zone/Brand',
    name: 'productZone',
    value: '',
    options: [
      {
        key: 'NA', value: 'Not Applicable'
      }
    ]
  },
  {
    type: 'input',
    label: 'Tech Center',
    inputType: 'text',
    name: 'techCenter',
    validations: [
    ]
  },
  {
    type: 'input',
    label: 'Target Business List #',
    inputType: 'text',
    name: 'targetBusinessList#',
    validations: [
    ]
  },
  {
    type: 'select',
    label: 'Forecast Planning Cycle',
    name: 'forecastPlanningCycle',
    value: '',
    options: [
      {
        key: 'PPL21', value: 'PPL21'
      },
      {
        key: 'PPL20', value: 'PPL20'
      }
    ]
  },
  {
    type: 'select',
    label: 'Currency',
    name: 'currency',
    value: '',
    options: [
      {
        key: 'EURO', value: 'Euro'
      },
      {
        key: 'RE', value: 'Rupees'
      },
      {
        key: 'RUP', value: 'Rupaiah'
      },
      {
        key: 'USD', value: 'US Dollars'
      },
      {
        key: 'WON', value: 'WON'
      },
      {
        key: 'YEN', value: 'Yen'
      }
    ]
  },
  {
    type: 'input',
    label: 'Exchange rate based on USD',
    placeHolder: '',
    inputType: 'text',
    name: 'exchangeRate',
    value: '1.17',
    disabled: true,
    validations: [
    ]
  },
];

/** ----------------------------------------------------------- */
export const createFormTab2: any[] = [
  {
    type: 'input',
    label: 'Product Cost',
    inputType: 'number',
    name: 'productCost',
    validations: [
    ]
  },
  {
    type: 'input',
    label: 'Product Price',
    inputType: 'number',
    name: 'productPrice',
    validations: [
    ]
  },
  {
    type: 'input',
    label: 'Product Tooling Cost',
    inputType: 'number',
    name: 'productToolingCost',
    validations: [
    ]
  },
  {
    type: 'input',
    label: 'Production Tooling Amortized Recovery',
    inputType: 'number',
    name: 'productToolingAmortizedCost',
    validations: [
    ]
  },
  {
    type: 'input',
    label: 'Production Tooling Lump Sum Recovery',
    inputType: 'number',
    name: 'productToolingLumpSumCost',
    validations: [
    ]
  },
  {
    type: 'input',
    label: 'Engineering Amortized Recovery',
    inputType: 'number',
    name: 'engineeringAmortizedRecovery',
    validations: [
    ]
  },
  {
    type: 'input',
    label: 'Engineering Lump Sum Recovery',
    inputType: 'number',
    name: 'engineeringLumpSumRecovery',
    validations: [
    ]
  },
  {
    type: 'input',
    label: 'Capital',
    inputType: 'number',
    name: 'capital',
    validations: [
    ]
  },
  {
    type: 'input',
    label: 'Other',
    inputType: 'number',
    name: 'other',
    validations: [
    ]
  },
  {
    type: 'textarea',
    label: 'Comment',
    inputType: 'text',
    name: 'comment',
    validations: [
    ]
  },
  {
    type: 'input',
    label: 'Program EQU value',
    disabled: true,
    inputType: 'number',
    name: 'programEQUvalue',
    validations: [
    ]
  }
];

/** ----------------------------------------------------------- */
export const createFormTab3: any[] = [
  {
    type: 'kendofileupload',
    label: 'Attachments',
    inputType: 'kendofileupload',
    name: 'attachments',
    validations: [
    ]
  }
];


