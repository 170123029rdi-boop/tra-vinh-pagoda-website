import React, { createContext, useState, useEffect } from 'react';

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
    // Thông tin tỉnh Trà Vinh
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

  const [pagodas, setPagodas] = useState([
    { 
      _id: 1, 
      name: 'Chùa Cô Tôn', 
      category: 'Chùa Khmer', 
      district: 'Trà Ôn', 
      image: 'https://via.placeholder.com/400x300?text=Chùa+Cô+Tôn', 
      description: 'Kiến trúc Khmer-Việt độc đáo', 
      address: 'Xã Tân Phú Đông, huyện Trà Ôn',
      history: 'Chùa được xây dựng vào thế kỷ 18, là nơi thờ phụng Phật Bà Quan Âm.',
      features: ['Tượng Phật Bà Quan Âm cao 3m', 'Kiến trúc Khmer-Việt độc đáo', 'Sân chùa rộng với cây cổ thụ'],
      visitingHours: '6:00 - 18:00',
      entryFee: 'Miễn phí',
      latitude: 9.5234,
      longitude: 106.3456
    },
    { 
      _id: 2, 
      name: 'Chùa Ông Mười', 
      category: 'Chùa Việt', 
      district: 'Thành phố Trà Vinh', 
      image: 'https://via.placeholder.com/400x300?text=Chùa+Ông+Mười', 
      description: 'Kiến trúc truyền thống Việt', 
      address: 'Thành phố Trà Vinh',
      history: 'Chùa được xây dựng vào năm 1850, là nơi thờ phụng Ông Mười.',
      features: ['Tượng Ông Mười cao 2.5m', 'Kiến trúc truyền thống Việt', 'Bàn thờ được chạm khắc công phu'],
      visitingHours: '5:00 - 20:00',
      entryFee: 'Miễn phí',
      latitude: 9.5678,
      longitude: 106.3789
    },
    { 
      _id: 3, 
      name: 'Chùa Khmer Mạc Cửu', 
      category: 'Chùa Khmer', 
      district: 'Trà Ôn', 
      image: 'https://via.placeholder.com/400x300?text=Chùa+Khmer', 
      description: 'Kiến trúc Khmer nguyên bản', 
      address: 'Xã Tân Phú Tây, huyện Trà Ôn',
      history: 'Chùa được xây dựng vào thế kỷ 19, là nơi tu hành của các nhà sư Khmer.',
      features: ['Kiến trúc Khmer nguyên bản', 'Tượng Phật Thích Ca Mâu Ni', 'Hành lang dài với cột trụ chạm khắc'],
      visitingHours: '6:00 - 17:00',
      entryFee: 'Miễn phí',
      latitude: 9.5345,
      longitude: 106.3567
    },
    { 
      _id: 4, 
      name: 'Chùa Cái Bè', 
      category: 'Chùa Khmer', 
      district: 'Cầu Ngang', 
      image: 'https://via.placeholder.com/400x300?text=Chùa+Cái+Bè', 
      description: 'Vị trí địa lý độc đáo', 
      address: 'Xã Cái Bè, huyện Cầu Ngang',
      history: 'Chùa được xây dựng vào thế kỷ 18, nổi tiếng với vị trí đẹp nhìn ra sông Hậu.',
      features: ['Vị trí địa lý độc đáo', 'Tượng Phật Bà Quan Âm', 'Cảnh sông nước tuyệt đẹp'],
      visitingHours: '6:00 - 18:00',
      entryFee: 'Miễn phí',
      latitude: 9.4567,
      longitude: 106.2345
    },
    { 
      _id: 5, 
      name: 'Chùa Ông Bà', 
      category: 'Chùa Việt', 
      district: 'Thành phố Trà Vinh', 
      image: 'https://via.placeholder.com/400x300?text=Chùa+Ông+Bà', 
      description: 'Kiến trúc Việt-Pháp độc đáo', 
      address: 'Thành phố Trà Vinh',
      history: 'Chùa được xây dựng vào năm 1920, là nơi thờ phụng các vị tổ tiên.',
      features: ['Kiến trúc Việt-Pháp độc đáo', 'Bàn thờ tổ tiên truyền thống', 'Không gian gia đình ấm cúng'],
      visitingHours: '6:00 - 18:00',
      entryFee: 'Miễn phí',
      latitude: 9.5789,
      longitude: 106.3890
    },
    { 
      _id: 6, 
      name: 'Chùa Mỹ Tho', 
      category: 'Chùa Khmer', 
      district: 'Trà Ôn', 
      image: 'https://via.placeholder.com/400x300?text=Chùa+Mỹ+Tho', 
      description: 'Kiến trúc truyền thống Việt', 
      address: 'Xã Tân Phú Tây, huyện Trà Ôn',
      history: 'Chùa được xây dựng vào thế kỷ 19, là nơi tu hành của các nhà sư.',
      features: ['Tượng Phật Thích Ca Mâu Ni cao 2m', 'Kiến trúc truyền thống Việt', 'Vườn cây cảnh xanh mát'],
      visitingHours: '6:00 - 17:00',
      entryFee: 'Miễn phí',
      latitude: 9.5456,
      longitude: 106.3678
    }
  ]);

  const [posts, setPosts] = useState([
    { _id: 1, title: 'Khám Phá Kiến Trúc Chùa Khmer Tại Trà Vinh', author: 'Admin', content: 'Trà Vinh là một trong những nơi có nhiều chùa Khmer đẹp nhất ở Việt Nam.' },
    { _id: 2, title: 'Lịch Sử Phát Triển Các Ngôi Chùa Tại Trà Vinh', author: 'Admin', content: 'Các ngôi chùa tại Trà Vinh có lịch sử phát triển lâu đời, từ thế kỷ 18 đến nay.' },
    { _id: 3, title: 'Du Lịch Tâm Linh Tại Trà Vinh', author: 'Admin', content: 'Trà Vinh là một điểm đến lý tưởng cho những ai muốn tìm hiểu về du lịch tâm linh.' },
  ]);

  const [landscapes, setLandscapes] = useState([
    { _id: 1, title: 'Sông Hậu', description: 'Dòng sông Hậu uốn lượn qua Trà Vinh', url: 'https://via.placeholder.com/400x300?text=Sông+Hậu' },
    { _id: 2, title: 'Ruộng Lúa Xanh', description: 'Cánh đồng lúa bạt ngàn', url: 'https://via.placeholder.com/400x300?text=Ruộng+Lúa' },
    { _id: 3, title: 'Chợ Nổi', description: 'Chợ nổi truyền thống Trà Vinh', url: 'https://via.placeholder.com/400x300?text=Chợ+Nổi' },
  ]);

  useEffect(() => {
    const savedSettings = localStorage.getItem('siteSettings');
    const savedPagodas = localStorage.getItem('sitePagodas');
    const savedPosts = localStorage.getItem('sitePosts');
    const savedLandscapes = localStorage.getItem('siteLandscapes');

    if (savedSettings) setSettings(JSON.parse(savedSettings));
    if (savedPagodas) setPagodas(JSON.parse(savedPagodas));
    if (savedPosts) setPosts(JSON.parse(savedPosts));
    if (savedLandscapes) setLandscapes(JSON.parse(savedLandscapes));
  }, []);

  const updateSettings = (newSettings) => {
    setSettings(newSettings);
    localStorage.setItem('siteSettings', JSON.stringify(newSettings));
  };

  const updatePagodas = (newPagodas) => {
    setPagodas(newPagodas);
    localStorage.setItem('sitePagodas', JSON.stringify(newPagodas));
  };

  const updatePosts = (newPosts) => {
    setPosts(newPosts);
    localStorage.setItem('sitePosts', JSON.stringify(newPosts));
  };

  const updateLandscapes = (newLandscapes) => {
    setLandscapes(newLandscapes);
    localStorage.setItem('siteLandscapes', JSON.stringify(newLandscapes));
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
    }}>
      {children}
    </DataContext.Provider>
  );
};
