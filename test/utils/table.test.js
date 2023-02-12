import { sortData } from '../../src/utils/table';

describe("sortData function", () => {
  let columnId, rowsData = [], sortFieldOrder = 'asc';
  beforeEach(() => {
    rowsData = [{
      id: 1,
      name: 'Mavis Chen',
      mobile: '8899-7654',
    }, {
      id: 2,
      name: 'Rodney Artichoke',
      mobile: '9988-7676',
    }, {
      id: 3,
      name: 'Valentino Morose',
      mobile: '7900-7654',
    }, {
      id: 4,
      name: 'Eric Widget',
      mobile: '5899-7654',
    }]
  })

  test("it should sort name in ascending order properly", () => {
    columnId = 'name'
    const sortedData = sortData(
      rowsData,
      columnId,
      sortFieldOrder
    )
    expect(
      sortedData[0].name
    ).toEqual('Eric Widget')
  });

  test("it should sort descending order properly", () => {
    sortFieldOrder = 'desc'
    const sortedData = sortData(
      rowsData,
      columnId,
      sortFieldOrder
    )
    expect(
      sortedData[0].name
    ).toEqual('Valentino Morose')
  });
});