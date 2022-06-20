import React from 'react';
import data from '../data/data';
import AllCatagory from './allcatagory';

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: '',
    };
  }
  handelCatagory = (singleCatgory) => {
    this.setState({
      categoryName: singleCatgory,
    });
  };
  handelAll = () => {
    this.setState({
      categoryName: '',
    });
  };
    
  render() {
    var category = data.map((each) => each.category);
    var each = Array.from(new Set(category));
    var array = [];

    if (this.state.categoryName === '') {
      array = data;
    } else {
      data.forEach((each) => {
        if (each.category === this.state.categoryName) {
          array.push(each);
        }
      });
    }

    return (
      <>
        <div className="main-div">
          <button
            onClick={this.handelAll}
            className={this.state.categoryName === '' ? 'active' : ''}
          >
            All
          </button>
                 
          {each.map((single) => (
            <button
              onClick={() => this.handelCatagory(single)}
              key={single}
              className={single === this.state.categoryName ? 'active' : ''}
            >
              {single}
            </button>
          ))}
        </div>
        <AllCatagory key={category} allItems={array} />
      </>
    );
  }
}

export default Tags;