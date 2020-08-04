import React from 'react';
import { shallow } from 'enzyme';
import CharacterList from './CharacterList';

describe('CharacterList component', () => {
  it('renders CharacterList', () => {
    const wrapper = shallow(<CharacterList 
      characters={[{  
        name: 'Aang', 
        photoUrl: 'image1.jpg', 
        allies: 'Sokka' 
      }, 
      { name: 'Aang2', 
        photoUrl: 'image2.jpg', 
        allies: 'Sokka2'  }]}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
