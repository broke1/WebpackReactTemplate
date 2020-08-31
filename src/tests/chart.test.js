import React from 'react'
import Chart from '../components/Chart'
import Adapter from 'enzyme-adapter-react-16'
import { configure, mount } from 'enzyme'
import store from '../store/store'
import  { showChartAct }  from '../store/button/actions'
import { act } from "react-dom/test-utils"


configure({ adapter: new Adapter() })

describe('Тесты для компонента Chart',()=>{
  let wrapper

  beforeEach(()=>{
    wrapper = mount( <Chart store={ store }/>)  
  })

  it('Проверяем отрисовался ли сам компонент', () => {
    expect(wrapper.length).toEqual(1)
  });
    
  it('Проверяем поменяется ли отображение элемента в зависимости от props', () => {
    expect(wrapper.find('div.chart').hasClass('showCard')).toBe(false)
    act(() => {
      store.dispatch(showChartAct('true'))
      wrapper = mount( <Chart store={ store }/>)
    })
    expect(wrapper.find('div.chart').hasClass('showCard')).toBe(true)
    
  });
  
});

