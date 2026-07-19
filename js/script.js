const navbarHTML = `
<header class="fixed top-0 left-0 w-full z-50 flex items-center h-[80px] bg-navy-deep text-white shadow-md transition-all duration-300">
  <div class="max-w-[1200px] mx-auto w-full h-full flex items-center justify-between px-6">
    <a href="index.html" class="flex items-center gap-4">
      <img src="assets/images/logo-setjen.png" alt="Logo SETJEN DPR RI" class="h-10 w-auto object-contain shrink-0">
      <span class="font-heading text-lg md:text-xl font-bold text-white tracking-tight hidden sm:block">Deputi Bidang Administrasi SETJEN DPR RI</span>
    </a>
    
    <nav class="hidden lg:flex items-center gap-6 font-caps text-sm h-full">
      <a href="index.html" class="nav-link hover:opacity-80 transition-all duration-300 flex items-center h-full">
         <img src="assets/images/icon-dpr.png" alt="Beranda" class="h-8 w-auto object-contain">
      </a>
      
      <!-- Menu Profil -->
      <div class="h-full flex items-center group">
        <button class="nav-link h-full flex items-center gap-1 hover:text-gold transition-colors duration-300 cursor-pointer">
          Profil <span class="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:rotate-180">expand_more</span>
        </button>
        
        <div class="fixed left-0 top-[80px] w-full bg-white shadow-2xl opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-40 border-t-[3px] border-gold text-txt">
          <div class="max-w-[1200px] mx-auto w-full flex bg-white">
            <!-- Judul Bagian Kiri -->
            <div class="w-1/4 py-10 pr-8 relative flex flex-col justify-start">
              <h2 class="font-heading text-3xl md:text-4xl font-bold text-navy-deep leading-tight">Profil <br>Deputi</h2>
              <div class="absolute -bottom-10 -left-10 w-48 h-48 batik-pattern opacity-5 pointer-events-none"></div>
            </div>
            
            <!-- Tautan Bagian Tengah -->
            <div class="w-1/3 py-10 px-8 border-l border-gray-100 flex flex-col justify-start">
              <a href="profil.html" class="mega-menu-link py-4 border-b border-gray-100 text-lg font-bold text-gray-700 hover:text-navy-deep flex items-center justify-between group/link transition-colors pr-2" 
                 data-img="assets/images/hero/Gedung-DPR.jpg" 
                 data-icon="corporate_fare" 
                 data-title="Kenali Kami Lebih Dekat" 
                 data-desc="Mendukung pelaksanaan tugas pokok dan fungsi DPR RI melalui pelayanan administrasi yang profesional, transparan, dan akuntabel.">
                <span>Tentang Deputi Administrasi</span>
                <span class="material-symbols-outlined opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-gold font-bold">arrow_forward</span>
              </a>
              <a href="visi-misi.html" class="mega-menu-link py-4 border-b border-gray-100 text-lg font-bold text-gray-700 hover:text-navy-deep flex items-center justify-between group/link transition-colors pr-2"
                 data-img="assets/images/hero/Gedung-DPR.jpg" 
                 data-icon="visibility" 
                 data-title="Visi dan Misi" 
                 data-desc="Mewujudkan administrasi parlemen yang modern, akuntabel, dan transparan dalam mendukung pelaksanaan fungsi dewan.">
                <span>Visi dan Misi</span>
                <span class="material-symbols-outlined opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-gold font-bold">arrow_forward</span>
              </a>
            </div>
            
            <!-- Right Side Feature Image -->
            <div class="w-5/12 py-8 pl-8 border-l border-gray-100">
              <div class="w-full flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
                <div class="w-full h-40 overflow-hidden relative bg-navy-deep">
                  <img id="mega-img" src="assets/images/hero/Gedung-DPR.jpg" alt="DPR" class="w-full h-full object-cover transition-opacity duration-300">
                </div>
                <div class="w-full bg-navy-deep text-white p-6">
                  <h3 class="font-caps font-bold text-lg mb-2 flex items-center gap-2">
                    <span id="mega-icon" class="material-symbols-outlined">corporate_fare</span> <span id="mega-title">Kenali Kami Lebih Dekat</span>
                  </h3>
                  <p id="mega-desc" class="text-sm text-white/80 line-clamp-2 leading-relaxed">
                    Mendukung pelaksanaan tugas pokok dan fungsi DPR RI melalui pelayanan administrasi yang profesional, transparan, dan akuntabel.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Unit Kerja Dropdown (Mega Menu) -->
      <div class="h-full flex items-center group">
        <button onclick="window.location.href='unit-kerja.html'" class="nav-link h-full flex items-center gap-1 hover:text-gold transition-colors duration-300 cursor-pointer">
          Unit Kerja <span class="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:rotate-180">expand_more</span>
        </button>
        
        <div class="fixed left-0 top-[80px] w-full bg-white shadow-2xl opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-40 border-t-[3px] border-gold text-txt">
          <div class="max-w-[1200px] mx-auto w-full flex bg-white">
            <!-- Judul Bagian Kiri -->
            <div class="w-[20%] py-10 pr-6 relative flex flex-col justify-start">
              <h2 class="font-heading text-3xl md:text-4xl font-bold text-navy-deep leading-tight">Unit <br>Kerja</h2>
              <div class="absolute -bottom-10 -left-10 w-48 h-48 batik-pattern opacity-5 pointer-events-none"></div>
            </div>
            
            <!-- Middle Side Links (Split into 2 Columns) -->
            <div class="w-[50%] py-8 px-8 border-l border-gray-100 flex flex-col justify-between">
              <div class="flex gap-8 w-full">
                <!-- Kolom 1 -->
                <div class="w-1/2 flex flex-col justify-start">
                  <a href="biro-hukum.html" class="mega-menu-link-unit py-3 border-b border-gray-100 text-[14px] font-bold text-gray-700 hover:text-navy-deep flex items-center justify-between group/link transition-colors pr-2"
                     data-img="assets/images/hero/Gedung-DPR.jpg" data-icon="gavel" data-title="Biro Hukum & Pengaduan" data-desc="Memberikan dukungan di bidang hukum serta pengelolaan pengaduan masyarakat.">
                    <span>Biro Hukum & Pengaduan</span>
                    <span class="material-symbols-outlined opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-gold font-bold">arrow_forward</span>
                  </a>
                  <a href="biro-sdm.html" class="mega-menu-link-unit py-3 border-b border-gray-100 text-[14px] font-bold text-gray-700 hover:text-navy-deep flex items-center justify-between group/link transition-colors pr-2"
                     data-img="assets/images/hero/Gedung-DPR.jpg" data-icon="manage_accounts" data-title="Biro SDM Aparatur" data-desc="Pengelolaan administrasi kepegawaian serta pengembangan sumber daya manusia.">
                    <span>Biro SDM Aparatur</span>
                    <span class="material-symbols-outlined opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-gold font-bold">arrow_forward</span>
                  </a>
                  <a href="biro-perencanaan.html" class="mega-menu-link-unit py-3 border-b border-gray-100 text-[14px] font-bold text-gray-700 hover:text-navy-deep flex items-center justify-between group/link transition-colors pr-2"
                     data-img="assets/images/hero/Gedung-DPR.jpg" data-icon="architecture" data-title="Biro Perencanaan" data-desc="Penyusunan rencana, program, tata laksana organisasi dan evaluasi birokrasi.">
                    <span>Biro Perencanaan</span>
                    <span class="material-symbols-outlined opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-gold font-bold">arrow_forward</span>
                  </a>
                </div>
                
                <!-- Kolom 2 -->
                <div class="w-1/2 flex flex-col justify-start">
                  <a href="biro-keuangan.html" class="mega-menu-link-unit py-3 border-b border-gray-100 text-[14px] font-bold text-gray-700 hover:text-navy-deep flex items-center justify-between group/link transition-colors pr-2"
                     data-img="assets/images/hero/Gedung-DPR.jpg" data-icon="account_balance_wallet" data-title="Biro Keuangan" data-desc="Perencanaan, pelaksanaan, penatausahaan, dan pelaporan keuangan Setjen DPR RI.">
                    <span>Biro Keuangan</span>
                    <span class="material-symbols-outlined opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-gold font-bold">arrow_forward</span>
                  </a>
                  <a href="biro-bangunan.html" class="mega-menu-link-unit py-3 border-b border-gray-100 text-[14px] font-bold text-gray-700 hover:text-navy-deep flex items-center justify-between group/link transition-colors pr-2"
                     data-img="assets/images/hero/Gedung-DPR.jpg" data-icon="domain" data-title="Biro Bangunan & Wisma" data-desc="Pengelolaan sarana dan prasarana fisik, gedung parlemen, serta wisma.">
                    <span>Biro Bangunan & Wisma</span>
                    <span class="material-symbols-outlined opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-gold font-bold">arrow_forward</span>
                  </a>
                  <a href="biro-umum.html" class="mega-menu-link-unit py-3 border-b border-gray-100 text-[14px] font-bold text-gray-700 hover:text-navy-deep flex items-center justify-between group/link transition-colors pr-2"
                     data-img="assets/images/hero/Gedung-DPR.jpg" data-icon="inventory_2" data-title="Biro Umum" data-desc="Penyelenggaraan urusan perlengkapan, persuratan, kendaraan, dan keamanan.">
                    <span>Biro Umum</span>
                    <span class="material-symbols-outlined opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-gold font-bold">arrow_forward</span>
                  </a>
                </div>
              </div>
              
              <!-- Bottom Link -->
              <div class="w-full pt-4 mt-6">
                <a href="unit-kerja.html" class="py-2 text-sm font-bold text-navy-deep hover:text-gold flex items-center gap-1 transition-colors justify-start">
                  Lihat Semua Unit Kerja <span class="material-symbols-outlined text-[16px]">east</span>
                </a>
              </div>
            </div>
            
            <!-- Right Side Feature Image -->
            <div class="w-[30%] py-8 pl-8 pr-8 border-l border-gray-100">
              <div class="w-full flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
                <div class="w-full h-40 overflow-hidden relative bg-navy-deep">
                  <img id="mega-img-unit" src="assets/images/hero/Gedung-DPR.jpg" alt="Unit Kerja" class="w-full h-full object-cover transition-opacity duration-300">
                </div>
                <div class="w-full bg-navy-deep text-white p-6">
                  <h3 class="font-caps font-bold text-lg mb-2 flex items-center gap-2">
                    <span id="mega-icon-unit" class="material-symbols-outlined">corporate_fare</span> <span id="mega-title-unit">Unit Kerja Deputi</span>
                  </h3>
                  <p id="mega-desc-unit" class="text-sm text-white/80 line-clamp-3 leading-relaxed">
                    Membawahi 6 (enam) Biro yang bersinergi dalam mendukung operasional Setjen DPR RI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Layanan Dropdown (Mega Menu) -->
      <div class="h-full flex items-center group">
        <button onclick="window.location.href='layanan.html'" class="nav-link h-full flex items-center gap-1 hover:text-gold transition-colors duration-300 cursor-pointer">
          Layanan <span class="material-symbols-outlined text-[16px] transition-transform duration-300 group-hover:rotate-180">expand_more</span>
        </button>
        
        <div class="fixed left-0 top-[80px] w-full bg-white shadow-2xl opacity-0 -translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-40 border-t-[3px] border-gold text-txt">
          <div class="max-w-[1200px] mx-auto w-full flex bg-white">
            <!-- Judul Bagian Kiri -->
            <div class="w-[20%] py-10 pr-6 relative flex flex-col justify-start">
              <h2 class="font-heading text-3xl md:text-4xl font-bold text-navy-deep leading-tight">Layanan <br>Deputi</h2>
              <div class="absolute -bottom-10 -left-10 w-48 h-48 batik-pattern opacity-5 pointer-events-none"></div>
            </div>
            
            <!-- Middle Side Links (Split into 2 Columns) -->
            <div class="w-[50%] py-8 px-8 border-l border-gray-100 flex flex-col justify-between">
              <div class="flex gap-8 w-full">
                <!-- Bagian Internal -->
                <div class="w-1/2 flex flex-col justify-start">
                  <div class="text-xs font-bold text-gold tracking-widest uppercase mb-2">Layanan Internal</div>
                  <a href="layanan-hris.html" class="mega-menu-link-layanan py-3 border-b border-gray-100 text-[14px] font-bold text-gray-700 hover:text-navy-deep flex items-center justify-between group/link transition-colors pr-2"
                     data-img="assets/images/hero/Gedung-DPR.jpg" data-icon="badge" data-title="Sistem Informasi Kepegawaian" data-desc="Portal layanan terpadu kepegawaian khusus bagi ASN di lingkungan Sekretariat Jenderal DPR RI.">
                    <span>Sistem Informasi (HRIS)</span>
                    <span class="material-symbols-outlined opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-gold font-bold">arrow_forward</span>
                  </a>
                  <a href="layanan-tnde.html" class="mega-menu-link-layanan py-3 border-b border-gray-100 text-[14px] font-bold text-gray-700 hover:text-navy-deep flex items-center justify-between group/link transition-colors pr-2"
                     data-img="https://images.unsplash.com/photo-1577415124268-bfc11c138612?auto=format&fit=crop&q=80" data-icon="description" data-title="Tata Naskah Dinas Elektronik" data-desc="Sistem pengelolaan administrasi surat-menyurat dan dokumen resmi secara elektronik.">
                    <span>Tata Naskah Dinas (TNDE)</span>
                    <span class="material-symbols-outlined opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-gold font-bold">arrow_forward</span>
                  </a>
                  <a href="layanan-cuti.html" class="mega-menu-link-layanan py-3 border-b border-gray-100 text-[14px] font-bold text-gray-700 hover:text-navy-deep flex items-center justify-between group/link transition-colors pr-2"
                     data-img="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" data-icon="flight_takeoff" data-title="Pengajuan Cuti & Perjalanan Dinas" data-desc="Layanan pengajuan dan persetujuan cuti serta perjalanan dinas pegawai secara online.">
                    <span>Cuti & Perjalanan Dinas</span>
                    <span class="material-symbols-outlined opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-gold font-bold">arrow_forward</span>
                  </a>
                  <a href="layanan-gaji.html" class="mega-menu-link-layanan py-3 border-b border-gray-100 text-[14px] font-bold text-gray-700 hover:text-navy-deep flex items-center justify-between group/link transition-colors pr-2"
                     data-img="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80" data-icon="payments" data-title="Layanan Gaji dan Tunjangan" data-desc="Informasi dan layanan terkait pencairan gaji, tunjangan, dan honorarium pegawai.">
                    <span>Gaji dan Tunjangan</span>
                    <span class="material-symbols-outlined opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-gold font-bold">arrow_forward</span>
                  </a>
                </div>
                
                <!-- Eksternal -->
                <div class="w-1/2 flex flex-col justify-start">
                  <div class="text-xs font-bold text-gold tracking-widest uppercase mb-2">Layanan Eksternal</div>
                  <a href="layanan-dumas.html" class="mega-menu-link-layanan py-3 border-b border-gray-100 text-[14px] font-bold text-gray-700 hover:text-navy-deep flex items-center justify-between group/link transition-colors pr-2"
                     data-img="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" data-icon="forum" data-title="Pengaduan Masyarakat (Dumas)" data-desc="Kanal pelaporan dan aspirasi terbuka untuk masyarakat umum yang dikelola secara profesional.">
                    <span>Pengaduan Masyarakat</span>
                    <span class="material-symbols-outlined opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-gold font-bold">arrow_forward</span>
                  </a>
                  <a href="layanan-ppid.html" class="mega-menu-link-layanan py-3 border-b border-gray-100 text-[14px] font-bold text-gray-700 hover:text-navy-deep flex items-center justify-between group/link transition-colors pr-2"
                     data-img="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" data-icon="info" data-title="Permohonan Informasi (PPID)" data-desc="Layanan permohonan informasi publik sesuai dengan undang-undang keterbukaan informasi.">
                    <span>Permohonan Info (PPID)</span>
                    <span class="material-symbols-outlined opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-gold font-bold">arrow_forward</span>
                  </a>
                  <a href="layanan-helpdesk.html" class="mega-menu-link-layanan py-3 border-b border-gray-100 text-[14px] font-bold text-gray-700 hover:text-navy-deep flex items-center justify-between group/link transition-colors pr-2"
                     data-img="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80" data-icon="headset_mic" data-title="Helpdesk Parlemen" data-desc="Pusat bantuan teknis dan layanan tanya jawab seputar kegiatan keparlemenan.">
                    <span>Helpdesk Parlemen</span>
                    <span class="material-symbols-outlined opacity-0 -translate-x-4 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-gold font-bold">arrow_forward</span>
                  </a>
                </div>
              </div>
              
              <!-- Bottom Link -->
              <div class="w-full pt-4 mt-6">
                <a href="layanan.html" class="py-2 text-sm font-bold text-navy-deep hover:text-gold flex items-center gap-1 transition-colors justify-start">
                  Lihat Semua Layanan <span class="material-symbols-outlined text-[16px]">east</span>
                </a>
              </div>
            </div>
            
            <!-- Right Side Feature Image -->
            <div class="w-[30%] py-8 pl-8 pr-8 border-l border-gray-100">
              <div class="w-full flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
                <div class="w-full h-40 overflow-hidden relative bg-navy-deep">
                  <img id="mega-img-layanan" src="assets/images/hero/Gedung-DPR.jpg" alt="Layanan" class="w-full h-full object-cover transition-opacity duration-300">
                </div>
                <div class="w-full bg-navy-deep text-white p-6">
                  <h3 class="font-caps font-bold text-lg mb-2 flex items-center gap-2">
                    <span id="mega-icon-layanan" class="material-symbols-outlined">support_agent</span> <span id="mega-title-layanan">Layanan Prima</span>
                  </h3>
                  <p id="mega-desc-layanan" class="text-sm text-white/80 line-clamp-3 leading-relaxed">
                    Akses berbagai layanan terpadu yang dirancang untuk memberikan kemudahan, transparansi, dan responsivitas terbaik.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="publikasi.html" class="nav-link hover:text-gold transition-colors duration-300">Publikasi</a>
      <a href="galeri.html" class="nav-link hover:text-gold transition-colors duration-300">Galeri</a>
      <a href="kontak.html" class="nav-link hover:text-gold transition-colors duration-300">Kontak</a>
    </nav>

    <div class="flex items-center gap-2 md:gap-4 font-caps text-xs md:text-sm">
      <button id="search-btn" aria-label="Search" class="text-white hover:text-gold transition-colors"><span class="material-symbols-outlined">search</span></button>
      <div id="lang-btn" class="flex items-center gap-1 md:gap-2 bg-white/10 px-2 md:px-3 py-1 md:py-1.5 rounded-full cursor-pointer hover:bg-white/20 transition-colors relative overflow-hidden group">
        <span id="lang-id" class="text-white font-bold transition-colors duration-300 relative z-10">ID</span>
        <span class="text-white/30 relative z-10">|</span>
        <span id="lang-en" class="text-white/50 font-bold transition-colors duration-300 relative z-10">EN</span>
      </div>
      <button id="mobile-menu-btn" class="lg:hidden text-white hover:text-gold transition-colors"><span class="material-symbols-outlined text-3xl">menu</span></button>
    </div>
  </div>
  
  <!-- Menu Layar Kecil -->
  <div id="mobile-menu" class="fixed left-0 top-[80px] w-full h-[calc(100vh-80px)] bg-navy-deep/95 backdrop-blur-md z-40 opacity-0 pointer-events-none -translate-y-4 transition-all duration-300 ease-in-out lg:hidden pb-6">
    <div class="flex flex-col h-full overflow-y-auto px-6 gap-6 font-caps text-lg pt-6 pb-10">
      <a href="index.html" class="text-white hover:text-gold flex items-center gap-3 border-b border-white/10 pb-4">
         <img src="assets/images/icon-dpr.png" alt="Beranda" class="h-8 w-auto object-contain">
         Beranda
      </a>
      
      <!-- Daftar Lipat Profil -->
      <div class="flex flex-col border-b border-white/10 pb-4">
        <button class="mobile-dropdown-btn flex items-center justify-between text-white hover:text-gold w-full text-left" aria-expanded="false">
          <span>Profil</span> <span class="material-symbols-outlined transition-transform duration-300">expand_more</span>
        </button>
        <div class="mobile-dropdown-content flex flex-col gap-4 pl-4 overflow-hidden max-h-0 transition-all duration-300 opacity-0 mt-0 text-base normal-case tracking-wide">
          <a href="profil.html" class="text-white/80 hover:text-gold pt-3">Tentang Deputi Administrasi</a>
          <a href="visi-misi.html" class="text-white/80 hover:text-gold">Visi dan Misi</a>
        </div>
      </div>
      
      <!-- Unit Kerja Accordion -->
      <div class="flex flex-col border-b border-white/10 pb-4">
        <button class="mobile-dropdown-btn flex items-center justify-between text-white hover:text-gold w-full text-left" aria-expanded="false">
          <span>Unit Kerja</span> <span class="material-symbols-outlined transition-transform duration-300">expand_more</span>
        </button>
        <div class="mobile-dropdown-content flex flex-col gap-4 pl-4 overflow-hidden max-h-0 transition-all duration-300 opacity-0 mt-0 text-base normal-case tracking-wide">
          <a href="biro-hukum.html" class="text-white/80 hover:text-gold pt-3">Biro Hukum & Pengaduan</a>
          <a href="biro-sdm.html" class="text-white/80 hover:text-gold">Biro SDM Aparatur</a>
          <a href="biro-perencanaan.html" class="text-white/80 hover:text-gold">Biro Perencanaan & Organisasi</a>
          <a href="biro-keuangan.html" class="text-white/80 hover:text-gold">Biro Keuangan</a>
          <a href="biro-bangunan.html" class="text-white/80 hover:text-gold">Biro Bangunan & Wisma</a>
          <a href="biro-umum.html" class="text-white/80 hover:text-gold">Biro Umum</a>
          <a href="unit-kerja.html" class="text-gold mt-2 font-bold flex items-center gap-1">Lihat Semua <span class="material-symbols-outlined text-sm">east</span></a>
        </div>
      </div>
      
      <!-- Layanan Accordion -->
      <div class="flex flex-col border-b border-white/10 pb-4">
        <button class="mobile-dropdown-btn flex items-center justify-between text-white hover:text-gold w-full text-left" aria-expanded="false">
          <span>Layanan</span> <span class="material-symbols-outlined transition-transform duration-300">expand_more</span>
        </button>
        <div class="mobile-dropdown-content flex flex-col gap-4 pl-4 overflow-hidden max-h-0 transition-all duration-300 opacity-0 mt-0 text-base normal-case tracking-wide">
          <div class="text-gold text-xs font-caps tracking-widest pt-3">Layanan Internal</div>
          <a href="layanan-hris.html" class="text-white/80 hover:text-gold">Sistem Informasi (HRIS)</a>
          <a href="layanan-tnde.html" class="text-white/80 hover:text-gold">Tata Naskah Dinas (TNDE)</a>
          <a href="layanan-cuti.html" class="text-white/80 hover:text-gold">Cuti & Perjalanan Dinas</a>
          <a href="layanan-gaji.html" class="text-white/80 hover:text-gold">Gaji dan Tunjangan</a>
          
          <div class="text-gold text-xs font-caps tracking-widest mt-2">Layanan Eksternal</div>
          <a href="layanan-dumas.html" class="text-white/80 hover:text-gold">Pengaduan Masyarakat (Dumas)</a>
          <a href="layanan-ppid.html" class="text-white/80 hover:text-gold">Permohonan Info (PPID)</a>
          <a href="layanan-helpdesk.html" class="text-white/80 hover:text-gold">Helpdesk Parlemen</a>
          
          <a href="layanan.html" class="text-gold mt-2 font-bold flex items-center gap-1">Lihat Semua <span class="material-symbols-outlined text-sm">east</span></a>
        </div>
      </div>
      
      <a href="publikasi.html" class="text-white hover:text-gold pt-2">Publikasi</a>
      <a href="galeri.html" class="text-white hover:text-gold">Galeri</a>
      <a href="kontak.html" class="text-white hover:text-gold pb-6">Kontak</a>
    </div>
  </div>

  <!-- Search Overlay / Popup -->
  <div id="search-overlay" class="fixed left-0 top-[80px] w-full bg-white shadow-2xl z-40 transform -translate-y-2 opacity-0 pointer-events-none transition-all duration-300 border-t-[3px] border-gold flex flex-col items-center justify-center py-10 md:py-16">
    <button id="close-search" class="absolute top-4 right-4 md:top-8 md:right-8 text-navy-deep/50 hover:text-gold transition-colors">
      <span class="material-symbols-outlined text-3xl md:text-4xl">close</span>
    </button>
    <div class="w-full max-w-3xl px-6" id="search-container">
      <h2 class="text-gold font-caps tracking-widest text-xs md:text-sm mb-4 text-center">PENCARIAN</h2>
      <div class="relative">
        <input type="text" placeholder="Apa yang ingin Anda cari?" class="w-full bg-transparent border-b-2 border-navy-deep/20 text-navy-deep text-2xl md:text-4xl lg:text-5xl font-heading py-3 md:py-4 focus:outline-none focus:border-gold placeholder-navy-deep/20 transition-colors">
        <button class="absolute right-0 top-1/2 -translate-y-1/2 text-navy-deep hover:text-gold transition-colors">
          <span class="material-symbols-outlined text-3xl md:text-4xl">search</span>
        </button>
      </div>
      <div class="mt-6 md:mt-8 flex flex-wrap gap-2 md:gap-3 justify-center text-xs md:text-sm font-caps">
        <span class="text-navy-deep/50">Sering dicari:</span>
        <a href="#" class="text-navy-deep hover:text-gold transition-colors">Profil Deputi</a>
        <a href="#" class="text-navy-deep hover:text-gold transition-colors">Berita Terkini</a>
        <a href="#" class="text-navy-deep hover:text-gold transition-colors">Layanan HRIS</a>
        <a href="#" class="text-navy-deep hover:text-gold transition-colors">Kontak</a>
      </div>
    </div>
  </div>
</header>
`;

