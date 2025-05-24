/*
  # Deney Projeleri Veritabanı Şeması

  1. Yeni Tablolar
    - `projects` tablosu
      - `id` (bigint, otomatik artan primary key)
      - `title` (text, deney başlığı)
      - `description` (text, deney açıklaması)
      - `steps` (jsonb, deney adımları dizisi)
      - `materials` (jsonb, gerekli malzemeler dizisi)
      - `age_range` (text, uygun yaş aralığı)
      - `difficulty` (text, zorluk seviyesi: Kolay, Orta, Zor)
      - `category` (text, deney kategorisi)
      - `image_url` (text, deney görseli)
      - `created_at` (timestamptz, oluşturulma tarihi)

  2. Güvenlik
    - `projects` tablosu için RLS aktif
    - Herkesin okuma yapabilmesi için politika eklendi
*/

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  title text NOT NULL,
  description text NOT NULL,
  steps jsonb NOT NULL,
  materials jsonb NOT NULL,
  age_range text NOT NULL,
  difficulty text NOT NULL CHECK (difficulty IN ('Kolay', 'Orta', 'Zor')),
  category text NOT NULL,
  image_url text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policy for anonymous reads
CREATE POLICY "Allow anonymous read access" 
  ON projects 
  FOR SELECT 
  TO anon 
  USING (true);

-- Insert example projects
INSERT INTO projects (title, description, steps, materials, age_range, difficulty, category, image_url)
VALUES 
(
  'Renkli Volkan Deneyi',
  'Bu deney ile volkan patlamasını renkli ve eğlenceli bir şekilde simüle edebilirsiniz. Kabarcıklanma reaksiyonu çocuklar için hem eğlenceli hem de öğreticidir.',
  '["Bir tepsi veya derin tabağın ortasına kabartma tozu koyun.", "Üzerine birkaç damla gıda boyası ekleyin.", "Sirkeyi yavaşça kabartma tozunun üzerine dökün.", "Köpürme ve kabarcıklanmayı gözlemleyin."]',
  '["Kabartma tozu (sodyum bikarbonat)", "Sirke", "Gıda boyası", "Tepsi veya derin tabak"]',
  '5-12 yaş',
  'Kolay',
  'kimya',
  'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg'
),
(
  'Ev Yapımı Pusula',
  'Bu basit deney ile manyetik alan prensiplerini öğrenebilir ve kendi pusulasını yapabilirsiniz. Pusula, dünya üzerindeki yön bulma teknolojisinin temelini oluşturur.',
  '["İğneyi mıknatısla yaklaşık 50 kez aynı yönde sürterek manyetize edin.", "Bir kase su doldurun.", "Küçük bir parça mantar veya strafor alın ve iğneyi üzerine yatay bir şekilde yerleştirin.", "Mantarı suya bırakın ve iğnenin kuzey-güney yönünü gösterdiğini gözlemleyin."]',
  '["İğne", "Mıknatıs", "Su dolu kase", "Küçük bir parça mantar veya strafor"]',
  '8-14 yaş',
  'Orta',
  'fizik',
  'https://images.pexels.com/photos/697662/pexels-photo-697662.jpeg'
),
(
  'Işığın Kırılması Deneyi',
  'Bu deney, ışığın farklı ortamlarda nasıl kırıldığını gösteren eğlenceli bir aktivitedir. Çocuklar optik illüzyonları ve ışık kırılması prensibini öğrenirler.',
  '["Cam bardağı yarısına kadar su ile doldurun.", "Bardağın arkasına oklar çizili kağıdı yerleştirin.", "Önden bakarak okların yönünün değiştiğini gözlemleyin.", "Farklı açılardan bakarak ışığın kırılma etkisini gözlemleyin."]',
  '["Şeffaf cam bardak", "Su", "Üzerine oklar çizilmiş kağıt", "Kalem"]',
  '7-14 yaş',
  'Kolay',
  'fizik',
  'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg'
);