import React, { useState } from 'react';
import HelpLayout from './HelpLayout';

const CalculateCost = () => {
  const [emailCount, setEmailCount] = useState('');

  const totalEmailsPerDay = parseInt(emailCount) || 0;
  const totalEmailsPerMonth = totalEmailsPerDay * 22;

  const emailAccountsNeeded = Math.ceil(totalEmailsPerDay / 30);
  const domainsNeeded = Math.ceil(emailAccountsNeeded / 5);

  const emailPrice = 5;
  const domainPrice = 15;
  const warmupCost = 85;

  const emailCost = emailAccountsNeeded * emailPrice;
  const domainCost = domainsNeeded * domainPrice;

  const upfrontCost = emailCost + domainCost + warmupCost;
  const monthlyCost = emailCost + warmupCost;


  return (
    <HelpLayout>
      {(_, setIsChatOpen) => (
        <div className="bg-white p-6 md:p-10 md:pt-0 pt-0 rounded-xl shadow-md w-full max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">Calculate your cost</h2>
          <p className="text-center text-gray-600 mb-6">
            Give us the number of emails you want to send in a day
          </p>

          <input
            type="number"
            placeholder="Enter number of emails"
            value={emailCount}
            onChange={(e) => setEmailCount(e.target.value)}
            className="w-full mb-8 p-3 text-lg border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-base">
            <div>
              <p className="mb-2">Total emails per month = <span className="font-medium">{totalEmailsPerMonth}</span></p>
              <p className="mb-2">Email accounts needed = <span className="font-medium">{emailAccountsNeeded}</span></p>
              <p className="mb-2">Domains needed = <span className="font-medium">{domainsNeeded}</span></p>
              <p className="mb-2">Email accounts cost = <span className="font-medium">${emailCost.toFixed(2)}</span></p>
            </div>
            <div>
              <p className="mb-2">Domains cost = <span className="font-medium">${domainCost.toFixed(2)}</span></p>
              <p className="mb-2">Sending & warmup cost = <span className="font-medium">${warmupCost.toFixed(2)}</span></p>
              <p className="mb-2">Total upfront costs = <span className="font-medium">${upfrontCost.toFixed(2)}</span></p>
              <p>Total monthly costs = <span className="font-medium">${monthlyCost.toFixed(2)}</span></p>
            </div>
          </div>
        </div>
      )}
    </HelpLayout>
  );
};

export default CalculateCost;
