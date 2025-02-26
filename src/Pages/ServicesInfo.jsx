import { useLocation, useNavigate } from 'react-router-dom';
import './ServicesInfo.css';
import { 
  FaGlobe, FaApple, FaAndroid, FaReact, FaArrowLeft, 
  FaCheckCircle, FaGithub, FaDatabase, FaServer,
  FaAws
} from 'react-icons/fa';
import { SiFlutter, SiFirebase, SiGoogle } from 'react-icons/si';

function ServicesInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const { service } = location.state || {};

  const handleBack = () => {
    navigate('/services');
  };

  if (!service) {
    return <div>Service not found</div>;
  }

  const getTechStack = (title) => {
    switch (title) {
      case 'Web Development':
        return ['React', 'Node.js', 'MongoDB', 'AWS'];
      case 'Native App Development':
        return ['Swift', 'Kotlin', 'Firebase', 'Google Cloud'];
      case 'Cross-Platform Development':
        return ['React Native', 'Flutter', 'Firebase', 'REST APIs'];
      default:
        return [];
    }
  };

  const getDetailedFeatures = (title) => {
    switch (title) {
      case 'Web Development':
        return [
          { 
            icon: <FaReact />, 
            title: 'Modern Frontend Architecture', 
            description: 'Building responsive and interactive user interfaces using React.js, Next.js, and modern state management solutions. Implementing progressive web apps (PWAs) for offline capabilities.'
          },
          { 
            icon: <FaServer />, 
            title: 'Scalable Backend Systems', 
            description: 'Developing robust Node.js/Express backends with microservices architecture. Implementing RESTful APIs and GraphQL endpoints for efficient data handling.'
          },
          { 
            icon: <FaDatabase />, 
            title: 'Advanced Database Solutions', 
            description: 'Designing optimized database schemas using MongoDB and PostgreSQL. Implementing caching strategies with Redis for improved performance.'
          },
          { 
            icon: <FaGithub />, 
            title: 'Professional Development Workflow', 
            description: 'Following industry-standard Git workflows with CI/CD pipelines. Implementing automated testing and deployment strategies.'
          }
        ];
      case 'Native App Development':
        return [
          { 
            icon: <FaApple />, 
            title: 'iOS Excellence', 
            description: 'Creating native iOS applications using Swift and SwiftUI. Implementing Apple\'s latest design guidelines and platform-specific features like Face ID and Apple Pay.'
          },
          { 
            icon: <FaAndroid />, 
            title: 'Android Mastery', 
            description: 'Developing Android apps with Kotlin and Jetpack Compose. Utilizing Material Design principles and Android-specific capabilities like widgets and notifications.'
          },
          { 
            icon: <SiFirebase />, 
            title: 'Cloud Integration', 
            description: 'Implementing Firebase services for real-time data sync, authentication, and analytics. Setting up push notifications and crash reporting.'
          },
          { 
            icon: <SiGoogle />, 
            title: 'Platform Services', 
            description: 'Integrating platform-specific services like Google Maps, in-app purchases, and social authentication. Implementing deep linking and app indexing.'
          }
        ];
      case 'Cross-Platform Development':
        return [
          { 
            icon: <FaReact />, 
            title: 'React Native Solutions', 
            description: 'Building cross-platform applications with React Native and Expo. Implementing native modules and custom bridges for platform-specific functionality.'
          },
          { 
            icon: <SiFlutter />, 
            title: 'Flutter Excellence', 
            description: 'Creating beautiful apps with Flutter and Dart. Utilizing custom animations and platform-specific design patterns for a native feel.'
          },
          { 
            icon: <FaAws />, 
            title: 'Cloud Architecture', 
            description: 'Implementing AWS services for scalable backend solutions. Setting up CDN, serverless functions, and managed databases.'
          },
          { 
            icon: <FaCheckCircle />, 
            title: 'Quality Assurance', 
            description: 'Comprehensive testing strategy including unit tests, integration tests, and E2E testing. Implementing automated UI testing and performance monitoring.'
          }
        ];
      default:
        return [];
    }
  };

  const getIconComponent = (iconType) => {
    if (Array.isArray(iconType)) {
      return (
        <div className="icon-group">
          {iconType.map((type, index) => {
            const Icon = type === 'FaApple' ? FaApple :
                        type === 'FaAndroid' ? FaAndroid :
                        type === 'FaReact' ? FaReact :
                        type === 'SiFlutter' ? SiFlutter :
                        FaGlobe;
            return <Icon key={index} className="service-icon" />;
          })}
        </div>
      );
    }
    
    const Icon = iconType === 'FaGlobe' ? FaGlobe :
                 iconType === 'FaApple' ? FaApple :
                 iconType === 'FaAndroid' ? FaAndroid :
                 FaGlobe;
    return <Icon className="service-icon" />;
  };

  return (
    <div className="service-info-container">
      <div className="service-info-header">
        <div className="service-icon-large">{getIconComponent(service.iconType)}</div>
        <h1>{service.title}</h1>
        <p className="service-description">{service.description}</p>
      </div>

      <div className="tech-stack-section">
        <h2>Tech Stack</h2>
        <div className="tech-pills">
          {getTechStack(service.title).map((tech, index) => (
            <span key={index} className="tech-pill">{tech}</span>
          ))}
        </div>
      </div>

      <div className="detailed-features">
        <h2>Key Features</h2>
        <div className="features-grid">
          {getDetailedFeatures(service.title).map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesInfo;
