import React from 'react';
import LeftSidebar from '@components/LeftSidebar';
import WelcomeBanner from '@components/WelcomeBanner';
import UpcomingTestCards from '@components/UpcomingTestCards';
import AttemptedTestSection from '@components/AttemptedTestSection';

const DashboardPage = () => {
  return (
    <div className="flex">
      <LeftSidebar />
      <div className="flex-grow p-8 bg-blue-50">
        <WelcomeBanner />
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div>
            <UpcomingTestCards />
          </div>
          <div>
            <AttemptedTestSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
