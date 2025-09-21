import React from 'react';
import { Globe, Users, MessageCircle, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Matches', value: '12', color: 'bg-blue-500' },
    { icon: MessageCircle, label: 'Conversations', value: '8', color: 'bg-green-500' },
    { icon: Globe, label: 'Countries Connected', value: '15', color: 'bg-purple-500' },
    { icon: TrendingUp, label: 'Profile Views', value: '124', color: 'bg-orange-500' }
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-xl"
      >
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Welcome back!</h1>
        <p className="text-indigo-100">Ready to make new connections around the world?</p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-4 rounded-xl shadow-lg"
          >
            <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3`}>
              <stat.icon size={24} className="text-white" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-gray-600 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors text-left">
            <h3 className="font-medium text-indigo-900">Find New Matches</h3>
            <p className="text-sm text-indigo-600">Discover people with similar interests</p>
          </button>
          <button className="p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors text-left">
            <h3 className="font-medium text-green-900">Cultural Exchange</h3>
            <p className="text-sm text-green-600">Learn about different cultures</p>
          </button>
          <button className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-left">
            <h3 className="font-medium text-purple-900">Join Groups</h3>
            <p className="text-sm text-purple-600">Connect with like-minded communities</p>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
