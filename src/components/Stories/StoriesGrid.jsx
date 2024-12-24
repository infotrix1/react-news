import React from 'react';
import StoryCard from './StoryCard';

const stories = [
  {
    title: "The Future of AI in Journalism",
    excerpt: "Exploring how artificial intelligence is reshaping the landscape of modern journalism...",
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
    },
    category: "Technology",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
    likes: 128,
    comments: 32
  },
  {
    title: "Sustainable Living in Urban Cities",
    excerpt: "A comprehensive guide to maintaining an eco-friendly lifestyle in metropolitan areas...",
    author: {
      name: "Michael Torres",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80"
    },
    category: "Lifestyle",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
    likes: 245,
    comments: 56
  },
  {
    title: "The Rise of Remote Work Culture",
    excerpt: "How companies are adapting to the new normal of distributed teams and virtual offices...",
    author: {
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80"
    },
    category: "Business",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1521898284481-a5ec348cb555?auto=format&fit=crop&w=800&q=80",
    likes: 189,
    comments: 42
  }
];

export default function StoriesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stories.map((story, index) => (
        <StoryCard key={index} {...story} />
      ))}
    </div>
  );
}