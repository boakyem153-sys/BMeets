import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import UserCard from './UserCard';
import { generateMockMatches } from '../utils/mockData';
import { Match } from '../types';

const MatchesView: React.FC = () => {
  const [matches] = useState<Match[]>(generateMockMatches(12));
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMatches = matches.filter(match => {
    const matchesSearch = match.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         match.user.country.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filter === 'online') return match.user.isOnline && matchesSearch;
    if (filter === 'verified') return match.user.isVerified && matchesSearch;
    if (filter === 'same-timezone') return match.timezoneDiff <= 3 && matchesSearch;
    
    return matchesSearch;
  });

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-xl shadow-lg"
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Matches</h1>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search matches..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-400" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            >
              <option value="all">All Matches</option>
              <option value="online">Online Now</option>
              <option value="verified">Verified Only</option>
              <option value="same-timezone">Similar Timezone</option>
            </select>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMatches.map((match, index) => (
          <motion.div
            key={match.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <UserCard
              user={match.user}
              compatibility={match.compatibility}
              sharedInterests={match.sharedInterests}
              onMessage={() => console.log('Message', match.user.name)}
              onLike={() => console.log('Like', match.user.name)}
            />
          </motion.div>
        ))}
      </div>

      {filteredMatches.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-gray-500 text-lg">No matches found for your criteria.</p>
          <p className="text-gray-400">Try adjusting your filters or search terms.</p>
        </motion.div>
      )}
    </div>
  );
};

export default MatchesView;
