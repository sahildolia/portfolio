import HeadingwithBar from '../../ui/headingwithBar/HeadingwithBar';
import ProgressBar from '../../ui/ProgressBar/ProgressBar';
import './Skills.css';

const Skills = () => {
  const skills = [
    { skill: 'Web Design', percentage: 85 },
    { skill: 'Graphic Design', percentage: 90 },
    { skill: 'Figma Mockups', percentage: 95 },
    { skill: 'React.js', percentage: 70 },
    { skill: 'JavaScript', percentage: 60 },
    { skill: 'TypeScript', percentage: 56 }
  ];

  return (
    <div className="skills-container px-4 md:px-8">
      <HeadingwithBar
        subtitle="My level of knowledge in some tools" 
        title="My Skills" 
        showBar={true}
        center={true}
      />
      
      <div className="max-w-4xl mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            {skills.slice(0, 3).map((item, index) => (
              <ProgressBar 
                key={index}
                skill={item.skill}
                percentage={item.percentage}
              />
            ))}
          </div>
          
          {/* Right Column */}
          <div>
            {skills.slice(3).map((item, index) => (
              <ProgressBar 
                key={index}
                skill={item.skill}
                percentage={item.percentage}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;