import { fireEvent, render } from '@testing-library/react';
import App from '../App';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<App/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal).toHaveTextContent('4');
    
  })

  it('should add two numbers', () => {
    const runningTotal = container.getByTestId('running-total');
    const button1 = container.getByTestId('number1');    
    const button4 = container.getByTestId('number4');    
    fireEvent.click(button1);
    fireEvent.click(operator_add);
    fireEvent.click(button4);
    fireEvent.click(operator_equals);
    expect(runningTotal).toHaveTextContent('5')
  }
  )

  it('should subtract two numbers', () => {
    const runningTotal = container.getByTestId('running-total');
    const button7 = container.getByTestId('number7');    
    const button4 = container.getByTestId('number4');    
    fireEvent.click(button7);
    fireEvent.click(operator_subtract);
    fireEvent.click(button4);
    fireEvent.click(operator_equals);
    expect(runningTotal).toHaveTextContent('3')
  }
  )

  it('should multiply two numbers', () => {
    const runningTotal = container.getByTestId('running-total');
    const button3 = container.getByTestId('number3');    
    const button5 = container.getByTestId('number5');    
    fireEvent.click(button3);
    fireEvent.click(operator_multiply);
    fireEvent.click(button5);
    fireEvent.click(operator_equals);
    expect(runningTotal).toHaveTextContent('15')
  }
  )

  it('should divide two numbers', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');    
    const button1 = container.getByTestId('number1');    
    const button7 = container.getByTestId('number7');    
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(operator_divide);
    fireEvent.click(button7);
    fireEvent.click(operator_equals);
    expect(runningTotal).toHaveTextContent('3')
  }
  )

  it('should concatenate button clicks', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');    
    const button4 = container.getByTestId('number4');    
    const button6 = container.getByTestId('number6');    
    fireEvent.click(button2);
    fireEvent.click(button4);
    fireEvent.click(button6);
    expect(runningTotal).toHaveTextContent('246')
  }
  )

})

