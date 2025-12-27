import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://tra-vinh-api.onrender.com/api';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    heroTitle: 'Khám Phá Tỉnh Trà Vinh',
    heroDescription: 'Khám phá vẻ đẹp tỉnh Trà Vinh và những ngôi chùa cổ kính nổi tiếng với nền văn hóa phong phú',
    heroImage: 'https://via.placeholder.com/1920x600?text=Trà+Vinh',
    aboutTitle: 'Về Trà Vinh',
    aboutDescription: 'Trà Vinh là một tỉnh xinh đẹp nằm ở Đồng bằng sông Cửu Long, nổi tiếng với những ngôi chùa cổ kính và nền văn hóa đa dân tộc phong phú.',
    aboutImage: 'https://via.placeholder.com/400x400?text=Trà+Vinh',
    siteTitle: 'Khám phá tỉnh Trà Vinh và các ngôi chùa nổi tiếng',
    siteDescription: 'Website khám phá tỉnh Trà Vinh và giới thiệu các ngôi chùa nổi tiếng',
    provinceName: 'Trà Vinh',
    provinceDescription: 'Trà Vinh là một tỉnh nằm ở Đồng bằng sông Cửu Long, Việt Nam, nổi tiếng với những ngôi chùa cổ kính và nền văn hóa đa dân tộc phong phú.',
    provinceLocation: 'Đồng bằng sông Cửu Long, Việt Nam',
    provincePopulation: 'Khoảng 1 triệu dân',
    provinceArea: '2,341 km²',
    provinceHighlights: [
      'Các ngôi chùa cổ kính',
      'Nền văn hóa Khmer độc đáo',
      'Cảnh sông nước tuyệt đẹp',
      'Ẩm thực địa phương hấp dẫn',
      'Các lễ hội truyền thống'
    ],
  });

  const [pagodas, setPagodas] = useState([]);
  const [posts, setPosts] = useState([]);
  const [landscapes, setLandscapes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from API
  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const [pagodaRes, postRes, landscapeRes] = await Promise.all([
        axios.get(`${API_URL}/pagodas`),
        axios.get(`${API_URL}/posts`),
        axios.get(`${API_URL}/landscapes`)
      ]);
      
      setPagodas(pagodaRes.data.map(p => ({ ...p, _id: p.id })));
      setPosts(postRes.data.map(p => ({ ...p, _id: p.id })));
      setLandscapes(landscapeRes.data.map(l => ({ ...l, _id: l.id })));
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const updateSettings = (newSettings) => {
    setSettings(newSettings);
    localStorage.setItem('siteSettings', JSON.stringify(newSettings));
  };

  const updatePagodas = async (newPagodas) => {
    setPagodas(newPagodas);
    // Sync with API if needed
  };

  const updatePosts = async (newPosts) => {
    setPosts(newPosts);
  };

  const updateLandscapes = async (newLandscapes) => {
    setLandscapes(newLandscapes);
  };

  return (
    <DataContext.Provider value={{
      settings,
      updateSettings,
      pagodas,
      updatePagodas,
      posts,
      updatePosts,
      landscapes,
      updateLandscapes,
      loading,
      API_URL
    }}>
      {children}
    </DataContext.Provider>
  );
};
