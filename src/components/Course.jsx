import React from 'react';
import './course.css'
const Course = () => {
  // Sample array of objects with image data
  const images = [
    {
      id: 1,
      title: 'HTML',
      description: 'Discover the latest in web development with our new HTML5 course. Dive into the world of modern web technologies and enhance your skills with hands-on projects  ',
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.XgkUBvdmisPeQOedqfUU-gHaGY&pid=Api&P=0&h=180',
    },
    {
      id: 2,
    
      description: `Use basic as well as advanced CSS features
      Flexbox, grid, animations, transitions, fonts, media queries and much more - it's all included!
      `,
      imageUrl: 'https://tse4.mm.bing.net/th?id=OIP.q4WpWoMU-Xqt3AvYPvJhDgHaKM&pid=Api&P=0&h=180',
    },
    {
        id: 1,
        title: 'HTML',
      //   description: 'Beautiful scenery in the mountains',
        imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.6zMunFQruoHaE2f7l9sRkAHaHa&pid=Api&P=0&h=180',
      },
      {
        id: 2,
        title: 'CSS',
        description: 'Skyline view of a modern city',
        imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.2ttiZHSjhvnAvcRFBsB2UAHaHa&pid=Api&P=0&h=180',
      },
      {
        id: 1,
        title: 'HTML',
      //   description: 'Beautiful scenery in the mountains',
        imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.6zMunFQruoHaE2f7l9sRkAHaHa&pid=Api&P=0&h=180',
      },
      {
        id: 2,
        title: 'CSS',
      //   description: 'Skyline view of a modern city',
        imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.2ttiZHSjhvnAvcRFBsB2UAHaHa&pid=Api&P=0&h=180',
      },    {
        id: 1,
        title: 'HTML',
      //   description: 'Beautiful scenery in the mountains',
        imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.6zMunFQruoHaE2f7l9sRkAHaHa&pid=Api&P=0&h=180',
      },
      {
        id: 2,
        title: 'CSS',
      //   description: 'Skyline view of a modern city',
        imageUrl: 'https://tse2.mm.bing.net/th?id=OIP.2ttiZHSjhvnAvcRFBsB2UAHaHa&pid=Api&P=0&h=180',
      },
  ];

  return (
    <div>
      {/* <h1>Course</h1> */}
      
    <div className="image-container container flex w-[100] mt-4 ml-4">
    <div className="grid grid-cols-2 flex border-3">
        {images.map((image) => (
          <div key={image.id} className="image-item  m-4 ml-12 card bg-blue-300">
            <img src={image.imageUrl} alt={image.title} />
            <div className="image-details">
              {/* <h2 className='text-center m-3'>{image.title}</h2> */}
              <p className='p-2'>{image.description}</p>
              <button className='bg-blue-700 w-20 rounded'>View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
</div>
  );
};

export default Course;
