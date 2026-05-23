import { useState } from 'react'
import { Heart, MessageCircle, Share2, Search } from 'lucide-react'
import './Community.css'

const posts = [
  {
    id: 1,
    author: 'Sarah M.',
    avatar: '👩',
    time: '2h ago',
    tag: 'Tips',
    tagColor: '#6366f1',
    tagBg: '#eef2ff',
    content: 'Week 28 and feeling amazing! Prenatal yoga has been a game changer for back pain. Highly recommend to all mamas!',
    likes: 42,
    comments: 8,
    liked: false,
  },
  {
    id: 2,
    author: 'Dr. Amina K.',
    avatar: '👩‍⚕️',
    time: '4h ago',
    tag: 'Medical',
    tagColor: '#10b981',
    tagBg: '#ecfdf5',
    content: 'Reminder: Iron-rich foods are essential during pregnancy. Include spinach, lentils, and lean meats in your daily diet.',
    likes: 89,
    comments: 15,
    liked: true,
  },
  {
    id: 3,
    author: 'Lena T.',
    avatar: '🤰',
    time: '6h ago',
    tag: 'Question',
    tagColor: '#f59e0b',
    tagBg: '#fffbeb',
    content: 'Has anyone tried the kick counter feature? I\'ve been logging daily and it\'s so reassuring to see the patterns!',
    likes: 27,
    comments: 12,
    liked: false,
  },
  {
    id: 4,
    author: 'Mia R.',
    avatar: '👶',
    time: '1d ago',
    tag: 'Story',
    tagColor: '#ec4899',
    tagBg: '#fdf2f8',
    content: 'Just had my 20-week scan and everything looks perfect! Baby girl is healthy and active. So grateful for this community!',
    likes: 134,
    comments: 31,
    liked: false,
  },
]

const groups = [
  { id: 1, name: 'First Trimester Moms', members: 1240, emoji: '🌱' },
  { id: 2, name: 'Second Trimester', members: 980, emoji: '🌸' },
  { id: 3, name: 'Third Trimester', members: 760, emoji: '🌺' },
  { id: 4, name: 'New Moms Support', members: 2100, emoji: '👶' },
]

export default function Community() {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set([2]))
  const [activeTab, setActiveTab] = useState<'feed' | 'groups'>('feed')

  const toggleLike = (id: number) => {
    setLikedPosts((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  }

  return (
    <div className="community">
      <div className="community__header">
        <h1 className="community__title">Community</h1>
        <button className="community__search-btn" aria-label="Search">
          <Search size={20} strokeWidth={1.8} />
        </button>
      </div>

      <div className="community__tabs">
        <button
          className={`community__tab ${activeTab === 'feed' ? 'community__tab--active' : ''}`}
          onClick={() => setActiveTab('feed')}
        >
          Feed
        </button>
        <button
          className={`community__tab ${activeTab === 'groups' ? 'community__tab--active' : ''}`}
          onClick={() => setActiveTab('groups')}
        >
          Groups
        </button>
      </div>

      {activeTab === 'feed' && (
        <div className="community__feed">
          {posts.map((post) => (
            <div key={post.id} className="community__post">
              <div className="community__post-header">
                <div className="community__post-author">
                  <span className="community__post-avatar">{post.avatar}</span>
                  <div>
                    <p className="community__post-name">{post.author}</p>
                    <p className="community__post-time">{post.time}</p>
                  </div>
                </div>
                <span
                  className="community__post-tag"
                  style={{ color: post.tagColor, background: post.tagBg }}
                >
                  {post.tag}
                </span>
              </div>
              <p className="community__post-content">{post.content}</p>
              <div className="community__post-actions">
                <button
                  className={`community__action-btn ${likedPosts.has(post.id) ? 'community__action-btn--liked' : ''}`}
                  onClick={() => toggleLike(post.id)}
                >
                  <Heart size={16} strokeWidth={2} fill={likedPosts.has(post.id) ? 'currentColor' : 'none'} />
                  <span>{post.likes + (likedPosts.has(post.id) && !post.liked ? 1 : 0)}</span>
                </button>
                <button className="community__action-btn">
                  <MessageCircle size={16} strokeWidth={2} />
                  <span>{post.comments}</span>
                </button>
                <button className="community__action-btn">
                  <Share2 size={16} strokeWidth={2} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'groups' && (
        <div className="community__groups">
          {groups.map((group) => (
            <div key={group.id} className="community__group">
              <span className="community__group-emoji">{group.emoji}</span>
              <div className="community__group-info">
                <p className="community__group-name">{group.name}</p>
                <p className="community__group-members">{group.members.toLocaleString()} members</p>
              </div>
              <button className="community__group-join">Join</button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
