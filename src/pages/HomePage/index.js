import React from 'react';
import Banner from '../../components/common/Banner';
import HtmlHeader from '../../components/common/HtmlHeader';
import HomeContent from '../../components/home/HomeContent';
import HomeFaq from '../../components/home/HomeFaq';
class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { filters: [], inApiCall:false};
  }

  clearFilter = () => this.setState({ ...this.state, filters: [] });
  addFilter = filter => {
    const filters = [ ...this.state.filters ];
    filters.push(filter);
    this.setState({ filters });
  }
  removeFilter = filter => {
    let filters = [ ...this.state.filters ];
    filters = filters.filter(item => item.type !== filter.type || item.id !== filter.id);
    this.setState({ filters });
  }

  render() {
    return (
      <>
      <HtmlHeader title={"The Career Hub"} description={"The Career Hub"} />
      
      <div className="homepage"> 
        
        <Banner />
          
        <div className="section-main">
          <HomeContent />
          <HomeFaq />
        </div>
       
      </div>
      </>
    );
  }
}
export default HomePage;
