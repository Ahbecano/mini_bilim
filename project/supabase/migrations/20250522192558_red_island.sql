/*
  # Add experiments for all categories

  This migration adds new experiments for:
  - Chemistry (Kimya)
  - Biology (Biyoloji)
  - Astronomy (Astronomi)
  - Genetics (Genetik)
  - Other (Diğer)
*/

INSERT INTO projects (title, description, steps, materials, age_range, difficulty, category, image_url)
VALUES 
-- Kimya Deneyleri
(
  'Sihirli Süt Deneyi',
  'Bu deney ile sıvıların yüzey gerilimi ve deterjanların etkisini renkli bir şekilde gözlemleyin. Kimyasal reaksiyonların görsel bir şölen yarattığı eğlenceli bir deney.',
  '["Düz bir tabağa bir miktar süt dökün.", "Sütün üzerine farklı renklerde gıda boyalarından birkaç damla ekleyin.", "Bir kulak çubuğunun ucunu sıvı deterjana batırın.", "Deterjanlı çubuğu renkli sütün ortasına değdirin.", "Renklerin dans etmesini izleyin."]',
  '["Süt", "Gıda boyaları", "Sıvı deterjan", "Kulak çubuğu", "Düz tabak"]',
  '5-12 yaş',
  'Kolay',
  'kimya',
  'https://images.pexels.com/photos/5726826/pexels-photo-5726826.jpeg'
),
(
  'Kristal Büyütme',
  'Bu deney ile kristallerin nasıl oluştuğunu ve büyüdüğünü gözlemleyin. Doğadaki kristalleşme sürecini küçük ölçekte deneyimleyin.',
  '["Sıcak suya yavaş yavaş şeker ekleyerek doygun çözelti hazırlayın.", "Çözeltiyi temiz bir kavanoza aktarın.", "Bir ipi şekere bulayıp çözeltiye sarkıtın.", "Kavanozu serin ve sakin bir yere koyun.", "Birkaç gün boyunca kristallerin büyümesini gözlemleyin."]',
  '["Şeker", "Su", "Kavanoz", "İp", "Tahta çubuk"]',
  '8-14 yaş',
  'Orta',
  'kimya',
  'https://images.pexels.com/photos/5726839/pexels-photo-5726839.jpeg'
),

-- Biyoloji Deneyleri
(
  'Yaprak Pigmentleri',
  'Bu deney ile yapraklardaki farklı pigmentleri ayırarak fotosentezde rol oynayan molekülleri keşfedin.',
  '["Yaprakları küçük parçalara ayırın.", "Alkol içinde yaprakları ezin.", "Filtre kağıdını hazırlayın.", "Karışımı filtre kağıdına damlatın.", "Pigmentlerin ayrılmasını gözlemleyin."]',
  '["Yeşil yapraklar", "İzopropil alkol", "Filtre kağıdı", "Beher", "Havan"]',
  '10-15 yaş',
  'Zor',
  'biyoloji',
  'https://images.pexels.com/photos/2748756/pexels-photo-2748756.jpeg'
),
(
  'Mikroskobik Yaşam',
  'Bu deney ile göl suyunda yaşayan mikroorganizmaları gözlemleyerek mikroskobik yaşamı keşfedin.',
  '["Göl suyundan örnek alın.", "Lamın üzerine bir damla su koyun.", "Lamel ile kapatın.", "Mikroskopta inceleyin.", "Gördüğünüz canlıları çizin ve not alın."]',
  '["Mikroskop", "Lam", "Lamel", "Göl suyu örneği", "Damlalık"]',
  '9-15 yaş',
  'Orta',
  'biyoloji',
  'https://images.pexels.com/photos/5726832/pexels-photo-5726832.jpeg'
),

-- Astronomi Deneyleri
(
  'Güneş Sistemi Modeli',
  'Bu deney ile güneş sistemindeki gezegenlerin boyutlarını ve yörüngelerini öğrenin.',
  '["Karton kutuyu siyaha boyayın.", "Strafor topları gezegenlerin oranlarına göre boyayın.", "İpleri farklı uzunluklarda kesin.", "Gezegenleri doğru sırayla asın.", "Yörünge hareketlerini canlandırın."]',
  '["Karton kutu", "Strafor toplar", "Akrilik boya", "İp", "Fırça"]',
  '8-14 yaş',
  'Orta',
  'astronomi',
  'https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg'
),
(
  'Ay Evreleri Modeli',
  'Bu deney ile Ay''ın evrelerinin nasıl oluştuğunu anlayın.',
  '["Beyaz topu ipe bağlayın.", "Karanlık odada el feneri kullanın.", "Topu farklı açılarda aydınlatın.", "Gölgelerin oluşturduğu evreleri gözlemleyin.", "Her evreyi çizin ve isimlerini yazın."]',
  '["Beyaz top", "El feneri", "İp", "Kağıt", "Kalem"]',
  '7-13 yaş',
  'Kolay',
  'astronomi',
  'https://images.pexels.com/photos/5726843/pexels-photo-5726843.jpeg'
),

-- Genetik Deneyleri
(
  'DNA İzolasyonu',
  'Bu deney ile meyvelerin DNA''sını çıkararak genetik materyali gözle görülür hale getirin.',
  '["Muzu ezin ve su ekleyin.", "Tuz ve deterjan ekleyip karıştırın.", "Karışımı süzün.", "Soğuk alkol ekleyin.", "DNA''nın çökelmesini gözlemleyin."]',
  '["Muz", "Tuz", "Bulaşık deterjanı", "Soğuk alkol", "Süzgeç"]',
  '11-16 yaş',
  'Zor',
  'genetik',
  'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg'
),
(
  'Kalıtım Simülasyonu',
  'Bu deney ile Mendel''in kalıtım kanunlarını renkli boncuklarla simüle edin.',
  '["Farklı renk boncukları hazırlayın.", "Her rengi bir özellik olarak belirleyin.", "Rastgele eşleştirmeler yapın.", "Sonuçları kaydedin.", "Oranları hesaplayın."]',
  '["Renkli boncuklar", "Torba", "Kağıt", "Kalem", "Hesap makinesi"]',
  '12-16 yaş',
  'Orta',
  'genetik',
  'https://images.pexels.com/photos/5726841/pexels-photo-5726841.jpeg'
),

-- Diğer Deneyler
(
  'Renk Karışımları',
  'Bu deney ile renklerin birbirleriyle etkileşimini ve yeni renklerin oluşumunu keşfedin.',
  '["Ana renklerde sulu boyalar hazırlayın.", "Kağıt üzerinde karışımlar yapın.", "Sonuçları not alın.", "Renk çemberini oluşturun.", "Tamamlayıcı renkleri bulun."]',
  '["Sulu boya", "Resim kağıdı", "Fırça", "Su kabı", "Palet"]',
  '6-12 yaş',
  'Kolay',
  'diger',
  'https://images.pexels.com/photos/5726835/pexels-photo-5726835.jpeg'
),
(
  'Hava Basıncı Deneyi',
  'Bu deney ile atmosfer basıncının etkilerini gözlemleyin.',
  '["Su dolu bardağı kağıtla kapatın.", "Bardağı ters çevirin.", "Kağıdı bırakın.", "Suyun dökülmemesini gözlemleyin.", "Farklı sıvılarla deneyi tekrarlayın."]',
  '["Su bardağı", "Kağıt", "Su", "Farklı sıvılar"]',
  '7-13 yaş',
  'Kolay',
  'diger',
  'https://images.pexels.com/photos/5726845/pexels-photo-5726845.jpeg'
);