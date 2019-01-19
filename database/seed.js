const seeder = require('mongoose-seed');
const { db: { url } } = require('../config');

seeder.connect(url, () => {
  seeder.loadModels([
    'models/department',
    'models/employee',
    'models/organization',
  ]);

  seeder.clearModels(['Department', 'Employee', 'Organization'], () => {
    seeder.populateModels(data, () => {
      seeder.disconnect();
    });
  });
});

const data = [
  {
    'model': 'Department',
    'documents': [
      {
        'name': 'financialCode',
        'value': 12345678901234567890
      },
      {
        'name': 'shortName',
        'value': 'short name'
      },
      {
        'name': 'fullName',
        'value': 'full name'
      },
    ]
  },
  {
    'model': 'Organization',
    'documents': [
      {
        'name': 'INN',
        'value': 123456789012
      },
      {
        'name': 'shortName',
        'value': 'short name'
      },
      {
        'name': 'fullName',
        'value': 'full name'
      },
    ]
  },
  {
    'model': 'Employee',
    'documents': [
      {
        'name': 'INN',
        'value': 123456789012
      },
      {
        'name': 'shortName',
        'value': 'short name'
      },
      {
        'name': 'fullName',
        'value': 'full name'
      },
    ]
  },
];
