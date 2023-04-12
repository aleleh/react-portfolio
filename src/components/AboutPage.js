import React from 'react';

function AboutPage() {
  return (
    <div className='AboutPage-main'>
        <div className='AboutPage-image-text-container'>
            <div className='AboutPage-img-container1'>
                <img src={require('../images/surfing.jpg')} alt="surfing alex" />
            </div>
            <div className='AboutPage-text-container'>
                <h2>About Me</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
        <div className='AboutPage-image-text-container'>
            <div className='AboutPage-text-container'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className='AboutPage-img-container2'>
                <img src={require('../images/friends.jpg')} alt="friends" />
            </div>
        </div>
        
    </div>
  );
}

export default AboutPage;
