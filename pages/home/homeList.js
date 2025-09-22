import { Component } from "react";
import Axios from 'axios';

import shows from "../map.json";
import ShowItem from "../components/showitem";

class HomeList extends Component {

  constructor () {
    super();
    this.state = {
      shows: [],
      order: "abc"
    }

    this.getData = this.getData.bind(this);
    this.switchOrder = this.switchOrder.bind(this);
  }

  switchOrder (e, newOrder) {
    document.getElementById("c1").classList.remove("active");
    document.getElementById("c2").classList.remove("active");
    document.getElementById("c3").classList.remove("active");
    e.target.classList.add("active");
    this.setState({order: newOrder}, () =>{this.refreshData()});
  }

  refreshData () {
    if(this.state.order == "abc") {
      Axios.get(`/api/search/all-abc`)
      .then(data => {
        //console.log("got the stuff");
        this.setState({ shows: data.data.data.rows });
      }).catch(err => {console.log(err)});
    } else if (this.state.order == "zyx") {
      Axios.get(`/api/search/all-zyx`)
      .then(data => {
        //console.log("got the stuff");
        this.setState({ shows: data.data.data.rows });
      }).catch(err => {console.log(err)});
    } else {
      Axios.get(`/api/search/all`)
      .then(data => {
        //console.log("got the stuff");
        this.setState({ shows: data.data.data.rows });
      }).catch(err => {console.log(err)});
    }
  }

  getData () {
    console.log("getting new data!")
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
        <div>
          <center><div className="controls-wrapper">
            <button id="c1" className="con active default" onClick={(e) => {this.switchOrder(e, "default")}}>update</button>
            <button id="c2" className="con abc" onClick={(e) => {this.switchOrder(e, "abc")}}>abc</button>
            <button id="c3" className="con zyx" onClick={(e) => {this.switchOrder(e, "zyx")}}>zyx</button>
          </div></center>
        <center className="center-wrapper"><div className="shows-wrapper">

          {this.state.shows.map((show, i) => {
              if(show.public == "true") {
                return <ShowItem key={i} show={show}/>
              } else return 
          })
          }
        </div></center>
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