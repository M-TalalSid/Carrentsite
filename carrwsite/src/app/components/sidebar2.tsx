import React from 'react'

const Sidebar2 = () => {
  return (
    <div><aside className="w-1/4 bg-gray-100 h-screen p-4">
    <ul>
      <li className="mb-2 text-blue-600"><span role="img" aria-label="home icon">🏠</span>Dashboard</li>
      <li className="mb-2 text-blue-600"><span role="img" aria-label="Car icon">🚗</span>Car Rent</li>
      <li className="mb-2 text-blue-600"><span role="img" aria-label="Insight icon">📊</span>Insight</li>
      <li className="mb-2 text-blue-600"><span role="img" aria-label="Reimburse icon">💳</span>Reimburse</li>
      <li className="mb-2 text-blue-600"><span role="img" aria-label="Inbox icon">✉️</span>Inbox</li>
      <li className="mb-2 text-blue-600"><span role="img" aria-label="Calendar icon">📅</span>Calendar</li>
      <li className="mb-2 text-blue-600"><span role="img" aria-label="Settings icon">⚙️</span>Settings</li>
      <li className="mb-2 text-blue-600"><span role="img" aria-label="Help icon">❓</span>Help & Center</li>
      <li className="mb-2 text-blue-600"><span role="img" aria-label="Dark mode icon">🌙</span>Dark Mode</li>
      {/* Add remaining menu items */}
    </ul>
  </aside>
  </div>
  )
}

export default Sidebar2;