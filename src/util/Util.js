import parse from 'html-react-parser';

class Util {
  
  static singleLabel = (model, type, field) => {
    if(!model || !model[type]) return '';
    const option =  model[type].find(opt => opt.id === field);
    return option ? option.name : '';
  }

  static multiLabel = (model, type, fields) => {
    if(!model || !model[type]) return '';
    let label = '';
    fields.map(item => {
      const option = model[type].find(opt => opt.id === item);
      label = option ? (label === '' ? option.name : label + ', ' + option.name) : '';
      return item;
    });
    return label ;
  }

  static multiLabelDiv = (model, type, fields) => {
    if(!model || !model[type]) return '';
    let label = '';
    label = model[type].filter(item => fields.indexOf(item.id) !== -1 ).map(field =>
      <span>{field.name}</span>
    )
    
    return label ;
  }

  static convertToMoney = number => number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

  static address = (model, field) => {
    if(model)
    {
      const city =  model.cities.find(opt => opt.id === field.city);
      const state =  model.states.find(opt => opt.id === field.state);
      let location = city && city.name ? city.name +', ' : '';
      location += state && state.name ? state.name :'';
      return location;
    }
    else return ''; 
  }

  static htmlParse = data => parse(data);
}
export default Util;