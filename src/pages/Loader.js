import React from 'react';
import HtmlHeader from '../components/common/HtmlHeader';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Banner from '../components/common/Banner';
import HomeContent from '../components/home/HomeContent';
import HomeFaq from '../components/home/HomeFaq';


class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { filters: [] };
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
    const title = "Homepage"
    const description = "description";
    return (
      <>
      <div className="homepage"> 
        <HtmlHeader title={title} description={description} />
        <Header />
        <Banner />
      </div>
      </>
    );
  }
}
export default HomePage;
