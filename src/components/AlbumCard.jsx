import React from "react";
import { Link } from "react-router-dom";
import { Balloon, BalloonFill } from "react-bootstrap-icons";
import { connect } from "react-redux";
import { addToFav, removeFromFav } from "../store/actions";

const mapStateToProps = s =>s
const mapDispatchToProps = (dispatch) => ({
  addToFavorites:(artist) => dispatch (addToFav(artist)),
  removeFromFavorites:(artist) => dispatch (removeFromFav(artist))})



const AlbumCard = ({ song, favorites, addToFavorites, removeFromFavorites }) =>{
console.log(song.album.title)
console.log(favorites)
  const isFav  = favorites.includes(song.album.title)
  const toggleFavorite = () =>{
     isFav 
     ? removeFromFavorites(song.album.title)
     : addToFavorites(song.album.title)}


return(
  <div className="col text-center" id={song.id}>
    <Link to={"/album/" + song.album.id}>
      <div>
        <img className="img-fluid" src={song.album.cover_medium} alt="1" />
      </div>
    </Link>
    <p>
      <Link to={"/album/" + song.album.id}>
        <span>Album:&nbsp;</span>
        <span>
          "
          {song.album.title.length < 16
            ? song.album.title
            : song.album.title.substring(0, 16) + "..."}
          "
        </span>
        <br />
      </Link>
      <Link to={"/artist/" + song.artist.id}>
        <span>Artist:&nbsp;</span>
        <span>{song.artist.name}</span>
      </Link>
      {
        isFav
       ? <BalloonFill style={{marginLeft: '10px'}} size={20} onClick = {toggleFavorite}/>
       : <Balloon style={{marginLeft: '10px'}} size={20} onClick = {toggleFavorite}/>}
    </p>
  </div>
)};

export default connect(mapStateToProps, mapDispatchToProps)(AlbumCard);
