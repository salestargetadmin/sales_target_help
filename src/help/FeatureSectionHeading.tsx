import React from 'react';

/**
 * An independent heading styled for feature sections,
 * used as a block title and NOT as a list item.
 *
 * Example usage inside features section:
 * <FeatureSectionHeading label="Core Capabilities" />
 */
const FeatureSectionHeading: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className="mt-8 mb-3">
      <h2 className="text-xl font-semibold text-black">{label}</h2>
      <div className="h-[2px] bg-gray-200 w-full mt-2" />
    </div>
  );
};

export default FeatureSectionHeading;
