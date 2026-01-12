# 🚀 EditFlow - GitHub Pages Deployment Rehberi

## Adım 1: GitHub Hesabı Oluşturun (Eğer yoksa)

1. **GitHub'a gidin:** https://github.com
2. **Sign up** butonuna tıklayın
3. Email, kullanıcı adı ve şifre belirleyin
4. Hesabınızı doğrulayın

---

## Adım 2: Yeni Repository Oluşturun

1. **GitHub'a giriş yapın**
2. Sağ üst köşedeki **"+"** işaretine tıklayın
3. **"New repository"** seçin
4. Repository ayarları:
   - **Repository name:** `editflow` (veya istediğiniz isim)
   - **Description:** "EditFlow - İçerik Editi, Logo Tasarımı & Reklam Videoları"
   - **Public** seçili olsun (ücretsiz hosting için gerekli)
   - ✅ **"Add a README file"** kutucuğunu İŞARETLEYİN
5. **"Create repository"** butonuna tıklayın

---

## Adım 3: Dosyaları Yükleyin

Repository oluştuktan sonra:

1. **"Add file"** butonuna tıklayın
2. **"Upload files"** seçin
3. Şu klasördeki **TÜM DOSYALARI** sürükleyip bırakın:
   ```
   C:\Users\PC\.gemini\antigravity\scratch\editflow-website
   ```
   
   **Yüklenecek dosyalar:**
   - ✅ index.html
   - ✅ style.css
   - ✅ script.js
   - ✅ logo.png
   - ✅ portfolio-1.jpg
   - ✅ portfolio-2.jpg
   - ✅ portfolio-3.jpg
   - ✅ portfolio-4.jpg
   - ✅ portfolio-5.jpg
   - ✅ portfolio-6.jpg

4. Commit mesajı yazın: "Initial commit - EditFlow website"
5. **"Commit changes"** butonuna tıklayın

---

## Adım 4: GitHub Pages'i Aktif Edin

1. Repository sayfasında **"Settings"** (Ayarlar) sekmesine tıklayın
2. Sol menüden **"Pages"** seçeneğine tıklayın
3. **"Source"** bölümünde:
   - **Branch:** `main` seçin
   - **Folder:** `/ (root)` seçin
4. **"Save"** butonuna tıklayın

---

## Adım 5: Siteniz Yayında! 🎉

Birkaç dakika içinde (genellikle 1-2 dakika) siteniz yayına girecek.

**Site URL'iniz:**
```
https://KULLANICI-ADINIZ.github.io/editflow/
```

Örnek:
- Kullanıcı adınız `johndoe` ise
- Repository adı `editflow` ise
- URL: `https://johndoe.github.io/editflow/`

---

## 🔍 URL'nizi Bulma

GitHub Pages ayarları sayfasında (Settings → Pages) şöyle bir mesaj göreceksiniz:

> ✅ Your site is live at https://kullanici-adi.github.io/editflow/

Bu linke tıklayarak sitenizi görebilirsiniz!

---

## ⚡ Önemli Notlar

### SSL Sertifikası
- ✅ GitHub Pages otomatik olarak **HTTPS** sağlar
- ✅ SSL sertifikası otomatik aktif olur
- ✅ Netlify'daki gibi sorun yaşanmaz

### Site Güncelleme
Sitenizi güncellemek için:
1. Repository'ye gidin
2. Güncellemek istediğiniz dosyaya tıklayın
3. Kalem ikonuna (Edit) tıklayın
4. Değişiklik yapın
5. "Commit changes" ile kaydedin
6. 1-2 dakika içinde değişiklikler yayına girer

### Özel Domain Bağlama (İsteğe Bağlı)
Kendi domain'inizi (örn: editflow.com) bağlamak için:
1. Settings → Pages → Custom domain
2. Domain'inizi yazın
3. DNS ayarlarını yapın (GitHub size gösterecek)

---

## 🎨 Sonuç

GitHub Pages ile:
- ✅ Ücretsiz hosting
- ✅ Otomatik SSL/HTTPS
- ✅ Hızlı ve güvenilir
- ✅ Kolay güncelleme

**Başarılar!** 🚀

---

## ❓ Sorun mu Yaşıyorsunuz?

Eğer bir sorunla karşılaşırsanız:
1. Repository'nin **Public** olduğundan emin olun
2. `index.html` dosyasının repository'nin ana dizininde olduğunu kontrol edin
3. GitHub Pages ayarlarında Branch'in `main` olduğunu doğrulayın
4. 5-10 dakika bekleyin (ilk deployment biraz sürebilir)
