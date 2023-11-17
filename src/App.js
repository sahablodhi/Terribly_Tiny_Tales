
import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Profile />
      <Stories />
      <Footer />
    </div>
  );
}

const Header = () => {
  return (
    <header>
     
      <nav>
        <ul>
          <li>Courses</li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </header>
  );
}

const Profile = () => {
  return (
    <section className="profile">
      <img src="Sahab.jpg" alt="Sahab Singh Lodhi" />
      <h2>Sahab Singh Lodhi</h2>
      <p>Co-founder & CEO at Terribly Tiny Tales</p>
      {/* Add social media links and other profile details */}
    </section>
  );
}

const Stories = () => {
  return (
    <section className="stories">
      <Story
        title="A Changing World Order"
        content="The world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge work are beginning to sense this, including..."
        author="anujgosalia"
        date="August 2"
        readTime="2 mins"
        views="102"
      />
      <Story
        title="Indian v/s Australia"
        content="Think about it - this cricket series was akin to therapy. Laying our childhood trauma up top, working with it slowly and surely over two m..."
        author="anujgosalia"
        date="January 21"
        readTime="1 min"
        views="156"
      />
      <Story
        title="Write To Build"
        content="Writing is the first step to create: - stories - products - companies"
        author="Sahab Singh Lodhi"
        date="November 18"
        readTime="1 min"
        views="228"
      />
      {/* Add more stories as needed */}
    </section>
  );
}

const Story = ({ title, content, author, date, readTime, views }) => {
  return (
    <article className="story">
      <h3>{title}</h3>
      <p>{content}</p>
      <div className="story-details">
        <p>by {author} on {date} • {readTime} Read • {views} Views</p>
      </div>
    </article>
  );
}

const Footer = () => {
  return (
    <footer>
      {/* Add footer content as needed */}
    </footer>
  );
}

export default App;
