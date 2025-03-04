import React, { useState, useEffect } from 'react'
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaCalculator, FaMobileAlt, FaGlobe, FaAndroid, FaApple, FaDesktop, FaShoppingCart, FaUsers, FaCalendarAlt, FaImage, FaLock, FaSearch, FaLanguage, FaComments, FaChartBar } from 'react-icons/fa'
import './Prices.css'
import { useLanguage } from '../context/LanguageContext'
import Svenska from '../Languages/Svenska'

const Prices = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [selections, setSelections] = useState({})
  const [showResult, setShowResult] = useState(false)
  const [price, setPrice] = useState(0)
  const [animateResult, setAnimateResult] = useState(false)
  
  // Get language context
  let lang;
  try {
    const context = useLanguage();
    lang = context.lang;
  } catch (error) {
    console.error("Language context error in Prices:", error);
    // Fallback to default values
    lang = Svenska;
  }
  
  // Define questions with language support
  const questions = [
    {
      id: 'platform',
      question: lang.pricePlatformQuestion,
      options: [
        { 
          value: 'website', 
          label: lang.pricePlatformWebsite, 
          icon: <FaGlobe />, 
          description: lang.pricePlatformWebsiteDesc 
        },
        { 
          value: 'ios', 
          label: lang.pricePlatformIos, 
          icon: <FaApple />, 
          description: lang.pricePlatformIosDesc 
        },
        { 
          value: 'android', 
          label: lang.pricePlatformAndroid, 
          icon: <FaAndroid />, 
          description: lang.pricePlatformAndroidDesc 
        },
        { 
          value: 'both', 
          label: lang.pricePlatformBoth, 
          icon: <FaMobileAlt />, 
          description: lang.pricePlatformBothDesc 
        },
        { 
          value: 'all', 
          label: lang.pricePlatformAll, 
          icon: <FaDesktop />, 
          description: lang.pricePlatformAllDesc 
        }
      ],
      multiSelect: false
    },
    {
      id: 'size',
      question: lang.priceSizeQuestion,
      options: [
        { 
          value: 'small', 
          label: lang.priceSizeSmall, 
          icon: <FaDesktop />, 
          description: lang.priceSizeSmallDesc 
        },
        { 
          value: 'medium', 
          label: lang.priceSizeMedium, 
          icon: <FaDesktop />, 
          description: lang.priceSizeMediumDesc 
        },
        { 
          value: 'large', 
          label: lang.priceSizeLarge, 
          icon: <FaDesktop />, 
          description: lang.priceSizeLargeDesc 
        }
      ],
      multiSelect: false
    },
    {
      id: 'features',
      question: lang.priceFeaturesQuestion,
      options: [
        { 
          value: 'auth', 
          label: lang.priceFeatureAuth, 
          icon: <FaUsers />, 
          description: lang.priceFeatureAuthDesc 
        },
        { 
          value: 'payment', 
          label: lang.priceFeaturePayment, 
          icon: <FaShoppingCart />, 
          description: lang.priceFeaturePaymentDesc 
        },
        { 
          value: 'admin', 
          label: lang.priceFeatureAdmin, 
          icon: <FaUsers />, 
          description: lang.priceFeatureAdminDesc 
        },
        { 
          value: 'media', 
          label: lang.priceFeatureMedia, 
          icon: <FaImage />, 
          description: lang.priceFeatureMediaDesc 
        },
        { 
          value: 'search', 
          label: lang.priceFeatureSearch, 
          icon: <FaSearch />, 
          description: lang.priceFeatureSearchDesc 
        },
        { 
          value: 'multilingual', 
          label: lang.priceFeatureMultilingual, 
          icon: <FaLanguage />, 
          description: lang.priceFeatureMultilingualDesc 
        },
        { 
          value: 'chat', 
          label: lang.priceFeatureChat, 
          icon: <FaComments />, 
          description: lang.priceFeatureChatDesc 
        },
        { 
          value: 'analytics', 
          label: lang.priceFeatureAnalytics, 
          icon: <FaChartBar />, 
          description: lang.priceFeatureAnalyticsDesc 
        }
      ],
      multiSelect: true
    },
    {
      id: 'design',
      question: lang.priceDesignQuestion,
      options: [
        { 
          value: 'basic', 
          label: lang.priceDesignBasic, 
          icon: <FaDesktop />, 
          description: lang.priceDesignBasicDesc 
        },
        { 
          value: 'custom', 
          label: lang.priceDesignCustom, 
          icon: <FaDesktop />, 
          description: lang.priceDesignCustomDesc 
        },
        { 
          value: 'premium', 
          label: lang.priceDesignPremium, 
          icon: <FaDesktop />, 
          description: lang.priceDesignPremiumDesc 
        }
      ],
      multiSelect: false
    },
    {
      id: 'timeline',
      question: lang.priceTimelineQuestion,
      options: [
        { 
          value: 'standard', 
          label: lang.priceTimelineStandard, 
          icon: <FaCalendarAlt />, 
          description: lang.priceTimelineStandardDesc 
        },
        { 
          value: 'fast', 
          label: lang.priceTimelineFast, 
          icon: <FaCalendarAlt />, 
          description: lang.priceTimelineFastDesc 
        },
        { 
          value: 'urgent', 
          label: lang.priceTimelineUrgent, 
          icon: <FaCalendarAlt />, 
          description: lang.priceTimelineUrgentDesc 
        }
      ],
      multiSelect: false
    }
  ]

  useEffect(() => {
    // Initialize selections
    const initialSelections = {}
    questions.forEach(q => {
      initialSelections[q.id] = q.multiSelect ? [] : ''
    })
    setSelections(initialSelections)
    
    // Animate elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el)
    })
    
    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el)
      })
    }
  }, [])

  const handleSelect = (questionId, value) => {
    setSelections(prev => {
      const currentQuestion = questions.find(q => q.id === questionId)
      
      if (currentQuestion.multiSelect) {
        const currentSelections = [...prev[questionId]]
        if (currentSelections.includes(value)) {
          return {
            ...prev,
            [questionId]: currentSelections.filter(v => v !== value)
          }
        } else {
          return {
            ...prev,
            [questionId]: [...currentSelections, value]
          }
        }
      } else {
        return {
          ...prev,
          [questionId]: value
        }
      }
    })
  }

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1)
      // Scroll to the very top of the page
      window.scrollTo(0, 0)
    } else {
      calculatePrice()
      setShowResult(true)
      setTimeout(() => {
        setAnimateResult(true)
        // Scroll to top when showing results
        window.scrollTo(0, 0)
      }, 100)
    }
  }

  const handlePrevious = () => {
    setCurrentStep(prev => prev - 1)
    // Scroll to the very top of the page
    window.scrollTo(0, 0)
  }

  const handleReset = () => {
    // First set up the initial selections
    const initialSelections = {}
    questions.forEach(q => {
      initialSelections[q.id] = q.multiSelect ? [] : ''
    })
    
    // Hide the result first
    setAnimateResult(false)
    
    // Wait for animation to complete before resetting
    setTimeout(() => {
      setSelections(initialSelections)
      setCurrentStep(0)
      setShowResult(false)
      setPrice(0)
      
      // After a brief delay, scroll to top of the page
      setTimeout(() => {
        window.scrollTo(0, 0)
        
        // Add visible class to calculator after it's rendered
        setTimeout(() => {
          const priceCalculator = document.querySelector('.price-calculator')
          if (priceCalculator) {
            priceCalculator.classList.add('visible')
          }
        }, 100)
      }, 100)
    }, 300)
  }

  const handleContact = () => {
    // Do nothing for now
    console.log('Contact button clicked - functionality not implemented yet')
    
    // Uncomment this when ready to implement
    // window.location.href = '/contact'
  }

  const calculatePrice = () => {
    let basePrice = 0
    
    // Platform pricing (reduced prices)
    switch(selections.platform) {
      case 'website':
        basePrice = 15000
        break
      case 'ios':
        basePrice = 20000
        break
      case 'android':
        basePrice = 20000
        break
      case 'both':
        basePrice = 30000
        break
      case 'all':
        basePrice = 40000
        break
      default:
        basePrice = 15000
    }
    
    // Project size multiplier
    let sizeMultiplier = 1
    switch(selections.size) {
      case 'small':
        sizeMultiplier = 1
        break
      case 'medium':
        sizeMultiplier = 1.5
        break
      case 'large':
        sizeMultiplier = 2
        break
      default:
        sizeMultiplier = 1
    }
    
    // Apply size multiplier to base price
    let calculatedPrice = basePrice * sizeMultiplier
    
    // Add feature costs
    const featureCosts = {
      'auth': 5000,
      'payment': 8000,
      'admin': 10000,
      'media': 7000,
      'search': 6000,
      'multilingual': 8000,
      'chat': 12000,
      'analytics': 9000
    }
    
    if (selections.features && selections.features.length > 0) {
      selections.features.forEach(feature => {
        calculatedPrice += featureCosts[feature]
      })
    }
    
    // Add design costs
    const designCosts = {
      'basic': 0,
      'custom': 10000,
      'premium': 20000
    }
    
    calculatedPrice += designCosts[selections.design] || 0
    
    // Apply timeline multiplier
    if (selections.timeline === 'fast') {
      calculatedPrice *= 1.2 // 20% increase for fast timeline
    } else if (selections.timeline === 'urgent') {
      calculatedPrice *= 1.5 // 50% increase for urgent timeline
    }
    
    // Round to nearest thousand
    calculatedPrice = Math.round(calculatedPrice / 1000) * 1000
    
    setPrice(calculatedPrice)
  }
  
  // Helper functions for displaying platform and timeline labels
  const getPlatformLabel = () => {
    const platformLabels = {
      'website': lang.pricePlatformWebsite,
      'ios': lang.pricePlatformIos,
      'android': lang.pricePlatformAndroid,
      'both': lang.pricePlatformBoth,
      'all': lang.pricePlatformAll
    }
    return platformLabels[selections.platform] || ''
  }
  
  const featureLabels = {
    'auth': lang.priceFeatureAuth,
    'payment': lang.priceFeaturePayment,
    'admin': lang.priceFeatureAdmin,
    'media': lang.priceFeatureMedia,
    'search': lang.priceFeatureSearch,
    'multilingual': lang.priceFeatureMultilingual,
    'chat': lang.priceFeatureChat,
    'analytics': lang.priceFeatureAnalytics
  }
  
  const designLabels = {
    'basic': lang.priceDesignBasic,
    'custom': lang.priceDesignCustom,
    'premium': lang.priceDesignPremium
  }
  
  const timelineFactors = {
    'standard': lang.priceTimelineStandardFactor,
    'fast': lang.priceTimelineFastFactor,
    'urgent': lang.priceTimelineUrgentFactor
  }
  
  const sizeCosts = {
    'small': '1x',
    'medium': '1.5x',
    'large': '2x'
  }
  
  const renderPriceBreakdown = () => {
    // Calculate platform cost with size multiplier
    const platformCosts = {
      'website': 15000,
      'ios': 20000,
      'android': 20000,
      'both': 30000,
      'all': 40000
    }
    
    const sizeMultipliers = {
      'small': 1,
      'medium': 1.5,
      'large': 2
    }
    
    const featureCosts = {
      'auth': 5000,
      'payment': 8000,
      'admin': 10000,
      'media': 7000,
      'search': 6000,
      'multilingual': 8000,
      'chat': 12000,
      'analytics': 9000
    }
    
    const designCosts = {
      'basic': 0,
      'custom': 10000,
      'premium': 20000
    }
    
    const platformWithSize = platformCosts[selections.platform] * sizeMultipliers[selections.size]
    
    return (
      <>
        <div className="breakdown-item">
          <span>{getPlatformLabel()} ({sizeCosts[selections.size]})</span>
          <span>{platformWithSize.toLocaleString()} SEK</span>
        </div>
        
        {selections.features.map(feature => (
          <div className="breakdown-item" key={feature}>
            <span>{featureLabels[feature]}</span>
            <span>{featureCosts[feature].toLocaleString()} SEK</span>
          </div>
        ))}
        
        <div className="breakdown-item">
          <span>{designLabels[selections.design]}</span>
          <span>{designCosts[selections.design].toLocaleString()} SEK</span>
        </div>
        
        {(selections.timeline === 'fast' || selections.timeline === 'urgent') && (
          <div className="breakdown-item">
            <span>{timelineFactors[selections.timeline]}</span>
            <span>{selections.timeline === 'fast' ? '+20%' : '+50%'}</span>
          </div>
        )}
        
        <div className="breakdown-item total">
          <span>{lang.priceTotal}</span>
          <span>{price.toLocaleString()} SEK</span>
        </div>
      </>
    )
  }

  const currentQuestion = questions[currentStep]

  return (
    <div className="prices">
      {!showResult ? (
        <div className="price-calculator animate-on-scroll" id="price-calculator-top">
          <div className="calculator-header">
            <h1>{lang.priceCalculatorTitle}</h1>
            <p className="calculator-subtitle">{lang.priceCalculatorSubtitle}</p>
          </div>
          
          <div className="progress-bar">
            {questions.map((q, index) => (
              <div 
                key={index}
                className={`progress-step ${index === currentStep ? 'active' : ''} ${index < currentStep ? 'completed' : ''}`}
              >
                {index < currentStep ? <FaCheckCircle /> : index + 1}
              </div>
            ))}
          </div>
          
          <div className="question-container">
            <h2 className="question-title">{currentQuestion.question}</h2>
            
            <div className={`options-container ${currentQuestion.multiSelect ? 'multi-select' : ''}`}>
              {currentQuestion.options.map(option => (
                <div 
                  key={option.value}
                  className={`option-card ${currentQuestion.multiSelect 
                    ? selections[currentQuestion.id].includes(option.value) ? 'selected' : ''
                    : selections[currentQuestion.id] === option.value ? 'selected' : ''
                  }`}
                  onClick={() => handleSelect(currentQuestion.id, option.value)}
                >
                  <div className="option-icon">
                    {option.icon}
                  </div>
                  <div className="option-content">
                    <h3 className="option-label">{option.label}</h3>
                    <p className="option-description">{option.description}</p>
                  </div>
                  
                  <div className="selection-indicator">
                    {currentQuestion.multiSelect ? (
                      <div className={`checkbox ${selections[currentQuestion.id].includes(option.value) ? 'checked' : ''}`}>
                        {selections[currentQuestion.id].includes(option.value) && <FaCheckCircle />}
                      </div>
                    ) : (
                      <div className={`radio ${selections[currentQuestion.id] === option.value ? 'checked' : ''}`}>
                        {selections[currentQuestion.id] === option.value && <div className="radio-inner"></div>}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="navigation-buttons">
              {currentStep > 0 && (
                <button className="nav-button previous" onClick={handlePrevious}>
                  <FaArrowLeft /> {lang.pricePreviousButton}
                </button>
              )}
              
              <button 
                className="nav-button next" 
                onClick={handleNext}
                disabled={
                  currentQuestion.multiSelect 
                    ? selections[currentQuestion.id].length === 0
                    : !selections[currentQuestion.id]
                }
              >
                {currentStep < questions.length - 1 ? lang.priceNextButton : lang.priceCalculateButton} <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={`price-result animate-on-scroll ${animateResult ? 'visible' : ''}`}>
          <div className="result-header">
            <FaCalculator className="result-icon" />
            <h1>{lang.priceEstimateTitle}</h1>
            <div className="platform-badge">{getPlatformLabel()}</div>
          </div>
          
          <div className="price-display">
            <span className="price-amount">{price.toLocaleString()}</span>
            <span className="price-currency">SEK</span>
          </div>
          
          <p className="price-note">{lang.priceEstimateNote}</p>
          
          <div className="breakdown-container">
            <h3>{lang.priceBreakdownTitle}</h3>
            {renderPriceBreakdown()}
          </div>
          
          <div className="result-actions">
            <button className="action-button contact" onClick={handleContact}>
              {lang.priceContactButton}
            </button>
            <button className="action-button reset" onClick={handleReset}>
              {lang.priceStartOverButton}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Prices
