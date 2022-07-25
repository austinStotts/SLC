import { Component } from "react";
import Axios from 'axios';

import shows from "../map.json";
import ShowItem from "../components/showitem";

class HomeList extends Component {

  constructor () {
    super();
    this.state = {
      shows: []
    }

    this.getData = this.getData.bind(this);
  }

  getData () {
    if(!this.state.shows.length > 0) {
      console.log(this.props.showid)
      Axios.get(`/api/search/all`)
      .then(data => {
        console.log("got the stuff");
        this.setState({ shows: data.data.data.rows });
      }).catch(err => {console.log(err)});
    }
  }

  render () {
    this.getData();
    console.log(this.state.shows)
    if(this.state.shows.length > 0) {
      return (
        <div className="shows-wrapper">
          {this.state.shows.map((show) => {
              console.log(show);
              return <ShowItem show={JSON.parse(show.showjson)} key={show.name}/>
          })
          }
        </div>
      )
    } else {
      return (
        <div>loading</div>
      )
    }
  }
}

export default HomeList;