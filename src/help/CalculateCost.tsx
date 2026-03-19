import { useState } from 'react';
import HelpLayout from './HelpLayout';

function calcWarmupMonthly(totalEmailsPerMonth: number): number {
  if (totalEmailsPerMonth <= 0) return 0;
  if (totalEmailsPerMonth <= 5000) return 30;
  const totalLakhs = totalEmailsPerMonth / 100000;
  const lightSpeedPlans = Math.floor(totalLakhs / 5);
  const remainingLakhs = totalLakhs - lightSpeedPlans * 5;
  const hypergrowthPlans = Math.ceil(remainingLakhs);
  return lightSpeedPlans * 345 + hypergrowthPlans * 85;
}

const CalculateCost = () => {
  const [emailCount, setEmailCount] = useState('');
  const [workingDays, setWorkingDays] = useState('22');

  const totalEmailsPerMonth = parseInt(emailCount) || 0;
  const days = parseInt(workingDays) || 22;

  const emailAccountsNeeded = Math.ceil(totalEmailsPerMonth / (30 * days));
  const domainsNeeded = Math.ceil(emailAccountsNeeded / 5);

  const emailPrice = 5;
  const domainPrice = 15;

  const warmupCost = calcWarmupMonthly(totalEmailsPerMonth);
  const emailCost = emailAccountsNeeded * emailPrice;
  const domainCost = domainsNeeded * domainPrice;

  const upfrontCost = emailCost + domainCost + warmupCost;
  const monthlyCost = emailCost + warmupCost;

  return (
    <HelpLayout>
      {() => (
        <div className="bg-white p-6 md:p-10 md:pt-0 pt-0 rounded-xl shadow-md w-full max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-4">Calculate your cost</h2>

          <p className="text-center text-gray-600 mb-6">
            Give us the number of emails you want to send in a month
          </p>

          <div className="flex gap-4 mb-8">
            <div className="flex-1">
              <label className="block text-sm text-gray-500 mb-1">Number of emails per month</label>
              <input
                type="number"
                placeholder="e.g. 100000"
                value={emailCount}
                onChange={(e) => setEmailCount(e.target.value)}
                className="w-full p-3 text-lg border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="w-40">
              <label className="block text-sm text-gray-500 mb-1">Working days / month</label>
              <input
                type="number"
                placeholder="e.g. 22"
                value={workingDays}
                onChange={(e) => setWorkingDays(e.target.value)}
                className="w-full p-3 text-lg border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 text-base">
            <div>
              <p className="mb-2">Total emails per month = <span className="font-medium">{totalEmailsPerMonth.toLocaleString()}</span></p>
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
