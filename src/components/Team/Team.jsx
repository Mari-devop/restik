import React from 'react';
import { useState } from 'react';
import './TeamStyled';
import { TeamContainer, TeamGrid, TeamMember, JoinForm, FormContainer } from './TeamStyled';
import { AboutText, AboutWrapper } from '../About/AboutStyled';
import teamData from '../../constants/teamData';


const TeamMembers = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleResumeChange = (e) => {
    setResume(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your submission, ${name}!`);

    setName('');
    setEmail('');
    setResume('');
  }
  
  return (
    <TeamContainer>
      <h2>Meet Our Team</h2>
      <TeamGrid>
        {teamData.map((member, index) => (
          <TeamMember key={index}>
            <img src={`${member.image}`} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </TeamMember>
        ))}
      </TeamGrid>
      <AboutWrapper>
        <FormContainer>
            <JoinForm>
                <h2 class="h">Join Our Team</h2>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="name">Name:</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={name}
                    onChange={handleNameChange}
                    required 
                  />

                <label htmlFor="email">Email:</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={email}
                  onChange={handleEmailChange}
                  required 
                />

                <label htmlFor="resume">Upload Resume:</label>
                <input 
                  type="file" 
                  id="resume" 
                  name="resume" 
                  accept=".pdf,.doc,.docx" 
                  value={resume}
                  onChange={handleResumeChange}
                  required 
                />

                <button type="submit">Submit</button>
                </form>
            </JoinForm>
       </FormContainer>
            <AboutText>
            <p class="small">Commme on!</p>
                <p>
                    Join us and become part of our vibrant team! 
                    We're always on the lookout for passionate individuals 
                    who are eager to contribute to our mission of crafting 
                    delicious and nutritious meals. Explore exciting career 
                    opportunities with us today!
                </p>
            </AboutText>
        </AboutWrapper>
    </TeamContainer>
  );
};

export default TeamMembers;