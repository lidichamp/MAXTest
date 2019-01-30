const classifier = require('../src/classifier');
const input = require('../src/inputs/input');
const output = require('../src/outputs/output');
test('partial values - some key names and values', () => {
    const out = classifier(input);

    expect(out).toMatchObject(output);
  });

  