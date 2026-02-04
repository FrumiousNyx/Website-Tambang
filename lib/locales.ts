export const locales = {
  id: {
    // Header & Navigation
    nav: {
      home: "Beranda",
      company: "Perusahaan",
      products: "Produk",
      projects: "Proyek",
      facilities: "Fasilitas",
      news: "Berita",
      contact: "Kontak",
      download: "Unduhan",
      dealerPortal: "Portal Dealer",
      contactUs: "Hubungi Kami",
    },
    companyLinks: [
      { title: "Profil Perusahaan", href: "/perusahaan/profil", description: "Tentang PT Semen Nusantara Indonesia" },
      { title: "Sejarah", href: "/perusahaan/sejarah", description: "Perjalanan perusahaan sejak 1985" },
      { title: "Manajemen", href: "/perusahaan/manajemen", description: "Tim kepemimpinan perusahaan" },
    ],
    productLinks: [
      { title: "OPC (Ordinary Portland Cement)", href: "/produk/opc", description: "Semen Portland tipe I untuk konstruksi umum" },
      { title: "PCC (Portland Composite Cement)", href: "/produk/pcc", description: "Semen komposit ramah lingkungan" },
    ],
    
    // Hero Section
    hero: {
      badge: "Mitra Strategis Proyek Nasional Sejak 1985",
      headline: "Mitra Strategis Infrastruktur Nasional",
      subheadline: "Mendukung pembangunan BUMN, Kementerian, dan proyek strategis nasional",
      description: "PT Semen Nusantara adalah mitra terpercaya dalam pembangunan infrastruktur strategis Indonesia. Dengan kapasitas produksi 10 juta ton per tahun, kami mendukung proyek-proyek besar seperti jalan tol, pelabuhan, bendungan, dan infrastruktur vital lainnya.",
      ctaPrimary: "Ajukan Penawaran",
      ctaSecondary: "Lihat Referensi Proyek",
      stats: [
        { value: "99%", label: "Ketepatan Waktu Pengiriman" },
        { value: "20+", label: "Tahun Keunggulan" },
        { value: "10M", label: "Ton Kapasitas Tahunan" },
        { value: "500+", label: "Jaringan Distributor" },
      ],
    },

    // About Section
    about: {
      label: "Tentang Kami",
      title: "Fondasi Kokoh untuk Pembangunan Berkelanjutan",
      description1: "PT Semen Nusantara didirikan pada tahun 1985 dengan visi menjadi produsen semen terkemuka yang berkontribusi pada pembangunan infrastruktur nasional. Dengan lokasi strategis di kawasan tambang batu kapur terbaik, kami menghasilkan semen berkualitas tinggi yang telah digunakan dalam ribuan proyek besar di seluruh Indonesia.",
      description2: "Komitmen kami terhadap kualitas, keberlanjutan, dan pelayanan pelanggan telah menjadikan kami pilihan utama bagi kontraktor, developer, dan proyek pemerintah.",
      floatingCard: {
        number: "#1",
        title: "Produsen Semen Terkemuka",
        subtitle: "di kawasan Indonesia Timur",
      },
      values: [
        { title: "Kualitas Terjamin", description: "Standar produksi SNI dan ISO 9001 untuk kualitas semen terbaik" },
        { title: "Berpengalaman", description: "Lebih dari 38 tahun melayani industri konstruksi Indonesia" },
        { title: "Ramah Lingkungan", description: "Teknologi produksi berkelanjutan dan pengelolaan limbah terpadu" },
        { title: "Mitra Terpercaya", description: "Bermitra dengan ribuan kontraktor dan distributor nasional" },
      ],
    },

    // Products Section
    products: {
      label: "Produk Kami",
      title: "Solusi Semen Berkualitas Premium",
      description: "Pilihan produk semen terbaik untuk setiap kebutuhan konstruksi Anda, dari bangunan rumah tinggal hingga infrastruktur berskala besar.",
      items: [
        {
          name: "OPC (Ordinary Portland Cement)",
          shortName: "OPC",
          description: "Semen Portland tipe I untuk konstruksi umum dengan kekuatan tekan tinggi dan waktu pengerasan cepat.",
          features: ["Kekuatan tekan 28 hari: min. 42.5 MPa", "Ideal untuk beton struktural", "Cocok untuk cuaca tropis Indonesia"],
          badge: "Terlaris",
        },
        {
          name: "PCC (Portland Composite Cement)",
          shortName: "PCC",
          description: "Semen komposit ramah lingkungan dengan panas hidrasi lebih rendah, cocok untuk berbagai aplikasi.",
          features: ["Kekuatan tekan 28 hari: min. 40 MPa", "Emisi CO2 lebih rendah 15-20%", "Workability yang lebih baik"],
          badge: "Ramah Lingkungan",
        },
      ],
      viewDetails: "Lihat Detail",
    },

    // Statistics Section
    statistics: {
      label: "Mengapa Memilih Kami",
      title: "Reputasi yang Dibangun dari Hasil Nyata",
      items: [
        { value: "99%", label: "Ketepatan Waktu Pengiriman", description: "Komitmen logistik terintegrasi" },
        { value: "20+", label: "Tahun Keunggulan", description: "Pengalaman industri konstruksi" },
        { value: "10M", label: "Ton Kapasitas Tahunan", description: "Kapasitas produksi pabrik modern" },
        { value: "500+", label: "Jaringan Distributor", description: "Tersebar di seluruh Indonesia" },
      ],
    },

    // Contact Section
    contact: {
      label: "Hubungi Kami",
      title: "Siap Menjadi Mitra Proyek Anda",
      description: "Tim kami siap memberikan solusi terbaik untuk kebutuhan semen Anda. Hubungi kami untuk konsultasi, penawaran harga, atau informasi produk.",
      info: {
        phone: { title: "Telepon", details: ["+62 21 5555 1234", "+62 21 5555 5678"] },
        email: { title: "Email", details: ["info@semennusantara.co.id", "sales@semennusantara.co.id"] },
        address: { title: "Kantor Pusat", details: ["Jl. Industri Berat No. 100", "Jakarta Utara 14230"] },
        hours: { title: "Jam Operasional", details: ["Senin - Jumat: 08:00 - 17:00", "Sabtu: 08:00 - 12:00"] },
      },
    },

    // Lead Form
    leadForm: {
      title: "Formulir Permintaan Penawaran B2B",
      subtitle: "Isi formulir di bawah dan tim kami akan menghubungi Anda dalam waktu 24 jam kerja.",
      fields: {
        name: "Nama Lengkap",
        namePlaceholder: "Masukkan nama lengkap Anda",
        company: "Nama Perusahaan",
        companyPlaceholder: "PT. Nama Perusahaan",
        email: "Email Bisnis",
        emailPlaceholder: "email@perusahaan.com",
        phone: "Nomor Telepon",
        phonePlaceholder: "+62 xxx xxxx xxxx",
        projectType: "Jenis Proyek",
        projectTypePlaceholder: "Pilih jenis proyek",
        projectTypeOptions: [
          { value: "infrastructure", label: "Infrastruktur (Jalan Tol, Jembatan)" },
          { value: "commercial", label: "Komersial (Gedung Perkantoran, Mall)" },
          { value: "residential", label: "Residensial (Perumahan, Apartemen)" },
          { value: "industrial", label: "Industrial (Pabrik, Gudang)" },
          { value: "government", label: "Proyek Pemerintah" },
          { value: "other", label: "Lainnya" },
        ],
        projectValue: "Estimasi Nilai Proyek",
        projectValuePlaceholder: "Pilih rentang nilai",
        projectValueOptions: [
          { value: "<1M", label: "< Rp 1 Miliar" },
          { value: "1M-10M", label: "Rp 1 - 10 Miliar" },
          { value: "10M-50M", label: "Rp 10 - 50 Miliar" },
          { value: "50M-100M", label: "Rp 50 - 100 Miliar" },
          { value: ">100M", label: "> Rp 100 Miliar" },
        ],
        projectLocation: "Lokasi Proyek",
        projectLocationPlaceholder: "Kota/Provinsi lokasi proyek",
        timeline: "Timeline Proyek",
        timelinePlaceholder: "Pilih timeline",
        timelineOptions: [
          { value: "immediate", label: "Segera (< 1 bulan)" },
          { value: "1-3months", label: "1 - 3 Bulan" },
          { value: "3-6months", label: "3 - 6 Bulan" },
          { value: "6-12months", label: "6 - 12 Bulan" },
          { value: ">12months", label: "> 12 Bulan" },
        ],
        message: "Detail Kebutuhan",
        messagePlaceholder: "Jelaskan kebutuhan proyek Anda secara detail...",
        requestProposal: "Saya ingin menerima Proposal Teknis",
        requestProposalDescription: "Tim teknis kami akan menyiapkan dokumen spesifikasi dan penawaran khusus untuk proyek Anda.",
      },
      submit: "Kirim Permintaan Penawaran",
      submitting: "Mengirim...",
      success: "Terima kasih! Permintaan Anda telah kami terima.",
      successDescription: "Tim kami akan menghubungi Anda dalam waktu 24 jam kerja.",
      error: "Terjadi kesalahan. Silakan coba lagi.",
    },

    // Download Center
    download: {
      title: "Pusat Unduhan",
      subtitle: "Akses dokumen teknis, brosur produk, dan profil perusahaan",
      gateTitle: "Akses Dokumen Premium",
      gateDescription: "Masukkan data Anda untuk mengakses seluruh dokumen teknis kami",
      categories: {
        brochure: "Brosur Produk",
        technical: "Datasheet Teknis",
        company: "Profil Perusahaan",
      },
      documents: [
        { name: "Brosur OPC - Ordinary Portland Cement", category: "brochure", size: "2.4 MB" },
        { name: "Brosur PCC - Portland Composite Cement", category: "brochure", size: "2.1 MB" },
        { name: "Technical Datasheet - OPC Type I", category: "technical", size: "1.8 MB" },
        { name: "Technical Datasheet - PCC", category: "technical", size: "1.6 MB" },
        { name: "Company Profile PT Semen Nusantara", category: "company", size: "5.2 MB" },
        { name: "Sustainability Report 2024", category: "company", size: "3.8 MB" },
      ],
      unlockButton: "Buka Akses Dokumen",
      downloadButton: "Unduh",
    },

    // Projects
    projects: {
      label: "Referensi Proyek",
      title: "Portofolio Proyek Unggulan",
      subtitle: "Kami bangga telah berkontribusi dalam berbagai proyek infrastruktur strategis nasional",
      viewDetails: "Lihat Detail",
      backToProjects: "Kembali ke Proyek",
      projectDetails: {
        client: "Klien",
        year: "Tahun",
        location: "Lokasi",
        volume: "Volume Semen",
        scope: "Lingkup Proyek",
        challenge: "Tantangan",
        solution: "Solusi Kami",
      },
    },

    // Dealer Portal
    dealer: {
      title: "Portal Dealer",
      subtitle: "Akses eksklusif untuk mitra distributor resmi",
      loginTitle: "Masuk ke Akun Dealer",
      loginDescription: "Masukkan kredensial Anda untuk mengakses dashboard dealer",
      email: "Email Dealer",
      emailPlaceholder: "dealer@perusahaan.com",
      password: "Password",
      passwordPlaceholder: "Masukkan password",
      rememberMe: "Ingat saya",
      forgotPassword: "Lupa password?",
      login: "Masuk",
      noAccount: "Belum terdaftar sebagai dealer?",
      registerLink: "Hubungi kami",
      features: [
        { title: "Pemesanan Online", description: "Proses order cepat dan mudah 24/7" },
        { title: "Harga Khusus", description: "Akses harga grosir dan diskon volume" },
        { title: "Lacak Pengiriman", description: "Monitor status pengiriman real-time" },
        { title: "Riwayat Transaksi", description: "Akses laporan dan faktur lengkap" },
      ],
    },

    // Factory Dashboard
    dashboard: {
      label: "Dashboard Produksi",
      title: "Metrik Pabrik Real-time",
      subtitle: "Transparansi operasional dengan integrasi sistem digital",
      productionTrend: "Tren Produksi & Penjualan",
      outputComparison: "Perbandingan Output",
      loading: "Memuat data...",
      metrics: {
        dailyProduction: "Produksi Harian",
        efficiency: "Efisiensi Produksi",
        inventory: "Stok Tersedia",
        shipments: "Pengiriman Aktif",
      },
      legend: {
        production: "Produksi",
        sales: "Penjualan",
      },
    },

    // Footer
    footer: {
      description: "Produsen semen terkemuka Indonesia, membangun fondasi yang kuat untuk masa depan bangsa sejak 1985.",
      headquarters: "Kantor Pusat - Jember",
      representative: "Kantor Perwakilan - Jakarta",
      followUs: "Ikuti Kami",
      newsletter: "Newsletter",
      newsletterDesc: "Dapatkan update terbaru dari kami",
      send: "Kirim",
      copyright: "Hak Cipta Dilindungi.",
      sections: {
        company: "Perusahaan",
        products: "Produk",
        services: "Layanan",
        information: "Informasi",
      },
      links: {
        companyProfile: "Profil Perusahaan",
        history: "Sejarah",
        management: "Manajemen",
        visionMission: "Visi & Misi",
        career: "Karir",
        opc: "OPC (Ordinary Portland Cement)",
        pcc: "PCC (Portland Composite Cement)",
        specialCement: "Semen Khusus",
        technicalSpecs: "Spesifikasi Teknis",
        productionFacility: "Fasilitas Produksi",
        deliveryLogistics: "Pengiriman & Logistik",
        technicalConsultation: "Konsultasi Teknis",
        distributor: "Distributor",
        newsActivities: "Berita & Kegiatan",
        csr: "CSR",
        sustainability: "Keberlanjutan",
        investorRelations: "Hubungan Investor",
        privacyPolicy: "Kebijakan Privasi",
        termsConditions: "Syarat & Ketentuan",
        sitemap: "Sitemap",
      },
    },

    // Common
    common: {
      learnMore: "Pelajari Lebih Lanjut",
      viewAll: "Lihat Semua",
      close: "Tutup",
      submit: "Kirim",
      cancel: "Batal",
      loading: "Memuat...",
      error: "Terjadi kesalahan",
      success: "Berhasil",
      required: "Wajib diisi",
    },
  },

  en: {
    // Header & Navigation
    nav: {
      home: "Home",
      company: "Company",
      products: "Products",
      projects: "Projects",
      facilities: "Facilities",
      news: "News",
      contact: "Contact",
      download: "Downloads",
      dealerPortal: "Dealer Portal",
      contactUs: "Contact Us",
    },
    companyLinks: [
      { title: "Company Profile", href: "/perusahaan/profil", description: "About PT Semen Nusantara Indonesia" },
      { title: "History", href: "/perusahaan/sejarah", description: "Our journey since 1985" },
      { title: "Management", href: "/perusahaan/manajemen", description: "Company leadership team" },
    ],
    productLinks: [
      { title: "OPC (Ordinary Portland Cement)", href: "/produk/opc", description: "Type I Portland cement for general construction" },
      { title: "PCC (Portland Composite Cement)", href: "/produk/pcc", description: "Eco-friendly composite cement" },
    ],

    // Hero Section
    hero: {
      badge: "Strategic Partner for National Projects Since 1985",
      headline: "National Strategic Infrastructure Partner",
      subheadline: "Supporting BUMN, Ministries, and strategic national projects",
      description: "PT Semen Nusantara is a trusted partner in Indonesia's strategic infrastructure development. With an annual production capacity of 10 million tons, we support major projects such as toll roads, ports, dams, and other vital infrastructure.",
      ctaPrimary: "Request Quotation",
      ctaSecondary: "View Project References",
      stats: [
        { value: "99%", label: "On-time Delivery" },
        { value: "20+", label: "Years of Excellence" },
        { value: "10M", label: "Tons Annual Capacity" },
        { value: "500+", label: "Distributor Network" },
      ],
    },

    // About Section
    about: {
      label: "About Us",
      title: "Solid Foundation for Sustainable Development",
      description1: "PT Semen Nusantara was established in 1985 with a vision to become a leading cement producer contributing to national infrastructure development. Strategically located in the best limestone mining area, we produce high-quality cement used in thousands of major projects across Indonesia.",
      description2: "Our commitment to quality, sustainability, and customer service has made us the preferred choice for contractors, developers, and government projects.",
      floatingCard: {
        number: "#1",
        title: "Leading Cement Producer",
        subtitle: "in Eastern Indonesia region",
      },
      values: [
        { title: "Quality Assured", description: "SNI and ISO 9001 production standards for the best cement quality" },
        { title: "Experienced", description: "More than 38 years serving Indonesia's construction industry" },
        { title: "Environmentally Friendly", description: "Sustainable production technology and integrated waste management" },
        { title: "Trusted Partner", description: "Partnering with thousands of national contractors and distributors" },
      ],
    },

    // Products Section
    products: {
      label: "Our Products",
      title: "Premium Quality Cement Solutions",
      description: "The best cement products for all your construction needs, from residential buildings to large-scale infrastructure.",
      items: [
        {
          name: "OPC (Ordinary Portland Cement)",
          shortName: "OPC",
          description: "Type I Portland cement for general construction with high compressive strength and fast setting time.",
          features: ["28-day compressive strength: min. 42.5 MPa", "Ideal for structural concrete", "Suitable for Indonesia's tropical climate"],
          badge: "Best Seller",
        },
        {
          name: "PCC (Portland Composite Cement)",
          shortName: "PCC",
          description: "Eco-friendly composite cement with lower heat of hydration, suitable for various applications.",
          features: ["28-day compressive strength: min. 40 MPa", "15-20% lower CO2 emissions", "Better workability"],
          badge: "Eco-Friendly",
        },
      ],
      viewDetails: "View Details",
    },

    // Statistics Section
    statistics: {
      label: "Why Choose Us",
      title: "Reputation Built on Real Results",
      items: [
        { value: "99%", label: "On-time Delivery", description: "Integrated logistics commitment" },
        { value: "20+", label: "Years of Excellence", description: "Construction industry experience" },
        { value: "10M", label: "Tons Annual Capacity", description: "Modern factory production capacity" },
        { value: "500+", label: "Distributor Network", description: "Spread across Indonesia" },
      ],
    },

    // Contact Section
    contact: {
      label: "Contact Us",
      title: "Ready to Partner on Your Project",
      description: "Our team is ready to provide the best solutions for your cement needs. Contact us for consultation, price quotation, or product information.",
      info: {
        phone: { title: "Phone", details: ["+62 21 5555 1234", "+62 21 5555 5678"] },
        email: { title: "Email", details: ["info@semennusantara.co.id", "sales@semennusantara.co.id"] },
        address: { title: "Head Office", details: ["Jl. Industri Berat No. 100", "North Jakarta 14230"] },
        hours: { title: "Operating Hours", details: ["Monday - Friday: 08:00 - 17:00", "Saturday: 08:00 - 12:00"] },
      },
    },

    // Lead Form
    leadForm: {
      title: "B2B Quotation Request Form",
      subtitle: "Fill out the form below and our team will contact you within 24 business hours.",
      fields: {
        name: "Full Name",
        namePlaceholder: "Enter your full name",
        company: "Company Name",
        companyPlaceholder: "PT. Company Name",
        email: "Business Email",
        emailPlaceholder: "email@company.com",
        phone: "Phone Number",
        phonePlaceholder: "+62 xxx xxxx xxxx",
        projectType: "Project Type",
        projectTypePlaceholder: "Select project type",
        projectTypeOptions: [
          { value: "infrastructure", label: "Infrastructure (Toll Roads, Bridges)" },
          { value: "commercial", label: "Commercial (Office Buildings, Malls)" },
          { value: "residential", label: "Residential (Housing, Apartments)" },
          { value: "industrial", label: "Industrial (Factories, Warehouses)" },
          { value: "government", label: "Government Projects" },
          { value: "other", label: "Other" },
        ],
        projectValue: "Estimated Project Value",
        projectValuePlaceholder: "Select value range",
        projectValueOptions: [
          { value: "<1M", label: "< IDR 1 Billion" },
          { value: "1M-10M", label: "IDR 1 - 10 Billion" },
          { value: "10M-50M", label: "IDR 10 - 50 Billion" },
          { value: "50M-100M", label: "IDR 50 - 100 Billion" },
          { value: ">100M", label: "> IDR 100 Billion" },
        ],
        projectLocation: "Project Location",
        projectLocationPlaceholder: "City/Province of project location",
        timeline: "Project Timeline",
        timelinePlaceholder: "Select timeline",
        timelineOptions: [
          { value: "immediate", label: "Immediate (< 1 month)" },
          { value: "1-3months", label: "1 - 3 Months" },
          { value: "3-6months", label: "3 - 6 Months" },
          { value: "6-12months", label: "6 - 12 Months" },
          { value: ">12months", label: "> 12 Months" },
        ],
        message: "Requirements Detail",
        messagePlaceholder: "Describe your project requirements in detail...",
        requestProposal: "I would like to receive a Technical Proposal",
        requestProposalDescription: "Our technical team will prepare specification documents and a customized quotation for your project.",
      },
      submit: "Submit Quotation Request",
      submitting: "Submitting...",
      success: "Thank you! Your request has been received.",
      successDescription: "Our team will contact you within 24 business hours.",
      error: "An error occurred. Please try again.",
    },

    // Download Center
    download: {
      title: "Download Center",
      subtitle: "Access technical documents, product brochures, and company profile",
      gateTitle: "Access Premium Documents",
      gateDescription: "Enter your details to access all our technical documents",
      categories: {
        brochure: "Product Brochures",
        technical: "Technical Datasheets",
        company: "Company Profile",
      },
      documents: [
        { name: "OPC Brochure - Ordinary Portland Cement", category: "brochure", size: "2.4 MB" },
        { name: "PCC Brochure - Portland Composite Cement", category: "brochure", size: "2.1 MB" },
        { name: "Technical Datasheet - OPC Type I", category: "technical", size: "1.8 MB" },
        { name: "Technical Datasheet - PCC", category: "technical", size: "1.6 MB" },
        { name: "Company Profile PT Semen Nusantara", category: "company", size: "5.2 MB" },
        { name: "Sustainability Report 2024", category: "company", size: "3.8 MB" },
      ],
      unlockButton: "Unlock Document Access",
      downloadButton: "Download",
    },

    // Projects
    projects: {
      label: "Project References",
      title: "Featured Project Portfolio",
      subtitle: "We are proud to have contributed to various strategic national infrastructure projects",
      viewDetails: "View Details",
      backToProjects: "Back to Projects",
      projectDetails: {
        client: "Client",
        year: "Year",
        location: "Location",
        volume: "Cement Volume",
        scope: "Project Scope",
        challenge: "Challenge",
        solution: "Our Solution",
      },
    },

    // Dealer Portal
    dealer: {
      title: "Dealer Portal",
      subtitle: "Exclusive access for authorized distributor partners",
      loginTitle: "Sign in to Dealer Account",
      loginDescription: "Enter your credentials to access the dealer dashboard",
      email: "Dealer Email",
      emailPlaceholder: "dealer@company.com",
      password: "Password",
      passwordPlaceholder: "Enter password",
      rememberMe: "Remember me",
      forgotPassword: "Forgot password?",
      login: "Sign In",
      noAccount: "Not registered as a dealer?",
      registerLink: "Contact us",
      features: [
        { title: "Online Ordering", description: "Fast and easy order processing 24/7" },
        { title: "Special Pricing", description: "Access wholesale prices and volume discounts" },
        { title: "Track Shipments", description: "Monitor delivery status in real-time" },
        { title: "Transaction History", description: "Access complete reports and invoices" },
      ],
    },

    // Factory Dashboard
    dashboard: {
      label: "Production Dashboard",
      title: "Real-time Factory Metrics",
      subtitle: "Operational transparency with digital system integration",
      productionTrend: "Production & Sales Trend",
      outputComparison: "Output Comparison",
      loading: "Loading data...",
      metrics: {
        dailyProduction: "Daily Production",
        efficiency: "Production Efficiency",
        inventory: "Available Stock",
        shipments: "Active Shipments",
      },
      legend: {
        production: "Production",
        sales: "Sales",
      },
    },

    // Footer
    footer: {
      description: "Indonesia's leading cement producer, building a strong foundation for the nation's future since 1985.",
      headquarters: "Head Office - Jember",
      representative: "Representative Office - Jakarta",
      followUs: "Follow Us",
      newsletter: "Newsletter",
      newsletterDesc: "Get the latest updates from us",
      send: "Send",
      copyright: "All Rights Reserved.",
      sections: {
        company: "Company",
        products: "Products",
        services: "Services",
        information: "Information",
      },
      links: {
        companyProfile: "Company Profile",
        history: "History",
        management: "Management",
        visionMission: "Vision & Mission",
        career: "Career",
        opc: "OPC (Ordinary Portland Cement)",
        pcc: "PCC (Portland Composite Cement)",
        specialCement: "Special Cement",
        technicalSpecs: "Technical Specifications",
        productionFacility: "Production Facility",
        deliveryLogistics: "Delivery & Logistics",
        technicalConsultation: "Technical Consultation",
        distributor: "Distributor",
        newsActivities: "News & Activities",
        csr: "CSR",
        sustainability: "Sustainability",
        investorRelations: "Investor Relations",
        privacyPolicy: "Privacy Policy",
        termsConditions: "Terms & Conditions",
        sitemap: "Sitemap",
      },
    },

    // Common
    common: {
      learnMore: "Learn More",
      viewAll: "View All",
      close: "Close",
      submit: "Submit",
      cancel: "Cancel",
      loading: "Loading...",
      error: "An error occurred",
      success: "Success",
      required: "Required",
    },
  },
} as const

export type Language = keyof typeof locales
export type Locale = typeof locales.id
