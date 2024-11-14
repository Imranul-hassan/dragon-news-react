

const NewsCard = (props={}) => {
    const {news} = props || {};
    console.log(news)
    return (
        <div className="card w-full bg-base-100 shadow-lg rounded-lg overflow-hidden my-7">
        {/* Author Section */}
        <div className="flex items-center p-4">
          <img
            src={news.author.img}
            alt="author"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-3">
            <p className="font-semibold text-sm">{news.author.name}</p>
            <p className="text-xs text-gray-500">{new Date(news.author.published_date).toLocaleDateString()}</p>
          </div>
          <div className="ml-auto flex items-center space-x-2 text-gray-500">
            <i className="ri-share-line"></i>
            <i className="ri-bookmark-line"></i>
          </div>
        </div>
  
        {/* Title */}
        <div className="px-4">
          <h2 className="font-bold text-lg mb-2">
            {news.title}
          </h2>
        </div>
  
        {/* Thumbnail Image */}
        <img
          src={news.thumbnail_url}
          alt="news thumbnail"
          className="w-full h-48 object-cover"
        />
  
        {/* Description */}
        <div className="px-4 py-2">
          <p className="text-sm text-gray-600">
            {news.details.slice(0, 150)}...{' '}
            <span className="text-blue-600 font-semibold">Read More</span>
          </p>
        </div>
            
        </div>
    );
};

export default NewsCard;