const classifier = require('../src/classifier');
const input = [
  {
    name: 'Hendrick',
    dob: '1853-07-18T00:00:00.000Z',
    regNo: '041',
  },
  {
    name: 'Albert',
    dob: '1879-03-14T00:00:00.000Z',
    regNo: '033',
  },
  {
    name: 'Marie',
    dob: '1867-11-07T00:00:00.000Z',
    regNo: '024',
  },
  {
    name: 'Neils',
    dob: '1885-10-07T00:00:00.000Z',
    regNo: '02',
  },
  {
    name: 'Max',
    dob: '1858-04-23T00:00:00.000Z',
    regNo: '014',
  },
  {
    name: 'Erwin',
    dob: '1887-08-12T00:00:00.000Z',
    regNo: '09',
  },
  {
    name: 'Auguste',
    dob: '1884-01-28T00:00:00.000Z',
    regNo: '08',
  },
  {
    name: 'Karl',
    dob: '1901-12-05T00:00:00.000Z',
    regNo: '120',
  },
  {
    name: 'Louis', //
    dob: '1892-08-15T00:00:00.000Z',
    regNo: '022',
  },
  {
    name: 'Arthur',
    dob: '1892-09-10T00:00:00.000Z',
    regNo: '321',
  },
  {
    name: 'Paul',
    dob: '1902-08-08T00:00:00.000Z',
    regNo: '055',
  },
  {
    name: 'William',
    dob: '1890-03-31T00:00:00.000Z',
    regNo: '013',
  },
  {
    name: 'Owen',
    dob: '1879-04-26T00:00:00.000Z',
    regNo: '052',
  },
  {
    name: 'Martin',
    dob: '1871-02-15T00:00:00.000Z',
    regNo: '063',
  },
  {
    name: 'Guye',
    dob: '1866-10-15T00:00:00.000Z',
    regNo: '084',
  },
  {
    name: 'Charles',
    dob: '1868-02-14T00:00:00.000Z',
    regNo: '091',
  },
];
const output = 
{
  "group1": 
    {
      "members": [{"age": 116, "name": "Paul"}, {"age": 117, "name": "Karl"}], 
      "oldest": 117, 
      "regNos": [55, 120], 
      "sum": 233
    }, 
  "group2": 
    {
      "members": [{"age": 126, "name": "Louis"}, {"age": 126, "name": "Arthur"}, {"age": 128, "name": "William"}], 
      "oldest": 128, 
      "regNos": [22, 321, 13], 
      "sum": 380
    }, 
  "group3": 
    {
      "members": [{"age": 131, "name": "Erwin"}, {"age": 133, "name": "Neils"}, {"age": 135, "name": "Auguste"}], 
      "oldest":135, 
      "regNos": [9, 2, 8], 
      "sum": 399
    }, 
  "group4": 
    {
      "members": [{"age": 139, "name": "Albert"}, {"age": 139, "name": "Owen"}], 
      "oldest": 139, 
      "regNos": [33, 52], 
      "sum": 278
    },
  "group5": 
    {
      "members": [{"age": 147, "name": "Martin"}, {"age": 150, "name": "Charles"},{"age": 151, "name": "Marie"}], 
      "oldest": 151, 
      "regNos": [63, 91, 24],
      "sum": 448
    }, 
  "group6": 
    {
      "members": [{"age": 152, "name": "Guye"}],
      "oldest": 152, 
      "regNos": [84], 
      "sum": 152
    },
  "group7": 
    {
      "members": [{"age": 160, "name": "Max"}, {"age": 165,   "name": "Hendrick"}], 
      "oldest":165, 
      "regNos": [14, 41], 
      "sum": 325
    }, 
  "noOfGroups": 7
}

test('classifies students into groups', () => {
  expect(classifier(input)).toEqual(output);
});

