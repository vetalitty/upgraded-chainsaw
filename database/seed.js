const Employee = require('../models/employee');
const Department = require('../models/department');
const Organization = require('../models/organization');

async function createData() {
  await Department.deleteMany();
  await Employee.deleteMany();
  await Organization.deleteMany();

  const department = await Department.create(
    {
      financialCode: '12345678901234567890',
      shortName: 'small department',
      fullName: 'full department',
    }
  );
  const organization = await Organization.create(
    {
      INN: 123456789012,
      shortName: 'small organization',
      fullName: 'full organization',
    }
  );
  await Employee.create(
    {
      firstName: 'Ivan',
      lastName: 'Ivanov',
      patronymic: 'Ivanovich',
      personalNumber: 124,
      departmentId: department,
      organizationId: organization,
    }
  );
}

module.exports = createData;
