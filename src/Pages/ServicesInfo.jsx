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
    return <div>Tjänsten hittades inte</div>;
  }

  const getTechStack = (title) => {
    switch (title) {
      case 'Webbutveckling':
        return ['React', 'Node.js', 'MongoDB', 'AWS'];
      case 'Nativ Apputveckling':
        return ['Swift', 'Kotlin', 'Firebase', 'Google Cloud'];
      case 'Korsplattformsutveckling':
        return ['React Native', 'Flutter', 'Firebase', 'REST APIs'];
      default:
        return [];
    }
  };

  const getDetailedFeatures = (title) => {
    switch (title) {
      case 'Webbutveckling':
        return [
          { 
            icon: <FaReact />, 
            title: 'Modern Frontend-arkitektur', 
            description: 'Bygger responsiva och interaktiva användargränssnitt med React.js, Next.js och moderna state management-lösningar. Implementerar progressiva webbappar (PWA) för offline-funktionalitet.'
          },
          { 
            icon: <FaServer />, 
            title: 'Skalbara Backend-system', 
            description: 'Utvecklar robusta Node.js/Express-backends med mikroservicearkitektur. Implementerar RESTful APIs och GraphQL-endpoints för effektiv datahantering.'
          },
          { 
            icon: <FaDatabase />, 
            title: 'Avancerade Databaslösningar', 
            description: 'Designar optimerade databasscheman med MongoDB och PostgreSQL. Implementerar cachningsstrategier med Redis för förbättrad prestanda.'
          },
          { 
            icon: <FaGithub />, 
            title: 'Professionellt Utvecklingsflöde', 
            description: 'Följer branschstandard Git-arbetsflöden med CI/CD-pipelines. Implementerar automatiserad testning och driftsättningsstrategier.'
          }
        ];
      case 'Nativ Apputveckling':
        return [
          { 
            icon: <FaApple />, 
            title: 'iOS-excellens', 
            description: 'Skapar nativa iOS-applikationer med Swift och SwiftUI. Implementerar Apples senaste designriktlinjer och plattformsspecifika funktioner som Face ID och Apple Pay.'
          },
          { 
            icon: <FaAndroid />, 
            title: 'Android-expertis', 
            description: 'Utvecklar Android-appar med Kotlin och Jetpack Compose. Använder Material Design-principer och Android-specifika funktioner som widgets och notiser.'
          },
          { 
            icon: <SiFirebase />, 
            title: 'Molnintegration', 
            description: 'Implementerar Firebase-tjänster för realtidssynkronisering, autentisering och analys. Konfigurerar push-notiser och kraschrapportering.'
          },
          { 
            icon: <SiGoogle />, 
            title: 'Plattformstjänster', 
            description: 'Integrerar plattformsspecifika tjänster som Google Maps, in-app-köp och social autentisering. Implementerar deep linking och app-indexering.'
          }
        ];
      case 'Korsplattformsutveckling':
        return [
          { 
            icon: <FaReact />, 
            title: 'React Native-lösningar', 
            description: 'Bygger korsplattformsapplikationer med React Native och Expo. Implementerar nativa moduler och anpassade bryggor för plattformsspecifik funktionalitet.'
          },
          { 
            icon: <SiFlutter />, 
            title: 'Flutter-excellens', 
            description: 'Skapar vackra appar med Flutter och Dart. Använder anpassade animationer och plattformsspecifika designmönster för en nativ känsla.'
          },
          { 
            icon: <FaAws />, 
            title: 'Molnarkitektur', 
            description: 'Implementerar AWS-tjänster för skalbara backend-lösningar. Konfigurerar CDN, serverlösa funktioner och hanterade databaser.'
          },
          { 
            icon: <FaCheckCircle />, 
            title: 'Kvalitetssäkring', 
            description: 'Omfattande teststrategi inklusive enhetstester, integrationstester och E2E-testning. Implementerar automatiserad UI-testning och prestandaövervakning.'
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
        <h2>Teknisk Stack</h2>
        <div className="tech-pills">
          {getTechStack(service.title).map((tech, index) => (
            <span key={index} className="tech-pill">{tech}</span>
          ))}
        </div>
      </div>

      <div className="detailed-features">
        <h2>Nyckelfunktioner</h2>
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
