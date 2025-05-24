/*
  # Create projects table

  1. New Tables
    - `projects`
      - `id` (bigint, primary key)
      - `title` (text, not null)
      - `description` (text, not null)
      - `steps` (jsonb, array of instructions)
      - `materials` (jsonb, array of required materials)
      - `age_range` (text, suitable age range)
      - `difficulty` (text, enum: 'Kolay', 'Orta', 'Zor')
      - `category` (text, matching category id)
      - `image_url` (text, experiment cover image)
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `projects` table
    - Add policy for anonymous users to read data
*/

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

-- Seed data with some example projects
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
),
(
  'DNA Modeli Yapımı',
  E'Bu proje ile çocuklar DNA\'nın yapısını eğlenceli bir şekilde öğrenirler. Kendi DNA modellerini yaparak genetiğin temel yapı taşını daha iyi anlarlar.',
  '["İki uzun teli paralel olarak yan yana getirin.", "Renkli jujuları çubuklar ile tellere bağlayarak DNA basamaklarını oluşturun.", "Her renk farklı bir nükleotidi temsil edebilir.", "DNA\'nın sarmal yapısını oluşturmak için telleri hafifçe bükün."]',
  '["İki uzun tel veya boru temizleyici", "Renkli jujular veya boncuklar", "Kısa çubuklar (kürdan veya pipet parçaları)", "Makas"]',
  '9-15 yaş',
  'Orta',
  'genetik',
  'https://images.pexels.com/photos/3825567/pexels-photo-3825567.jpeg'
),
(
  'Güneş Sistemi Modeli',
  'Bu proje ile çocuklar güneş sistemimizi ve gezegenlerin göreceli büyüklüklerini ve konumlarını öğrenirler. Üç boyutlu bir model yapmak uzay hakkında ilgi uyandırır.',
  '["Köpük topları gezegenlerin büyüklüğüne göre seçin.", "Her gezegeni uygun renklerle boyayın.", "Karton kutuyu siyaha boyayarak uzay boşluğunu temsil edin.", "Gezegenleri doğru sırayla iplere bağlayarak kutuya asın."]',
  '["Farklı boyutlarda köpük toplar", "Akrilik boya (çeşitli renkler)", "İplik", "Büyük karton kutu", "Siyah boya", "Fırça"]',
  '8-16 yaş',
  'Zor',
  'astronomi',
  'https://images.pexels.com/photos/2098428/pexels-photo-2098428.jpeg'
),
(
  'Bitki Büyüme Deneyi',
  'Bu deney ile çocuklar bitkilerin büyümesi için gerekli faktörleri keşfederler. Farklı koşullardaki bitkileri gözlemleyerek bilimsel metodu öğrenirler.',
  '["Üç ayrı kaba pamuk yerleştirin ve nemli hale getirin.", "Her kaba fasulye tohumu yerleştirin.", "Birinci kabı güneş ışığında, ikincisini az ışıklı yerde, üçüncüsünü karanlıkta tutun.", "Bitkilerin büyümesini her gün gözlemleyin ve not alın."]',
  '["Fasulye tohumları", "Üç adet şeffaf plastik kap", "Pamuk", "Su", "Defter ve kalem (gözlemleri kaydetmek için)"]',
  '6-12 yaş',
  'Kolay',
  'biyoloji',
  'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg'
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policy for anonymous reads
CREATE POLICY "Allow anonymous read access" 
  ON projects 
  FOR SELECT 
  TO anon 
  USING (true);