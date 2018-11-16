import React from 'react'
import {shallow} from 'enzyme'

import App from '../client/components/App'
import Organ from '../client/components/Organ'

// jest.mock('../client/api/index', () => {
//   return {
//     getOrgans: () => Promise.resolve([
//       { name: 'liver', id:1 },
//       { name: 'lungs', id:2 },
//       { name: 'brain', id:3 },
//       { name: 'spleen', id:4 },
//     ])
//   }
// })

let testData = [
  { name: 'liver', id:1 },
  { name: 'lungs', id:2 },
  { name: 'brain', id:3 },
  { name: 'spleen', id:4 },
]


test("Organ creation from list", () => {
  const expected = 4;
  const wrapper = shallow(<App testData={testData}/>);

  expect(wrapper.update().find('Organ').length).toBe(expected)
});




test("Organ hidden check", () => {
  const expected = 1;
  const wrapper = shallow(<Organ details={testData[0]}/>);

  expect(wrapper.find('img').length).toBe(expected)
});

test("Organ hidden check", () => {
  const expected = true;
  const wrapper = shallow(<Organ details={testData[0]}/>);

  expect(wrapper.find('img').matchesElement(<img alt={testData[0].name}></img>)).toBe(expected)
});
