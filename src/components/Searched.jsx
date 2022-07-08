import AlbumCard from "./AlbumCard";
import { Row, Col } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { connect} from "react-redux/es/exports"

const mapStateToProps = (state) => {

  return {
    search: state.search
  }
}

const Searched = ({search}) => {
  
  const [songList, setSongList] = useState([])

  useEffect(()=>{
    handleArtist(search)
  },[])

 const handleArtist = async (artistName) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
        artistName,
        {
          method: "GET",
          headers: new Headers({
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
          }),
        }
      );
      let result = await response.json();
      setSongList(result.data)
      
    } catch (err) {
      console.log(err);
    }
  };

  


  return (
    <Col className="col-12 col-md-9 offset-md-3 mainPage">
      <Row>
        <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
          <div>TRENDING</div>
          <div>PODCAST</div>
          <div>MOODS AND GENRES</div>
          <div>NEW RELEASES</div>
          <div>DISCOVER</div>
        </div>
      </Row>
         <Row>
          <Col xs={10}>
            <div id="searchResults">
              <h2>Search Results</h2>
              <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
                {/*songList.map((song) => (
                  <AlbumCard song={song} key={song.id} />
                ))*/}
              </Row>
            </div>
          </Col>
        </Row>
    </Col>
  );
                }

export default connect(mapStateToProps)(Searched)