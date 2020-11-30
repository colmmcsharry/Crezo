import React,{useState} from 'react';

function Readmore(props) {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
      <p className="extra-content">
        {props.longcontent}
      </p>
  </div>
  const linkName=readMore?'Read Less  << ':`Read More >> `
  return (
    <div className="readmore">
    {props.shortcontent}
    <br/><br/>
      <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2 className="readmorelink grow">{linkName}</h2></a>
      <br/><br/>
      {readMore && extraContent}

    </div>
  );
}

export default Readmore;