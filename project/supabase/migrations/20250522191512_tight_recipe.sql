/*
  # Add more physics experiments
  
  1. Changes
    - Add new physics experiments to the projects table
*/

INSERT INTO projects (title, description, steps, materials, age_range, difficulty, category, image_url)
VALUES 
(
  'Statik Elektrik Deneyi',
  'Bu deney ile statik elektriğin nasıl oluştuğunu ve etrafımızdaki nesneleri nasıl etkilediğini keşfedin. Günlük hayatta karşılaştığımız statik elektrik olaylarını anlamamızı sağlar.',
  '["Balonu şişirin ve bir iple bağlayın.", "Balonu saçınıza veya yün kumaşa sürtün.", "Balonu küçük kağıt parçalarına yaklaştırın.", "Kağıt parçalarının balona doğru çekilmesini gözlemleyin.", "Aynı deneyi musluktan akan ince su ile tekrarlayın ve suyun yönünün değişmesini gözlemleyin."]',
  '["Balon", "İp", "Kağıt parçaları", "Yün kumaş veya kazak"]',
  '6-12 yaş',
  'Kolay',
  'fizik',
  'https://images.pexels.com/photos/5726837/pexels-photo-5726837.jpeg'
),
(
  'Newton Renk Çarkı',
  'Bu deney ile beyaz ışığın aslında tüm renklerin birleşimi olduğunu keşfedin. Newton''un renk teorisini eğlenceli bir şekilde öğrenin.',
  '["Kartondan daire şeklinde bir çark kesin.", "Çarkı 7 eşit parçaya bölün.", "Her parçayı gökkuşağı renklerinden biriyle boyayın (kırmızı, turuncu, sarı, yeşil, mavi, lacivert, mor).", "Çarkın merkezine bir delik açın ve kalemi buradan geçirin.", "Çarkı hızlıca döndürün ve renklerin beyaza dönüşmesini gözlemleyin."]',
  '["Karton", "Boya kalemleri veya keçeli kalemler", "Makas", "Kurşun kalem", "Cetvel"]',
  '8-14 yaş',
  'Orta',
  'fizik',
  'https://images.pexels.com/photos/5726693/pexels-photo-5726693.jpeg'
),
(
  'Ses Dalgaları Deneyi',
  'Bu deney ile ses dalgalarının nasıl yayıldığını ve farklı malzemelerde nasıl hareket ettiğini gözlemleyin. Ses fiziğinin temel prensiplerini keşfedin.',
  '["Plastik kabı streç film ile kaplayın.", "Üzerine bir miktar tuz serpin.", "Kabın yanında metal tepsiyi tutun ve kaşıkla vurun.", "Tuz tanelerinin zıplamasını gözlemleyin.", "Farklı şiddetlerde vurarak ses dalgalarının etkisini karşılaştırın."]',
  '["Plastik kap", "Streç film", "Tuz", "Metal tepsi", "Metal kaşık"]',
  '7-13 yaş',
  'Orta',
  'fizik',
  'https://images.pexels.com/photos/7319307/pexels-photo-7319307.jpeg'
),
(
  'Ağırlık Merkezi Deneyi',
  'Bu deney ile cisimlerin ağırlık merkezini ve dengenin önemini keşfedin. Fizikteki denge kavramını eğlenceli bir şekilde öğrenin.',
  '["İki çatalı birbirine paralel olarak yerleştirin.", "Çatalların uçlarını bir kibrite geçirin.", "Kibriti bir bardağın kenarına dengeli bir şekilde yerleştirin.", "Sistemin nasıl dengede durduğunu gözlemleyin.", "Çatalların pozisyonunu değiştirerek dengenin nasıl değiştiğini inceleyin."]',
  '["2 adet çatal", "1 adet kibrit", "Su bardağı"]',
  '9-15 yaş',
  'Zor',
  'fizik',
  'https://images.pexels.com/photos/5726716/pexels-photo-5726716.jpeg'
),
(
  'Basit Elektrik Devresi',
  'Bu deney ile elektrik akımının nasıl çalıştığını ve basit bir devrenin nasıl kurulduğunu öğrenin. Günlük hayatta kullandığımız elektrikli aletlerin çalışma prensibini anlayın.',
  '["Pil yatağına pili yerleştirin.", "Kablolarla pil yatağını ampule bağlayın.", "Devre anahtarını ekleyin.", "Anahtarı açıp kapatarak ampulün yanıp sönmesini gözlemleyin.", "Farklı malzemelerle iletkenlik testi yapın."]',
  '["1.5V pil", "Pil yatağı", "LED ampul", "Kablolar", "Devre anahtarı", "İletkenlik testi için çeşitli malzemeler"]',
  '10-15 yaş',
  'Orta',
  'fizik',
  'https://images.pexels.com/photos/5726847/pexels-photo-5726847.jpeg'
);