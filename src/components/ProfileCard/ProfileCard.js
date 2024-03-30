import React from 'react';
import './ProfileCard.css'; 

const ProfileCard = () => {

  const profileData = {
    name: 'Casey M.',
    title: ' Computer Science Student at Oregon State University',
    experience: '',
    skills: ['JavaScript', 'DOM', 'React', 'Node', 'No SQL/SQL', 'Github'],
    imageUrl: '/images/pierrenoob.png' 
  };

  return (
    <div className="profile-card">
      <img src={profileData.imageUrl} alt={profileData.name} className="profile-image" />
      <h2>{profileData.name}</h2>
      <p>{profileData.title}</p>
      <p>{profileData.experience}</p>
      <ul className="skills-list">
        {profileData.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <a href={`${process.env.PUBLIC_URL}/PDF/Heap_Answers.pdf`} target="_blank" rel="noopener noreferrer" className="resume-button">
        Click for full Resume
      </a>
    </div>
  );
};

export default ProfileCard;
