// Trending.jsx
import React, { useState, useEffect } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from"../../../components/switchTabs/SwitchTabs";
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");
  const { data, loading } = useFetch(`/trending/all/${endpoint}`);
  const [mediaType, setMediaType] = useState(null);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  useEffect(() => {
    // Extract media type from the first item in the data array
    if (data?.results && data.results.length > 0) {
      const firstItem = data.results[0];
      // Assuming the property that indicates media type is 'media_type'
      const type = firstItem.media_type || null;
      setMediaType(type);
    }
  }, [data]);

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className="carouselTitle">Trending</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} mediaType={mediaType} />
    </div>
  );
}

export default Trending;
