const { BaseParser } = require('./BaseParser')
  , { root } = require('../../../../datasets/root')
  , { join } = require('path');

describe('BaseParser class tests', () => {
  test('supportedFiletypes works correctly', () => {
    const file = join(root, 'nba_finals.csv')
      , parser = new BaseParser(file)
      , { supportedFiletypes } = parser;

    expect(supportedFiletypes).arrayContains(Object.values(supportedFiletypes));

    console.log(supportedFiletypes);

  })
})
