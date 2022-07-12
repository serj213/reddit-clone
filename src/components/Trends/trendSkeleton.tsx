import React from 'react';
import ContentLoader from 'react-content-loader';

const TrendSkeleton: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#fff', borderRadius: 8, paddingLeft: 10, paddingRight: 10 }}>
      <ContentLoader
        speed={2}
        width={247}
        height={178}
        viewBox="0 0 247 178"
        backgroundColor="#c2c2c2"
        foregroundColor="#ebeaea">
        <circle cx="30" cy="147" r="20" />
        <rect x="63" y="142" rx="10" ry="10" width="175" height="11" />
        <rect x="10" y="89" rx="9" ry="9" width="228" height="21" />
      </ContentLoader>
    </div>
  );
};

export default TrendSkeleton;
