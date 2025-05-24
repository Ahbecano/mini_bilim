/*
  # Bilim Deneyleri Veritabanı Şeması

  1. Yeni Tablolar
    - `projects` (deneyler)
      - `id` (bigint, primary key)
      - `title` (başlık)
      - `description` (açıklama)
      - `steps` (deney adımları, JSON array)
      - `materials` (gerekli malzemeler, JSON array)
      - `age_range` (yaş aralığı)
      - `difficulty` (zorluk: Kolay, Orta, Zor)
      - `category` (kategori)
      - `image_url` (deney görseli)
      - `created_at` (oluşturulma tarihi)
    
    - `comments` (yorumlar)
      - `id` (bigint, primary key)
      - `project_id` (deney ID'si, foreign key)
      - `user_id` (kullanıcı ID'si)
      - `content` (yorum içeriği)
      - `rating` (puanlama, 1-5 arası)
      - `created_at` (oluşturulma tarihi)
    
    - `favorites` (favoriler)
      - `id` (bigint, primary key)
      - `project_id` (deney ID'si, foreign key)
      - `user_id` (kullanıcı ID'si)
      - `created_at` (oluşturulma tarihi)

  2. Güvenlik
    - Tüm tablolarda RLS aktif
    - Projeler için anonim okuma izni
    - Yorumlar ve favoriler için kullanıcı bazlı erişim
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

-- Comments table
CREATE TABLE IF NOT EXISTS comments (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  project_id bigint NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  content text NOT NULL,
  rating integer NOT NULL CHECK (rating BETWEEN 1 AND 5),
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Favorites table
CREATE TABLE IF NOT EXISTS favorites (
  id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  project_id bigint NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(project_id, user_id)
);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;

-- Projects policies
CREATE POLICY "Allow anonymous read access" 
  ON projects 
  FOR SELECT 
  TO anon 
  USING (true);

-- Comments policies
CREATE POLICY "Users can create their own comments" 
  ON comments 
  FOR INSERT 
  TO authenticated 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read all comments" 
  ON comments 
  FOR SELECT 
  TO authenticated 
  USING (true);

CREATE POLICY "Users can update their own comments" 
  ON comments 
  FOR UPDATE 
  TO authenticated 
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own comments" 
  ON comments 
  FOR DELETE 
  TO authenticated 
  USING (auth.uid() = user_id);

-- Favorites policies
CREATE POLICY "Users can manage their own favorites" 
  ON favorites 
  FOR ALL 
  TO authenticated 
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

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
);