const footerHTML = `
<footer class="bg-navy-dark text-white font-sans w-full relative overflow-hidden h-auto md:h-[360px] flex flex-col pt-10 md:pt-0">
  <div class="absolute inset-0 batik-pattern opacity-5 pointer-events-none mix-blend-overlay"></div>
  <div class="max-w-[1200px] mx-auto px-6 flex-grow flex items-center relative z-10 w-full py-10 md:py-0">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
      
      <!-- Logo & Description -->
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <img src="assets/images/logo-setjen.png" alt="Logo SETJEN DPR RI" class="h-12 w-auto object-contain shrink-0">
          <div class="flex flex-col">
            <span class="font-heading text-lg leading-tight font-semibold">SETJEN DPR RI</span>
            <span class="text-gold font-caps text-xs tracking-wider uppercase">Deputi Bidang Administrasi</span>
          </div>
        </div>
        <p class="text-white/70 text-sm leading-relaxed mt-2">
          Unit kerja pendukung Sekretariat Jenderal DPR RI dalam mewujudkan tata kelola administrasi yang profesional, transparan, dan akuntabel.
        </p>
      </div>

      <!-- Navigasi -->
      <div class="flex flex-col gap-4">
        <h4 class="font-heading text-base font-semibold uppercase tracking-wider text-gold">Navigasi Cepat</h4>
        <ul class="grid grid-cols-2 gap-x-4 gap-y-3 mt-2">
          <li><a href="index.html" class="text-white/70 hover:text-white transition-colors text-sm">Beranda</a></li>
          <li><a href="profil.html" class="text-white/70 hover:text-white transition-colors text-sm">Profil</a></li>
          <li><a href="unit-kerja.html" class="text-white/70 hover:text-white transition-colors text-sm">Unit Kerja</a></li>
          <li><a href="layanan.html" class="text-white/70 hover:text-white transition-colors text-sm">Layanan</a></li>
          <li><a href="galeri.html" class="text-white/70 hover:text-white transition-colors text-sm">Galeri</a></li>
          <li><a href="kontak.html" class="text-white/70 hover:text-white transition-colors text-sm">Kontak</a></li>
        </ul>
      </div>

      <!-- Kontak -->
      <div class="flex flex-col gap-4">
        <h4 class="font-heading text-base font-semibold uppercase tracking-wider text-gold">Kontak Kami</h4>
        <ul class="space-y-4 text-white/70 text-sm mt-2">
          <li class="flex items-start gap-3">
            <span class="material-symbols-outlined text-gold text-[20px]">location_on</span>
            <span>Kompleks Parlemen Senayan,<br>Jakarta Pusat</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="material-symbols-outlined text-gold text-[20px]">mail</span>
            <a href="mailto:deputi.admin@dpr.go.id" class="hover:text-white">deputi.admin@dpr.go.id</a>
          </li>
          <li class="flex items-center gap-3">
            <span class="material-symbols-outlined text-gold text-[20px]">call</span>
            <span>(021) 5715xxx</span>
          </li>
        </ul>
      </div>

      <!-- Social Media -->
      <div class="flex flex-col gap-4">
        <h4 class="font-heading text-base font-semibold uppercase tracking-wider text-gold">Ikuti Kami</h4>
        <div class="flex gap-3 mt-2">
          <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all duration-300">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all duration-300">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.015 3.015 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
          </a>
          <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all duration-300">
             <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold hover:text-navy-dark transition-all duration-300">
             <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>

    </div>
  </div>
  
  <div class="h-[60px] border-t border-white/10 flex items-center justify-center relative z-10 w-full">
    <p class="text-white/50 text-xs font-sans tracking-wide">© 2026 Deputi Bidang Administrasi SETJEN DPR RI</p>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  // Memasukkan komponen
  const navContainer = document.getElementById('navbar-container');
  if (navContainer) {
    navContainer.innerHTML = navbarHTML;
    
    // Logika interaksi dinamis menu
    const megaLinks = navContainer.querySelectorAll('.mega-menu-link');
    const megaImg = document.getElementById('mega-img');
    const megaIcon = document.getElementById('mega-icon');
    const megaTitle = document.getElementById('mega-title');
    const megaDesc = document.getElementById('mega-desc');

    if (megaLinks.length > 0 && megaImg) {
      megaLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
          const newImg = this.getAttribute('data-img');
          // Efek memudar
          megaImg.style.opacity = '0.5';
          setTimeout(() => {
             megaImg.src = newImg;
             megaImg.style.opacity = '1';
          }, 150);
          megaIcon.textContent = this.getAttribute('data-icon');
          megaTitle.textContent = this.getAttribute('data-title');
          megaDesc.textContent = this.getAttribute('data-desc');
        });
      });
    }

    // Logika interaksi dinamis menu layanan
    const megaLinksLayanan = navContainer.querySelectorAll('.mega-menu-link-layanan');
    const megaImgLayanan = document.getElementById('mega-img-layanan');
    const megaIconLayanan = document.getElementById('mega-icon-layanan');
    const megaTitleLayanan = document.getElementById('mega-title-layanan');
    const megaDescLayanan = document.getElementById('mega-desc-layanan');

    if (megaLinksLayanan.length > 0 && megaImgLayanan) {
      megaLinksLayanan.forEach(link => {
        link.addEventListener('mouseenter', function() {
          const newImg = this.getAttribute('data-img');
          // Efek memudar
          megaImgLayanan.style.opacity = '0.5';
          setTimeout(() => {
             megaImgLayanan.src = newImg;
             megaImgLayanan.style.opacity = '1';
          }, 150);
          megaIconLayanan.textContent = this.getAttribute('data-icon');
          megaTitleLayanan.textContent = this.getAttribute('data-title');
          megaDescLayanan.textContent = this.getAttribute('data-desc');
        });
      });
    }
    // Logika interaksi dinamis menu unit kerja
    const megaLinksUnit = navContainer.querySelectorAll('.mega-menu-link-unit');
    const megaImgUnit = document.getElementById('mega-img-unit');
    const megaIconUnit = document.getElementById('mega-icon-unit');
    const megaTitleUnit = document.getElementById('mega-title-unit');
    const megaDescUnit = document.getElementById('mega-desc-unit');

    if (megaLinksUnit.length > 0 && megaImgUnit) {
      megaLinksUnit.forEach(link => {
        link.addEventListener('mouseenter', function() {
          const newImg = this.getAttribute('data-img');
          // Efek memudar
          megaImgUnit.style.opacity = '0.5';
          setTimeout(() => {
             megaImgUnit.src = newImg;
             megaImgUnit.style.opacity = '1';
          }, 150);
          megaIconUnit.textContent = this.getAttribute('data-icon');
          megaTitleUnit.textContent = this.getAttribute('data-title');
          megaDescUnit.textContent = this.getAttribute('data-desc');
        });
      });
    }
  }
  
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) footerContainer.innerHTML = footerHTML;

  // Logika tampilan
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    if(link.getAttribute('href') === currentPath) {
      link.classList.add('text-gold');
      if (!link.classList.contains('flex')) {
         link.classList.add('border-b-2', 'border-gold', 'pb-1');
      }
    }
  });

  // Logika Tampilan Pencarian
  const searchBtn = document.getElementById('search-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const closeSearch = document.getElementById('close-search');
  const searchContainer = document.getElementById('search-container');

  if (searchBtn && searchOverlay && closeSearch) {
    searchBtn.addEventListener('click', () => {
      searchOverlay.classList.remove('opacity-0', '-translate-y-2', 'pointer-events-none');
      searchOverlay.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
    });

    closeSearch.addEventListener('click', () => {
      searchOverlay.classList.add('opacity-0', '-translate-y-2', 'pointer-events-none');
      searchOverlay.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
    });
  }

  // Logika tampilan
  const langBtn = document.getElementById('lang-btn');
  const langId = document.getElementById('lang-id');
  const langEn = document.getElementById('lang-en');
  let currentLang = 'ID';

  if (langBtn && langId && langEn) {
    langBtn.addEventListener('click', () => {
      if (currentLang === 'ID') {
        langId.classList.replace('text-white', 'text-white/50');
        langEn.classList.replace('text-white/50', 'text-white');
        currentLang = 'EN';
      } else {
        langId.classList.replace('text-white/50', 'text-white');
        langEn.classList.replace('text-white', 'text-white/50');
        currentLang = 'ID';
      }
    });
  }

  // Logika menu perangkat kecil
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('opacity-0');
      mobileMenu.classList.toggle('pointer-events-none');
      mobileMenu.classList.toggle('-translate-y-4');
      mobileMenu.classList.toggle('translate-y-0');
      
      const icon = mobileBtn.querySelector('span');
      if(mobileMenu.classList.contains('opacity-0')) {
        icon.textContent = 'menu';
      } else {
        icon.textContent = 'close';
      }
    });
  }

  // Logika tampilan
  const mobileDropdowns = document.querySelectorAll('.mobile-dropdown-btn');
  mobileDropdowns.forEach(btn => {
    btn.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const icon = this.querySelector('.material-symbols-outlined');
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      // Close all others
      mobileDropdowns.forEach(otherBtn => {
        if(otherBtn !== this) {
          otherBtn.setAttribute('aria-expanded', 'false');
          otherBtn.nextElementSibling.style.maxHeight = null;
          otherBtn.nextElementSibling.classList.remove('opacity-100', 'mt-3');
          otherBtn.querySelector('.material-symbols-outlined').style.transform = 'rotate(0deg)';
        }
      });

      if (!isExpanded) {
        this.setAttribute('aria-expanded', 'true');
        content.classList.add('opacity-100', 'mt-3');
        content.style.maxHeight = content.scrollHeight + "px";
        icon.style.transform = 'rotate(180deg)';
      } else {
        this.setAttribute('aria-expanded', 'false');
        content.style.maxHeight = null;
        content.classList.remove('opacity-100', 'mt-3');
        icon.style.transform = 'rotate(0deg)';
      }
    });
  });

  // Animation for counters
  const counters = document.querySelectorAll('.counter-value');
  if (counters.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-target'));
          animateValue(entry.target, 0, target, 2000);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(c => observer.observe(c));
  }
  // Logika tampilan
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  if (filterBtns.length > 0 && galleryItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active styling from all buttons
        filterBtns.forEach(b => {
          b.classList.remove('bg-navy-deep', 'text-white', 'active');
          b.classList.add('text-navy-deep');
        });
        
        // Penyesuaian kode
        btn.classList.add('bg-navy-deep', 'text-white', 'active');
        btn.classList.remove('text-navy-deep');
        
        const filterValue = btn.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
          // Logika tampilan
          item.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
          
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 10);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
});

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    
    const current = Math.floor(progress * (end - start) + start);
    obj.innerHTML = current + (obj.getAttribute('data-suffix') || '');
    
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}
