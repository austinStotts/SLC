import react, { Component } from "react";
import Axios from "axios";

import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "./banner";

class ShowPage extends react.Component {
  constructor () {
    super();
    this.state = {


    }

    this.getData = this.getData.bind(this);
  }

  getData () {
    console.log("state:",this.state)
    if(!this.state.showid) {
      console.log(this.props.showid)
      Axios.get(`/api/showinfo/${this.props.showid}`)
      .then(data => {
        console.log("got the stuff");
        let show = JSON.parse(data.data.data.rows[0].showjson);
        console.log(show)
        this.setState({ ...show });
      }).catch(err => {console.log(err)});
    }
  }

  render () {
    this.getData();
    if (this.state.name) {
      return (
        <div className='show-page-main-wrapper'>
          <Header />
          <Banner url={this.state.banner}/>
          <Footer />
        </div>
      )
    } else {
      return <div>loading</div>
    }

  }
}

export default ShowPage;