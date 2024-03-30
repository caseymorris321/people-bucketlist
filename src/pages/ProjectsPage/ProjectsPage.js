import ImageGallery from "react-image-gallery";
import './ProjectsPage.css'; 

function MySitesPage() {
  const images = [
    {
      original: "images/blog-contact.png",
      thumbnail: "images/blog-contact.png",
      description: `A contact form using MongoDB for a blog I made.`,

    },
    {
      original: "images/tarot-website.jpg",
      thumbnail: "images/tarot-website.jpg",
      description: `A tarot card generator website I made.`,
      originalHeight: "250px",
      url: 'https://tarotgenerator.com'
    
    },
    {
      original: "images/dragons-website.png",
      thumbnail: "images/dragons-website.png",
      description: `A to-do list project I made using Python`,
      url: 'https://dragons-hoard-db.onrender.com'
    },
    {
      original: "images/running-waters-website.png",
      thumbnail: "images/running-waters-website.png",
      description: `A blog I made for a friend using React and Boostrap.`,
      originalHeight: "350px",
    },
    {
      original: "images/westendwitch-website.png",
      thumbnail: "images/westendwitch-website.png",
      description: `A website I made for a friend using SquareSpace.`,
      originalHeight: "350px",
    },
    {
      original: "images/duolingo.jpg",
      thumbnail: "images/duolingo.jpg",
      description: `My hobby is learning new languages with Duolingo.`,
      originalHeight: "350px",
    },
    {
      original: "images/hiking.jpg",
      thumbnail: "images/hiking.jpg",
      description: `Me hiking in the Shenandoah National Park.`,
      originalHeight: "350px",
    },
    {
      original: "images/minigolf.jpeg",
      thumbnail: "images/minigolf.jpeg",
      description: `I'm always up for a good game of mini-golf.`,
      originalHeight: "350px",
    },
    {
      original: "images/acadia-sign.jpg",
      thumbnail: "images/acadia-sign.jpg",
      description: `Me standing in front of the sign for Precipice Trail in Acadia National Park.`,
      originalHeight: "350px",
    },
    {
      original: "images/kayaking.jpg",
      thumbnail: "images/kayaking.jpg",
      description: `Kayaking on a foggy summer morning makes me happy.`,
      originalHeight: "350px",
    },
  ];

  const renderItem = (item) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <img src={item.original} alt={item.description} className="image-gallery-image" />
      <p style={{ marginTop: '20px', marginBottom: '10px', textAlign: 'center' }}>{item.description}</p>
      {item.url && (
        <button className="visit-site-btn"
          onClick={() => window.open(item.url, '_blank')} 
        
        >
          Visit Site
        </button>
      )}
    </div>
  );
  

  return (
    <>
      <h2>My Projects</h2>
      <p>
        Some of my recent projects and websites. I am currently working
        on more projects, and they will be added here as I complete them. If
        you have any ideas for projects you'd like to see, feel free to send me
        a message.
      </p>
      <article className="">
        <ImageGallery items={images} renderItem={renderItem} lazyLoad={true} showFullscreenButton={false}/>
      </article>
    </>
  );
}

export default MySitesPage;
