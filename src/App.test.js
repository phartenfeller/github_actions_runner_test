import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

configure({adapter: new Adapter()})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

const wrapper = shallow(<App />);

it('2 = 2', () => {
  const value = '2';
  wrapper.find('input[type="number"]').simulate('change', {target: {value}});
  wrapper.find('button').simulate('click');

  expect(wrapper.find('.result').text()).toEqual(value);
});

it('5 = Fizz', () => {
  const value = '5';
  wrapper.find('input[type="number"]').simulate('change', {target: {value}});
  wrapper.find('button').simulate('click');

  expect(wrapper.find('.result').text()).toEqual('Fizz');
});

it('7 = Buzz', () => {
  const value = '7';
  wrapper.find('input[type="number"]').simulate('change', {target: {value}});
  wrapper.find('button').simulate('click');

  expect(wrapper.find('.result').text()).toEqual('Buzz');
});

it('35 = FizzBuzz', () => {
  const value = '35';
  wrapper.find('input[type="number"]').simulate('change', {target: {value}});
  wrapper.find('button').simulate('click');

  expect(wrapper.find('.result').text()).toEqual('FizzBuzz');
});
