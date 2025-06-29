import React, { useState } from 'react';
import { ChevronRight, RotateCcw, Sparkles } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: { text: string; value: string }[];
}

interface TeaRecommendation {
  name: string;
  description: string;
  image: string;
  notes: string[];
  benefits: string[];
}

const TeaFinder: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const questions: Question[] = [
    {
      id: 0,
      question: "What time of day do you usually enjoy tea?",
      options: [
        { text: "Early morning (sunrise ritual)", value: "morning" },
        { text: "Mid-afternoon (energy boost)", value: "afternoon" },
        { text: "Evening (wind down)", value: "evening" },
        { text: "Late night (contemplation)", value: "night" }
      ]
    },
    {
      id: 1,
      question: "What mood are you seeking?",
      options: [
        { text: "Energized & Focused", value: "energized" },
        { text: "Calm & Relaxed", value: "calm" },
        { text: "Balanced & Centered", value: "balanced" },
        { text: "Uplifted & Inspired", value: "uplifted" }
      ]
    },
    {
      id: 2,
      question: "Which flavor profile appeals to you most?",
      options: [
        { text: "Floral & Delicate", value: "floral" },
        { text: "Rich & Earthy", value: "earthy" },
        { text: "Fresh & Citrusy", value: "citrus" },
        { text: "Spiced & Warming", value: "spiced" }
      ]
    },
    {
      id: 3,
      question: "How do you prefer your tea experience?",
      options: [
        { text: "Pure & Traditional", value: "traditional" },
        { text: "Blended & Complex", value: "blended" },
        { text: "Unique & Experimental", value: "experimental" },
        { text: "Therapeutic & Healing", value: "therapeutic" }
      ]
    }
  ];

  const getRecommendation = (): TeaRecommendation => {
    const profile = Object.values(answers).join('-');
    
    // Simplified recommendation logic
    if (profile.includes('morning') && profile.includes('energized')) {
      return {
        name: "Dragon Well Supreme",
        description: "A premium green tea with a delicate, sweet flavor and natural energy boost.",
        image: "https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400",
        notes: ["Fresh grass", "Sweet finish", "Light body"],
        benefits: ["Natural caffeine", "Antioxidants", "Mental clarity"]
      };
    } else if (profile.includes('evening') && profile.includes('calm')) {
      return {
        name: "Moonlight Chamomile",
        description: "Our signature evening blend with chamomile, lavender, and lemon balm.",
        image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400",
        notes: ["Honey sweetness", "Floral aroma", "Smooth finish"],
        benefits: ["Promotes relaxation", "Aids sleep", "Stress relief"]
      };
    } else if (profile.includes('spiced')) {
      return {
        name: "Golden Chai Masala",
        description: "A warming blend of black tea with cardamom, cinnamon, and ginger.",
        image: "https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg?auto=compress&cs=tinysrgb&w=400",
        notes: ["Warm spices", "Malty base", "Aromatic finish"],
        benefits: ["Digestive support", "Warming", "Energy boost"]
      };
    } else {
      return {
        name: "Earl Grey Royale",
        description: "Our elevated take on the classic with bergamot, cornflower, and lavender.",
        image: "https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg?auto=compress&cs=tinysrgb&w=400",
        notes: ["Citrus bergamot", "Floral hints", "Robust base"],
        benefits: ["Mood enhancement", "Focus", "Classic comfort"]
      };
    }
  };

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const recommendation = showResult ? getRecommendation() : null;

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-cream-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-burgundy-100 rounded-full mb-6">
            <Sparkles className="h-8 w-8 text-burgundy-700" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-emerald-800 mb-4">
            Find Your Perfect Tea
          </h2>
          <p className="text-xl text-emerald-700">
            Let us guide you to your ideal blend through our personalized tea finder
          </p>
        </div>

        {!showResult ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between text-sm text-emerald-600 mb-2">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full bg-emerald-100 rounded-full h-2">
                <div 
                  className="bg-burgundy-700 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Question */}
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-serif font-semibold text-emerald-800 mb-8">
                {questions[currentQuestion].question}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.value)}
                    className="p-6 text-left border-2 border-emerald-100 rounded-lg hover:border-burgundy-300 hover:bg-burgundy-50 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-emerald-800 font-medium group-hover:text-burgundy-800">
                        {option.text}
                      </span>
                      <ChevronRight className="h-5 w-5 text-emerald-400 group-hover:text-burgundy-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          // Result
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-emerald-800 to-burgundy-800 p-8 text-center">
              <h3 className="text-3xl font-serif font-bold text-cream-50 mb-2">
                Your Perfect Match
              </h3>
              <p className="text-cream-200">
                Based on your preferences, we recommend:
              </p>
            </div>

            <div className="p-8 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src={recommendation!.image} 
                    alt={recommendation!.name}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>

                <div>
                  <h4 className="text-3xl font-serif font-bold text-emerald-800 mb-4">
                    {recommendation!.name}
                  </h4>
                  <p className="text-emerald-700 mb-6 leading-relaxed">
                    {recommendation!.description}
                  </p>

                  <div className="mb-6">
                    <h5 className="font-semibold text-emerald-800 mb-3">Tasting Notes:</h5>
                    <div className="flex flex-wrap gap-2">
                      {recommendation!.notes.map((note, index) => (
                        <span key={index} className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h5 className="font-semibold text-emerald-800 mb-3">Benefits:</h5>
                    <div className="flex flex-wrap gap-2">
                      {recommendation!.benefits.map((benefit, index) => (
                        <span key={index} className="px-3 py-1 bg-burgundy-100 text-burgundy-800 rounded-full text-sm">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-emerald-800 text-cream-50 py-3 px-6 rounded-lg hover:bg-emerald-700 transition-colors duration-300">
                      Order This Tea
                    </button>
                    <button 
                      onClick={resetQuiz}
                      className="flex-1 border-2 border-emerald-800 text-emerald-800 py-3 px-6 rounded-lg hover:bg-emerald-800 hover:text-cream-50 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <RotateCcw className="h-4 w-4" />
                      <span>Retake Quiz</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeaFinder;