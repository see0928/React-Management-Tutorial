import React from 'react';
import React, {Componet} from 'react';
import './App.css';
import Customer from './components/Customer';

const customers =[{
  'id' : 1,
  'image' : ' https://placeing.com/64/64/any',
  'name' : '나동빈',
  'birthday' : '961221',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : ' https://placeing.com/64/64/any',
  'name' : '나동빈',
  'birthday' : '961221',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 3,
  'image' : ' https://placeing.com/64/64/any',
  'name' : '나동빈',
  'birthday' : '961221',
  'gender' : '남자',
  'job' : '대학생'
}]

class App extends Component() {
  render() {
    return(
      <div>
      {
        customers.map(c=> {
          return(
          <Customer
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          gender={c.gender}
          job={c.job}     
          />
          );
          })
        }
      </div> 
          );  
  }
}

export default App;
