import React, { useState } from 'react';
import { Send, Smile, Globe, BookOpen, Mic, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { iceBreakers, commonPhrases } from '../utils/mockData';
import { generateMockUser } from '../utils/mockData';

const ChatView: React.FC = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  const [showIceBreakers, setShowIceBreakers] = useState(false);
  const [showPhrases, setShowPhrases] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Spanish');

  const conversations = Array.from({ length: 6 }, () => ({
    id: Math.random().toString(),
    user: generateMockUser(),
    lastMessage: 'Hey! How are you doing today?',
    timestamp: new Date(),
    unread: Math.random() > 0.5
  }));

  const messages = [
    { id: '1', senderId: 'other', content: 'Hello! Nice to meet you!', timestamp: new Date() },
    { id: '2', senderId: 'me', content: 'Hi there! Great to connect with you too!', timestamp: new Date() },
    { id: '3', senderId: 'other', content: 'I see you\'re interested in photography. What\'s your favorite type of photography?', timestamp: new Date() },
    { id: '4', senderId: 'me', content: 'I love landscape photography! There\'s something magical about capturing nature\'s beauty.', timestamp: new Date() }
  ];

  return (
    <div className="flex h-[600px] bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Chat List */}
      <div className="w-full md:w-1/3 border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Messages</h2>
        </div>
        
        <div className="overflow-y-auto h-full">
          {conversations.map((conv) => (
            <motion.div
              key={conv.id}
              whileHover={{ backgroundColor: '#f9fafb' }}
              onClick={() => setSelectedChat(conv.id)}
              className={`p-4 cursor-pointer border-b border-gray-100 ${
                selectedChat === conv.id ? 'bg-indigo-50' : ''
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src={conv.user.avatar}
                    alt={conv.user.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  {conv.user.isOnline && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {conv.user.name}
                    </p>
                    {conv.unread && (
                      <div className="w-2 h-2 bg-indigo-600 rounded-full" />
                    )}
                  </div>
                  <p className="text-sm text-gray-500 truncate">{conv.lastMessage}</p>
                  <p className="text-xs text-gray-400">{conv.user.country}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {selectedChat ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={conversations[0].user.avatar}
                    alt={conversations[0].user.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{conversations[0].user.name}</h3>
                    <p className="text-sm text-gray-500">{conversations[0].user.country}</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setShowIceBreakers(!showIceBreakers)}
                    className="p-2 text-gray-600 hover:text-indigo-600 rounded-lg hover:bg-gray-100"
                    title="Ice Breakers"
                  >
                    <Smile size={20} />
                  </button>
                  <button
                    onClick={() => setShowPhrases(!showPhrases)}
                    className="p-2 text-gray-600 hover:text-indigo-600 rounded-lg hover:bg-gray-100"
                    title="Learn Phrases"
                  >
                    <BookOpen size={20} />
                  </button>
                  <button
                    className="p-2 text-gray-600 hover:text-indigo-600 rounded-lg hover:bg-gray-100"
                    title="Translate"
                  >
                    <Globe size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Ice Breakers Panel */}
            {showIceBreakers && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-4 bg-blue-50 border-b border-gray-200"
              >
                <h4 className="font-medium text-gray-900 mb-2">Ice Breakers</h4>
                <div className="grid grid-cols-1 gap-2">
                  {iceBreakers.slice(0, 3).map((iceBreaker) => (
                    <button
                      key={iceBreaker.id}
                      onClick={() => {
                        setMessage(iceBreaker.question);
                        setShowIceBreakers(false);
                      }}
                      className="text-left p-2 bg-white rounded-lg hover:bg-blue-100 text-sm"
                    >
                      {iceBreaker.question}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Phrases Panel */}
            {showPhrases && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="p-4 bg-green-50 border-b border-gray-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-gray-900">Learn Common Phrases</h4>
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="text-sm border border-gray-300 rounded px-2 py-1"
                  >
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="Japanese">Japanese</option>
                  </select>
                </div>
                <div className="space-y-2">
                  {commonPhrases[selectedLanguage as keyof typeof commonPhrases]?.map((phrase, index) => (
                    <div key={index} className="p-2 bg-white rounded-lg">
                      <p className="font-medium">{phrase.phrase}</p>
                      <p className="text-sm text-gray-600">{phrase.translation}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.senderId === 'me' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.senderId === 'me' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.senderId === 'me'
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-200 text-gray-900'
                    }`}
                  >
                    {msg.content}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      console.log('Send message:', message);
                      setMessage('');
                    }
                  }}
                />
                <button className="p-2 text-gray-600 hover:text-indigo-600 rounded-lg hover:bg-gray-100">
                  <Mic size={20} />
                </button>
                <button
                  onClick={() => {
                    console.log('Send message:', message);
                    setMessage('');
                  }}
                  className="bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
              <MessageCircle size={48} className="text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">Select a conversation to start chatting</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatView;
