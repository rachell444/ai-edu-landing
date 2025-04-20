'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  BeakerIcon as BrainIcon,
  AcademicCapIcon,
  UserGroupIcon,
  ChartBarIcon,
  LightBulbIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

interface Feature {
  title: string;
  description: string;
  icon: typeof BrainIcon;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const features: Feature[] = [
  {
    title: 'Personalized Learning',
    description: 'AI adapts to each student\'s learning style and pace',
    icon: BrainIcon
  },
  {
    title: 'Virtual Tutoring',
    description: '24/7 AI-powered assistance for continuous learning',
    icon: AcademicCapIcon
  },
  {
    title: 'Collaborative Learning',
    description: 'Connect with peers through AI-facilitated groups',
    icon: UserGroupIcon
  }
];

const testimonials: Testimonial[] = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Education Technology Director',
    content: 'AI has transformed how we approach personalized learning. The results have been remarkable.',
    image: 'https://i.pravatar.cc/150?img=1'
  },
  {
    name: 'Prof. James Wilson',
    role: 'University Department Head',
    content: 'This platform has revolutionized our teaching methods and student engagement.',
    image: 'https://i.pravatar.cc/150?img=2'
  },
  {
    name: 'Lisa Rodriguez',
    role: 'K-12 Teacher',
    content: 'The AI-powered tools have helped me better understand and support my students\'s needs.',
    image: 'https://i.pravatar.cc/150?img=3'
  }
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      {/* Hero Section */}
      <section id="about" className="relative h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-70" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            The Future of
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              {' '}AI in Education
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Transforming learning experiences through intelligent technology
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Revolutionizing Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index: number) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: LightBulbIcon,
                title: 'Smart Learning Path',
                description: 'AI analyzes your progress and creates personalized learning journeys'
              },
              {
                icon: ChartBarIcon,
                title: 'Real-time Analytics',
                description: 'Track progress and identify areas for improvement instantly'
              },
              {
                icon: RocketLaunchIcon,
                title: 'Accelerated Growth',
                description: 'Achieve your learning goals faster with AI-powered recommendations'
              }
            ].map((item, index: number) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6"
              >
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
                  <item.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            What Educators Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index: number) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Education?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of educators already using our AI-powered platform
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Free Trial
          </motion.button>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
