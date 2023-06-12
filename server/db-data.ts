export const USERS = {
  1: {
    id: 1,
    username: 'admin',
    password: 'admin',
    name: 'Mert',
    surname: 'Yildiz',
    mobile: '05350056910',
  },
};

export const ITEMS: any = {
  1: {
    id: 1,
    title: 'Nike Air Max 270',
    description:
      'Nike Air Max 270, her adımın altında taze tarz ve görünür yastıklama sunar. Modern konfor için güncellenen ayakkabı, abartılmış dil üstü ve miras dil logosuyla orijinal, 1991 Air Max 180 e gönderme yapar.',
    price: 1199.99,
    image: 'https://i.ibb.co/m6Cwjn6/1.jpg',
  },
  2: {
    id: 2,
    title: 'Adidas Ultraboost',
    description:
      'Adidas Ultraboost, her koşuda performans ve tarzı bir arada sunar. Enerji dönüşüm teknolojisi sayesinde yürüyüşü daha hafif ve zevkli hale getirir. Rahat ve esnek tasarımı sayesinde ayaklarınıza mükemmel bir uyum sağlar.',
    price: 1099.99,
    image: 'https://i.ibb.co/zG3Xx6V/2.jpg',
  },
  3: {
    id: 3,
    title: 'Puma RS-X',
    description:
      'Puma RS-X, retro görünümü ve modern teknolojisiyle öne çıkar. Ayakkabının üst kısmı, dayanıklı malzemelerden yapılmıştır ve ayağınızı rahat ve güvende tutar. Yastıklama sistemi sayesinde yürüyüşü daha konforlu hale getirir.',
    price: 899.99,
    image: 'https://i.ibb.co/WknTrcK/3.jpg',
  },
  4: {
    id: 4,
    title: 'New Balance 990v5',
    description:
      'New Balance 990v5, kaliteli malzemeleri ve zarif tasarımıyla fark yaratır. Ayakkabının orta tabanı, zıplama ve yastıklama özellikleri sayesinde performansı artırır. Ayrıca, ayakkabının üst kısmı nefes alabilen malzemelerden yapılmıştır ve ayakları serin tutar.',
    price: 999.99,
    image: 'https://i.ibb.co/4ttzHb5/4.jpg',
  },
  5: {
    id: 5,
    title: 'Asics Gel-Kayano 28',
    description:
      'Asics Gel-Kayano 28, her koşucunun ihtiyacını karşılar. Yenilikçi teknolojileri sayesinde yürüyüşü daha hafif ve konforlu hale getirir. Ayakkabının üst kısmı, nefes alabilen malzemelerden yapılmıştır ve ayakları serin tutar.',
    price: 1199.99,
    image: 'https://i.ibb.co/VM3yDxr/5.jpg',
  },
};

export function findItemById(itemId: number) {
  return ITEMS[itemId];
}

export function authenticate(username: string, password: string) {
  const user: any = Object.values(USERS).find(user => user.username === username);
  if (user && user.password == password) {
    return user;
  } else {
    return undefined;
  }
}
