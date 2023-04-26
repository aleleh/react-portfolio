// imports react
import React from "react";

// aboutpage function with text and images
function AboutPage() {
  return (
    <div className="AboutPage-main">
        <div className="AboutPage-image-text-container">
            <div className="AboutPage-img-container1 animate__animated animate__fadeIn">
                <img src={require("../images/surfing.jpg")} alt="surfing alex" />
            </div>
            <div className="AboutPage-text-container two animate__animated animate__fadeIn">
                <h2>About Me</h2>
                <p> Hi, I'm Alexander Lehnbom, a 28-year-old developer originally from Gävle, Sweden, 
                    now based in the vibrant city of Toronto, Canada. As a tech enthusiast passionate about learning, 
                    I've studied programming at IT-Högskolan, web development at Johns Hopkins University, and I'm currently 
                    immersing myself in front-end development at Sundsgarden. Throughout my career, I have gained diverse work e
                    xperience, including roles as a product specialist and in various tech support positions. 
                    Now, I'm focusing on refining my front-end development skills to enhance my capabilities and 
                    further strengthen my expertise in the field.
                    Travel and running have both played significant roles 
                    in shaping who I am today. While traveling across Europe, India, South America, 
                    and Southeast Asia, I have been exposed to diverse cultures, ideas, and perspectives, 
                    enabling me to approach problems with an open mind and a creative outlook. </p>
            </div>
        </div>
        <div className="AboutPage-image-text-container">
            <div className="AboutPage-text-container">
                <p> Running, on 
                    the other hand, has instilled in me the importance of discipline, perseverance, and setting achievable 
                    goals. These qualities have a direct impact on my work ethic and ability to deliver high-quality results consistently.
                    I firmly believe that hard work and stepping outside one's comfort zone are crucial 
                    for personal growth. Embracing challenges with determination and maintaining a positive attitude, 
                    I always strive to face obstacles head-on and learn from every experience. Combining my experiences 
                    in travel and running, I bring a unique blend of determination and adaptability to my work, contributing 
                    to a collaborative and dynamic team environment.
                    As I look toward the future, my ambition is to build a successful career as a developer. 
                    I am confident that with my strong work ethic, dedication to learning, and adaptable nature, 
                    I can contribute significantly to the field of technology and be a valuable asset to any employer.</p>
            </div>
            <div className="AboutPage-img-container2">
                <img src={require("../images/friends.jpg")} alt="friends" />
            </div>
        </div>
    </div>
  );
}

export default AboutPage;
