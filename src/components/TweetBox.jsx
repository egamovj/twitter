import { useState } from "react";
import { EmojiIcon, GifIcon, ImageIcon, PollIcon, ScheduleIcon } from "../Icons/Icons";
import db from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore/lite";


const TweetBox = () => {
  const [content, setContent] = useState("");
  const sendTweet = async () => {
    if (content !== "") {
      const docRef = await addDoc(collection(db, "feed"), {
        displayName: "Egamov Jo'rabek",
        username: "@Egamov19",
        content,
        timestamp: serverTimestamp(),
        avatar:
          "https://pbs.twimg.com/profile_images/1687862246389796866/6gL1-lrJ_400x400.jpg",
      });

      console.log("Document written with ID: ", docRef.id);
    }
    setContent("");
  };

  return (
    <div className="flex flex-col flex-1 mt-2 px-2">
      <textarea
        className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent"
        placeholder="What's happening?"
        onChange={e => setContent(e.target.value)}
        value={content}
      />
      <div className="flex items-center justify-between">
        <div className="flex -ml-3">
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ImageIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <GifIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <PollIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <EmojiIcon className="w-6 h-6 text-primary-base" />
          </div>
          <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
            <ScheduleIcon className="w-6 h-6 text-primary-base" />
          </div>
        </div>
        <button
          className="bg-primary-base text-white rounded-full px-4 py-2 font-medium" onClick={sendTweet}>
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TweetBox;