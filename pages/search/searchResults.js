import { Component } from "react"
import Axios from "axios";

import SearchList from "./searchList";

export default class SearchResults extends Component {
    constructor (props) {
        super(props)

        this.state = {
            searchString: "",
            list: ""
        }

        this.timeout = 0;

        this.updateHandler = this.updateHandler.bind(this);
        this.submitSearch = this.submitSearch.bind(this);
        this.cleanString = this.cleanString.bind(this);
        this.handleTime = this.handleTime.bind(this);
    }

    updateHandler (e) {
        if(e.key == "Enter") {
            this.handleTime()
        } else {
            this.setState({searchString: e.target.value}, () => {
                this.handleTime()
            })
        }
    }

    handleTime () {
        if(this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.submitSearch()
        }, 300);
    }

    submitSearch () {
        Axios.get(`/api/search/${this.cleanString(this.state.searchString)}`)
        .then(r => {
            // console.log(r.data.data.rows);
            this.setState({list: r.data.data.rows})
        }).catch(e => {
            console.log("roor in search request");
        })
    }

    cleanString (s) {
        return s.split(" ").join("_").toLowerCase();    
    }

    render () {
        return (
            <div className="search-results-wrapper">
                <center>
                <ul className="searchbox-wrapper">
                    <a><li><span className="material-symbols-sharp white">search</span></li></a>
                    <a><li><input className="search-input" type={"text"} placeholder="search" onKeyUp={this.updateHandler}></input></li></a>
                    <button className="search-btn" onClick={this.submitSearch}><span className="material-symbols-outlined arrow">arrow_forward</span></button>
                </ul>
                </center>
                <center>
                <SearchList list={this.state.list} ts={this.props.ts}/>
                </center>
            </div>
        )
    }
}