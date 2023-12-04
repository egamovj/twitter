
import Divider from "../components/Divider";
import TweetBox from "../components/TweetBox";

const Content = () => {
  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
      <header className="sticky top-0 z-10 bg-white flex justify-between items-center p-4 border-b border-gray-extraLight ">
        <span className="font-bold text-xl text-gray-900">Home</span>
      </header>
      <div className="flex space-x-4 px-4 py-3">
        <img
          src="https://pbs.twimg.com/profile_images/1687862246389796866/6gL1-lrJ_400x400.jpg"
          alt="Profile"
          className="w-11 h-11 rounded-full"
        />
        <TweetBox />
      </div>
      <Divider />
    </main>
  );
};

export default Content;