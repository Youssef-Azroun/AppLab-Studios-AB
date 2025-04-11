import React, { useState, useEffect } from 'react'
import { FaArrowRight, FaArrowLeft, FaCheckCircle, FaCalculator, FaMobileAlt, FaGlobe, FaAndroid, FaApple, FaDesktop, FaShoppingCart, FaUsers, FaCalendarAlt, FaImage, FaLock, FaSearch, FaLanguage, FaComments, FaChartBar } from 'react-icons/fa'
import './Prices.css'
import { useLanguage } from '../context/LanguageContext'
import Svenska from '../Languages/Svenska'
import { useNavigate } from 'react-router-dom'

const Prices = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [selections, setSelections] = useState({})
  const [showResult, setShowResult] = useState(false)
  const [price, setPrice] = useState(0)
  const [monthlyFee, setMonthlyFee] = useState(0)
  const [animateResult, setAnimateResult] = useState(false)
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [selectedDesign, setSelectedDesign] = useState('basic');
  const [selectedTimeline, setSelectedTimeline] = useState('standard');
  const [paymentOption, setPaymentOption] = useState('full'); // 'full' or 'lease'
  const [leaseDuration, setLeaseDuration] = useState(48); // Fixed 12-month minimum commitment
  
  const navigate = useNavigate()
  
  // Monthly costs for features
  const monthlyFeatureCosts = {
    'auth': 100,    // Authentication service
    'payment': 200, // Payment gateway fees
    'admin': 0,     // Admin panel maintenance (fee removed)
    'media': 100,   // Media storage and CDN
    'search': 0,    // Search service (fee removed)
    'multilingual': 0, // Translation service (fee removed)
    'chat': 300,    // Real-time chat service
    'analytics': 100 // Analytics service
  }

  // Monthly platform costs
  const monthlyPlatformCosts = {
    'website': 400,
    'ios': 700,
    'android': 700,
    'both': 1300,
    'all': 1800
  }

  // Design costs
  const designCosts = {
    'basic': 0,
    'custom': 5000,
    'premium': 10000
  }

  // Size multipliers
  const sizeMultipliers = {
    'small': 1,
    'medium': 1.5,
    'large': 2
  }
  
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
      setMonthlyFee(0)
      
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
    const invoiceData = {
      platform: selections.platform,
      size: selections.size,
      features: selections.features,
      design: selections.design,
      timeline: selections.timeline,
      price: price,
      monthlyFee: monthlyFee,
      platformLabel: getPlatformLabel(),
      featureLabels: selections.features.map(feature => featureLabels[feature]),
      designLabel: designLabels[selections.design],
      timelineFactor: timelineFactors[selections.timeline],
      monthlyFeatureCosts: selections.features.reduce((acc, feature) => {
        acc[feature] = monthlyFeatureCosts[feature];
        return acc;
      }, {}),
      monthlyPlatformCost: monthlyPlatformCosts[selections.platform] * sizeMultipliers[selections.size],
      commission: monthlyFee * 0.2,
      monthlyFeeBreakdown: {
        platformMaintenance: monthlyPlatformCosts[selections.platform] * sizeMultipliers[selections.size],
        features: selections.features.reduce((acc, feature) => {
          acc[feature] = {
            label: featureLabels[feature],
            cost: monthlyFeatureCosts[feature]
          };
          return acc;
        }, {}),
        commission: monthlyFee * 0.2,
        total: monthlyFee
      },
      paymentOption: paymentOption,
      monthlyPayment: paymentOption === 'lease' ? Math.round(price / leaseDuration) : null,
      leaseDuration: leaseDuration
    };
    
    navigate('/contact', { state: { invoiceData } });
  }

  const calculatePrice = () => {
    let basePrice = 0
    let monthlyBaseFee = 0
    
    // Platform pricing (reduced prices)
    switch(selections.platform) {
      case 'website':
        basePrice = 7500
        monthlyBaseFee = monthlyPlatformCosts.website
        break
      case 'ios':
        basePrice = 10000
        monthlyBaseFee = monthlyPlatformCosts.ios
        break
      case 'android':
        basePrice = 10000
        monthlyBaseFee = monthlyPlatformCosts.android
        break
      case 'both':
        basePrice = 15000
        monthlyBaseFee = monthlyPlatformCosts.both
        break
      case 'all':
        basePrice = 20000
        monthlyBaseFee = monthlyPlatformCosts.all
        break
      default:
        basePrice = 7500
        monthlyBaseFee = monthlyPlatformCosts.website
    }
    
    // Project size multiplier
    let sizeMultiplier = sizeMultipliers[selections.size] || 1
    
    // Apply size multiplier to base price
    let calculatedPrice = Math.round(basePrice * sizeMultiplier)
    let calculatedMonthlyFee = Math.round(monthlyBaseFee * sizeMultiplier)
    
    // Add feature costs
    const featureCosts = {
      'auth': 2500,
      'payment': 4000,
      'admin': 5000,
      'media': 3500,
      'search': 3000,
      'multilingual': 4000,
      'chat': 6000,
      'analytics': 4500
    }
    
    if (selections.features && selections.features.length > 0) {
      selections.features.forEach(feature => {
        calculatedPrice += featureCosts[feature]
        calculatedMonthlyFee += monthlyFeatureCosts[feature]
      })
    }
    
    // Add design costs
    const designCosts = {
      'basic': 0,
      'custom': 5000,
      'premium': 10000
    }
    
    calculatedPrice += designCosts[selections.design] || 0
    
    // Apply timeline multiplier
    if (selections.timeline === 'fast') {
      calculatedPrice = Math.round(calculatedPrice * 1.2) // 20% increase for fast timeline
    } else if (selections.timeline === 'urgent') {
      calculatedPrice = Math.round(calculatedPrice * 1.5) // 50% increase for urgent timeline
    }
    
    // Add your commission (20% of monthly fee)
    const commission = Math.round(calculatedMonthlyFee * 0.2)
    calculatedMonthlyFee = Math.round(calculatedMonthlyFee + commission)
    
    // Round to nearest thousand for price
    calculatedPrice = Math.round(calculatedPrice / 1000) * 1000
    
    setPrice(calculatedPrice)
    setMonthlyFee(calculatedMonthlyFee)
  }

  const calculateLeasePayment = () => {
    const monthlyPayment = Math.round(price / leaseDuration);
    return {
      monthlyPayment,
      totalLeaseAmount: price,
      duration: leaseDuration
    };
  };

  const calculateMonthlyFee = () => {
    const platformMaintenance = Math.round(monthlyPlatformCosts[selections.platform] * sizeMultipliers[selections.size]);
    const features = selections.features.reduce((acc, feature) => {
      acc[feature] = {
        label: featureLabels[feature],
        cost: Math.round(monthlyFeatureCosts[feature])
      };
      return acc;
    }, {});
    
    const totalFeatureCosts = Math.round(Object.values(features).reduce((sum, feature) => sum + feature.cost, 0));
    const commission = Math.round((platformMaintenance + totalFeatureCosts) * 0.2);
    const total = Math.round(platformMaintenance + totalFeatureCosts + commission);

    return {
      platformMaintenance,
      features,
      commission,
      total
    };
  };
  
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
  
  const renderPriceBreakdown = () => {
    const leaseDetails = calculateLeasePayment();
    const monthlyFeeDetails = calculateMonthlyFee();

    // Calculate base platform price
    const basePlatformPrice = {
      'website': 7500,
      'ios': 10000,
      'android': 10000,
      'both': 15000,
      'all': 20000
    }[selections.platform] * sizeMultipliers[selections.size];

    // Calculate feature costs
    const featureCosts = {
      'auth': 2500,
      'payment': 4000,
      'admin': 5000,
      'media': 3500,
      'search': 3000,
      'multilingual': 4000,
      'chat': 6000,
      'analytics': 4500
    };
    
    // Helper function to calculate monthly cost
    const getMonthlyAmount = (amount) => Math.round(amount / leaseDuration);
    
    // List of features with no monthly fee
    const freeMonthlyFeatures = ['admin', 'search', 'multilingual'];
    
    return (
      <>
        {/* Payment Option Selector */}
        <div className="payment-options" style={{
          display: 'flex',
          gap: '1rem',
          marginBottom: '2rem',
          justifyContent: 'center'
        }}>
          <button
            onClick={() => setPaymentOption('full')}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: '2px solid #3b82f6',
              backgroundColor: paymentOption === 'full' ? '#3b82f6' : 'transparent',
              color: paymentOption === 'full' ? 'white' : '#3b82f6',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontSize: '1rem'
            }}
          >
            {lang.pricePaymentOptionsFull}
          </button>
          <button
            onClick={() => setPaymentOption('lease')}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              border: '2px solid #3b82f6',
              backgroundColor: paymentOption === 'lease' ? '#3b82f6' : 'transparent',
              color: paymentOption === 'lease' ? 'white' : '#3b82f6',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontSize: '1rem'
            }}
          >
            {lang.pricePaymentOptionsSubscription}
          </button>
        </div>

        {paymentOption === 'full' ? (
          <>
            <div className="breakdown-item">
              <span>{getPlatformLabel()} ({sizeMultipliers[selections.size]}x)</span>
              <span>{basePlatformPrice.toLocaleString()} {lang.priceCurrency}</span>
            </div>
            
            {selections.features.map(feature => (
              <div className="breakdown-item" key={feature}>
                <span>{featureLabels[feature]}</span>
                <span>{featureCosts[feature].toLocaleString()} {lang.priceCurrency}</span>
              </div>
            ))}
            
            <div className="breakdown-item">
              <span>{designLabels[selections.design]}</span>
              <span>{designCosts[selections.design].toLocaleString()} {lang.priceCurrency}</span>
            </div>
            
            {(selections.timeline === 'fast' || selections.timeline === 'urgent') && (
              <div className="breakdown-item">
                <span>{timelineFactors[selections.timeline]}</span>
                <span>{selections.timeline === 'fast' ? '+20%' : '+50%'}</span>
              </div>
            )}
            
            <div className="breakdown-item total">
              <span>{lang.priceTotal}</span>
              <span>{price.toLocaleString()} {lang.priceCurrency}</span>
            </div>

            <div className="breakdown-item monthly-fee">
              <span>{lang.priceMonthlyFeeWithCommission}</span>
              <span>{monthlyFee.toLocaleString()} {lang.pricePerMonth}</span>
            </div>

            <div className="breakdown-item monthly-details">
              <span>{lang.priceMonthlyFeeBreakdown}</span>
              <div className="monthly-details-content">
                <div className="monthly-detail-item">
                  <span>{lang.pricePlatformMaintenance}</span>
                  <span>{monthlyFeeDetails.platformMaintenance.toLocaleString()} {lang.pricePerMonth}</span>
                </div>
                {Object.entries(monthlyFeeDetails.features).map(([feature, data]) => (
                  <div className="monthly-detail-item" key={feature}>
                    <span>{data.label}:</span>
                    <span>{data.cost.toLocaleString()} {lang.pricePerMonth}</span>
                  </div>
                ))}
                
                {/* Add note about free features if any are selected */}
                {selections.features.some(f => freeMonthlyFeatures.includes(f)) && (
                  <div className="monthly-detail-item free-features">
                    <span><strong>{lang.priceFreeFeatures}</strong></span>
                    <span>
                      {selections.features
                        .filter(f => freeMonthlyFeatures.includes(f))
                        .map(f => featureLabels[f])
                        .join(', ')}
                    </span>
                  </div>
                )}
                
                <div className="monthly-detail-item commission">
                  <span>{lang.priceCommission}</span>
                  <span>{monthlyFeeDetails.commission.toLocaleString()} {lang.pricePerMonth}</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="breakdown-item">
              <span>{lang.priceSubscriptionTerm}</span>
              <span>{lang.priceSubscriptionCommitment}</span>
            </div>

            <div className="breakdown-item">
              <span>{getPlatformLabel()} ({sizeMultipliers[selections.size]}x)</span>
              <span>{getMonthlyAmount(basePlatformPrice).toLocaleString()} {lang.pricePerMonth}</span>
            </div>
            
            {selections.features.map(feature => (
              <div className="breakdown-item" key={feature}>
                <span>{featureLabels[feature]}</span>
                <span>{getMonthlyAmount(featureCosts[feature]).toLocaleString()} {lang.pricePerMonth}</span>
              </div>
            ))}
            
            <div className="breakdown-item">
              <span>{designLabels[selections.design]}</span>
              <span>{getMonthlyAmount(designCosts[selections.design]).toLocaleString()} {lang.pricePerMonth}</span>
            </div>

            {(selections.timeline === 'fast' || selections.timeline === 'urgent') && (
              <div className="breakdown-item">
                <span>{timelineFactors[selections.timeline]}</span>
                <span>{selections.timeline === 'fast' ? '+20%' : '+50%'}</span>
              </div>
            )}

            <div className="breakdown-item">
              <span>{lang.priceMonthlySubscription}</span>
              <span>{leaseDetails.monthlyPayment.toLocaleString()} {lang.pricePerMonth}</span>
            </div>

            <div className="breakdown-item">
              <span>{lang.priceMonthlyPlatformFee}</span>
              <span>{monthlyFee.toLocaleString()} {lang.pricePerMonth}</span>
            </div>

            <div className="breakdown-item total">
              <span><strong>{lang.priceTotalMonthlyCost}</strong></span>
              <span><strong>{(leaseDetails.monthlyPayment + monthlyFee).toLocaleString()} {lang.pricePerMonth}</strong></span>
            </div>

            <div className="breakdown-item monthly-details">
              <span>{lang.priceMonthlyFeeBreakdown}</span>
              <div className="monthly-details-content">
                <div className="monthly-detail-item">
                  <span>{lang.pricePlatformMaintenance}</span>
                  <span>{monthlyFeeDetails.platformMaintenance.toLocaleString()} {lang.pricePerMonth}</span>
                </div>
                {Object.entries(monthlyFeeDetails.features).map(([feature, data]) => (
                  <div className="monthly-detail-item" key={feature}>
                    <span>{data.label}:</span>
                    <span>{data.cost.toLocaleString()} {lang.pricePerMonth}</span>
                  </div>
                ))}
                
                {/* Add note about free features if any are selected */}
                {selections.features.some(f => freeMonthlyFeatures.includes(f)) && (
                  <div className="monthly-detail-item free-features">
                    <span><strong>{lang.priceFreeFeatures}</strong></span>
                    <span>
                      {selections.features
                        .filter(f => freeMonthlyFeatures.includes(f))
                        .map(f => featureLabels[f])
                        .join(', ')}
                    </span>
                  </div>
                )}
                
                <div className="monthly-detail-item commission">
                  <span>{lang.priceCommission}</span>
                  <span>{monthlyFeeDetails.commission.toLocaleString()} {lang.pricePerMonth}</span>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  };

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
            <span className="price-amount">
              {paymentOption === 'full' 
                ? price.toLocaleString() 
                : (Math.round(price / leaseDuration) + monthlyFee).toLocaleString()}
            </span>
            <span className="price-currency">{lang.priceCurrency}</span>
            {paymentOption === 'lease' && <span className="price-currency price-period">{lang.pricePeriodMonth}</span>}
            
            {paymentOption === 'full' && 
              <div className="monthly-fee-display">
                <span className="monthly-fee-label">{lang.priceMonthlyFeeWithCommission}: </span>
                <span className="monthly-fee-amount">{monthlyFee.toLocaleString()} {lang.pricePerMonth}</span>
              </div>
            }
          </div>
          
          <p className="price-note">
            {paymentOption === 'full' 
              ? lang.priceEstimateNote 
              : `${lang.priceSubscriptionCommitment} (${lang.priceTotalMonthlyCost})`}
          </p>
          
          <div className="breakdown-container">
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
