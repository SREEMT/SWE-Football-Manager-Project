import '../styles/components/PostBox.css';

import place_holder from '../assets/placeHolder.png';

export default function Post({
  post_img = place_holder,
  postCaption = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}) {
  return (
    <div className="postBox">
        <h2>Post Title</h2>
        <img src={post_img} className="imgPic" />
        <p>{postCaption}</p>
        <div className="likeButtons">
            <button>Like</button>
            <button>Dislike</button>
        </div>
    </div>
  );
}
