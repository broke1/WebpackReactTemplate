import React from 'react'
import Chart from '../components/Chart'
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure } from 'enzyme'
import store from '../store/store'


configure({ adapter: new Adapter() })

describe('Тесты для компонента Chart',()=>{
  let wrapper

  beforeEach(()=>{
    wrapper = shallow(<Chart store={store}/>)  
  })

  it('Проверяем отрисовался ли сам компонент', () => {
    expect(wrapper.length).toEqual(1)
  });
    
  // it('Проверяем поменяется ли отображение элемента в зависимости от props', () => {
  //   console.log(wrapper.find('.chart'))
  //   expect(wrapper.find('.chart').hasClass('showCard')).toBe(true)
  // });
  
});

