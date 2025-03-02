import { useLocation, useNavigate } from 'react-router-dom';
import './ServicesInfo.css';
import { 
  FaGlobe, FaApple, FaAndroid, FaReact, FaArrowLeft, 
  FaCheckCircle, FaGithub, FaDatabase, FaServer,
  FaAws
} from 'react-icons/fa';
import { SiFlutter, SiFirebase, SiGoogle } from 'react-icons/si';
import { useLanguage } from '../context/LanguageContext';

function ServicesInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const { service } = location.state || {};
  const { lang } = useLanguage();

  const handleBack = () => {
    navigate('/services');
  };

  if (!service) {
    return <div>{lang.servicesInfoNotFound}</div>;
  }

  const getTechStack = (title) => {
    switch (title) {
      case lang.servicesWebTitle:
        return lang.techStackWeb;
      case lang.servicesNativeTitle:
        return lang.techStackNative;
      case lang.servicesCrossTitle:
        return lang.techStackCross;
      default:
        return [];
    }
  };

  const getDetailedFeatures = (title) => {
    switch (title) {
      case lang.servicesWebTitle:
        return [
          { 
            icon: <FaReact />, 
            title: lang.webDetailedFeature1Title, 
            description: lang.webDetailedFeature1Desc
          },
          { 
            icon: <FaServer />, 
            title: lang.webDetailedFeature2Title, 
            description: lang.webDetailedFeature2Desc
          },
          { 
            icon: <FaDatabase />, 
            title: lang.webDetailedFeature3Title, 
            description: lang.webDetailedFeature3Desc
          },
          { 
            icon: <FaGithub />, 
            title: lang.webDetailedFeature4Title, 
            description: lang.webDetailedFeature4Desc
          }
        ];
      case lang.servicesNativeTitle:
        return [
          { 
            icon: <FaApple />, 
            title: lang.nativeDetailedFeature1Title, 
            description: lang.nativeDetailedFeature1Desc
          },
          { 
            icon: <FaAndroid />, 
            title: lang.nativeDetailedFeature2Title, 
            description: lang.nativeDetailedFeature2Desc
          },
          { 
            icon: <SiFirebase />, 
            title: lang.nativeDetailedFeature3Title, 
            description: lang.nativeDetailedFeature3Desc
          },
          { 
            icon: <SiGoogle />, 
            title: lang.nativeDetailedFeature4Title, 
            description: lang.nativeDetailedFeature4Desc
          }
        ];
      case lang.servicesCrossTitle:
        return [
          { 
            icon: <FaReact />, 
            title: lang.crossDetailedFeature1Title, 
            description: lang.crossDetailedFeature1Desc
          },
          { 
            icon: <SiFlutter />, 
            title: lang.crossDetailedFeature2Title, 
            description: lang.crossDetailedFeature2Desc
          },
          { 
            icon: <FaAws />, 
            title: lang.crossDetailedFeature3Title, 
            description: lang.crossDetailedFeature3Desc
          },
          { 
            icon: <FaCheckCircle />, 
            title: lang.crossDetailedFeature4Title, 
            description: lang.crossDetailedFeature4Desc
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

  const techStack = getTechStack(service.title);
  const detailedFeatures = getDetailedFeatures(service.title);

  return (
    <div className="service-info-container">
      <div className="service-info-header">
        <div className="service-icon-large">
          {getIconComponent(service.iconType)}
        </div>
        <h1>{service.title}</h1>
        <p className="service-description">{service.description}</p>
      </div>
      
      <section className="tech-stack-section">
        <h2>{lang.servicesInfoTechStackTitle}</h2>
        <div className="tech-pills">
          {techStack.map((tech, index) => (
            <span key={index} className="tech-pill">{tech}</span>
          ))}
        </div>
      </section>
      
      <section className="detailed-features">
        <h2>{lang.servicesInfoDetailedFeaturesTitle}</h2>
        <div className="features-grid">
          {detailedFeatures.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ServicesInfo;
