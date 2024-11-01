import { useState } from "react";

export default function CommentForm() {
  let [commentInfo, setCommentInfo] = useState({
    userName: "",
    rating: "",
    comment: "",
  });

  let handleComments = (event) => {
    setCommentInfo({ ...commentInfo, [event.target.name]: event.target.value });
  };

  let handleCommentSubmit = (event) => {
    event.preventDefault();
    console.log(commentInfo);
    setCommentInfo({
        userName: "",
        rating: "",
        comment: "",
      });
  }

  return (
    <form onSubmit={handleCommentSubmit}>

      <h2> Add New Comment! </h2>

      <label htmlFor="userName"> Username </label><br />
      <input
        type="text"
        name="userName"
        id="userName"
        value={commentInfo.userName}
        onChange={handleComments}
      /><br /><br />

      <label htmlFor="comment"> Comment </label><br />
      <textarea 
        name="comment" 
        id="comment" 
        onChange={handleComments} 
        value={commentInfo.comment} 
      /><br /><br />

      <label htmlFor="rating"> Rating </label><br />
      <input
        type="number"
        min={1}
        max={5}
        name="rating"
        id="rating"
        onChange={handleComments}
        value={commentInfo.rating}
      /><br /><br />

      <button type="submit">Add Comment</button>
    </form>
  );
}