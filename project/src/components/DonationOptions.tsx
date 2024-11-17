import React from 'react';

const donationOptions = [
  { amount: '25', description: 'Provides learning materials for one student' },
  { amount: '100', description: 'Sponsors a month of technical training' },
  { amount: '500', description: 'Funds a full scholarship' },
];

export default function DonationOptions() {
  return (
    <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
      {donationOptions.map((option, index) => (
        <button
          key={index}
          className="bg-white text-blue-600 p-6 rounded-lg hover:bg-blue-50 transition"
          onClick={() => console.log(`Selected donation amount: $${option.amount}`)}
        >
          <div className="text-2xl font-bold mb-2">${option.amount}</div>
          <div className="text-sm">{option.description}</div>
        </button>
      ))}
    </div>
  );
}