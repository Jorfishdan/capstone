import "./Music.scss";
import dancingNote from "../../assets/images/dancingnotes.gif";
import note from "../../assets/images/note.gif";
function Music() {
  return (
    <>
    <div className="music">
      <div className="music__mega-wrapper">
    <span className="music__title">Get lightning speed with these handpicked tunes!</span>
    
    <div className="music__circle1"><img src={dancingNote} alt="dancing cartoon notes gif" className="music__dancing-note"></img></div>
    <div className="music__circle2"></div>
    <div className="music__circle3"></div>
    <div className="music__circle4"></div>
    <div className="music__circle5"></div>
    <div className="music__circle6"></div>
    <div className="music__circle7"><img src={note} alt="music note gif" className="music__note" /></div>
      <div className="music__wrapper">
      <iframe
        className="music__song"
        width="40%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/19023042&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      
      <iframe
        className="music__song"
        width="40%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/227956960&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <iframe
        className="music__song"
        width="40%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/963311692&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <iframe
        className="music__song"
        width="40%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/297008220&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <iframe
        className="music__song"
        width="40%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/135813675&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      <iframe
      className="music__song"
        width="40%"
        height="166"
        scrolling="no"
        frameborder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/262844816&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      ></iframe>
      </div>
      </div>
      </div>
    </>
  );
}

export default Music;
