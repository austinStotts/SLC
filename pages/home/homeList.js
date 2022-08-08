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
      // console.log(this.props.showid)
      Axios.get(`/api/search/all`)
      .then(data => {
        //console.log("got the stuff");
        this.setState({ shows: data.data.data.rows });
      }).catch(err => {console.log(err)});
    }
  }

  render () {
    this.getData();
    //console.log(this.state.shows)
    if(this.state.shows.length > 0) {
      return (
        <center><div className="shows-wrapper">
          {this.state.shows.map((show, i) => {
              let showjson = JSON.parse(show.showjson);
              if(showjson.public) {
                return <ShowItem key={i} show={showjson}/>
              } else return 
          })
          }
        </div></center>
      )
    } else {
      return (
        <div>loading</div>
      )
    }
  }
}

export default HomeList;