import { type FC, useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
  }
const faqData: FAQItem[] = [
  {
    question: "What services does your software consultancy offer?",
    answer: "We provide comprehensive software consulting services including custom software development, system architecture design, cloud solutions, chatbot development and integration for websites, and technical consulting for businesses of all sizes."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. Small projects may take 2-4 weeks, while larger enterprise solutions can take 3-6 months or more. We provide detailed timeline estimates during our initial consultation phase."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "Our team specializes in modern web technologies (React, Next.js, Node.js), cloud platforms (AWS, Azure, Google Cloud), AI/ML frameworks, mobile development, and enterprise solutions. We stay current with the latest industry trends and technologies."
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Yes! We provide comprehensive post-launch support including bug fixes, updates, performance monitoring, and ongoing maintenance packages tailored to your needs. We're committed to long-term partnerships with our clients."
  },
  {
    question: "How do you ensure project quality and security?",
    answer: "We follow industry best practices including code reviews, automated testing, security audits, and compliance standards. Our development process includes quality assurance at every stage to ensure robust, secure solutions."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Pricing depends on project scope, complexity, and timeline. Contact us for a customized quote based on your specific needs."
  }
];

export const FAQ: FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section style={{
      padding: '80px 20px',
      background: 'linear-gradient(135deg, #0A5EB0 0%, #0F2854 100%)',
      minHeight: '100vh'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '16px'
          }}>
            Frequently Asked Questions
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            Got questions? We've got answers!
          </p>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          {faqData.map((faq, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  padding: '24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
              >
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#1f2937',
                  margin: 0,
                  paddingRight: '16px'
                }}>
                  {faq.question}
                </h3>
                <span style={{
                  fontSize: '1.5rem',
                  color: '#667eea',
                  fontWeight: 'bold',
                  transition: 'transform 0.3s',
                  transform: activeIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  flexShrink: 0
                }}>
                  +
                </span>
              </button>
              
              <div style={{
                maxHeight: activeIndex === index ? '500px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease-in-out'
              }}>
                <div style={{
                  padding: '0 24px 24px 24px',
                  color: '#6b7280',
                  fontSize: '1rem',
                  lineHeight: '1.6'
                }}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '60px'
        }}>
          <p style={{
            fontSize: '1.125rem',
            color: 'white',
            marginBottom: '20px'
          }}>
            Still have questions?
          </p>
          <button style={{
            padding: '12px 32px',
            fontSize: '1rem',
            fontWeight: '600',
            color: '#667eea',
            background: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 6px 10px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
          }}>
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};