/* Nobilis RH — Internationalization (FR default / EN) */
let siteLang = localStorage.getItem('nobilis-lang') || 'fr';
const I18N_FR_CACHE = {};
const I18N_SECTIONS_FR = {};

const PROVINCE_EN = {
  'Alberta': 'Alberta',
  'Colombie-Britannique': 'British Columbia',
  'Île-du-Prince-Édouard': 'Prince Edward Island',
  'Manitoba': 'Manitoba',
  'Nouveau-Brunswick': 'New Brunswick',
  'Nouvelle-Écosse': 'Nova Scotia',
  'Nunavut': 'Nunavut',
  'Ontario': 'Ontario',
  'Québec': 'Quebec',
  'Saskatchewan': 'Saskatchewan',
  'Terre-Neuve-et-Labrador': 'Newfoundland and Labrador',
  'Territoires du Nord-Ouest': 'Northwest Territories',
  'Yukon': 'Yukon'
};

const I18N_EN = {
  /* Navigation */
  'nav.accueil': 'Home',
  'nav.services': 'Services',
  'nav.entreprises': 'Employers',
  'nav.candidats': 'Candidates',
  'nav.job': 'Job Search',
  'nav.contact': 'Contact',
  'nav.openMenu': 'Open menu',

  /* Footer */
  'footer.brandSub': 'Precision executive search and strategic recruitment in Quebec City.',
  'footer.navigation': 'Navigation',
  'footer.service': 'Services',
  'footer.entreprise': 'Employers',
  'footer.candidat': 'Candidates',
  'footer.privacy': 'Privacy Policy',
  'footer.bureau': 'Quebec City Office',
  'footer.bureauInfo': 'contact@nobilisrh.ca<br/>Quebec City, QC, Canada<br/>Confidential consultations by appointment',
  'footer.developed': 'Developed by <a href="https://github.com/abFiras" target="_blank" rel="noopener noreferrer">Firas Abdallah</a>',
  'footer.copyright': '(C) 2026 Nobilis RH — Precision recruitment firm in Quebec City.',
  'footer.excellence': 'EXCELLENCE',
  'footer.integrity': 'INTEGRITY',
  'footer.commitment': 'COMMITMENT',

  /* Accueil hero */
  'accueil.tag': '/ Recruitment firm',
  'accueil.heroTitle': 'Connecting talent.<br/>Powering businesses.',
  'accueil.heroText': 'Nobilis RH supports organizations in finding and selecting top talent. Through a personalized approach, we help our clients recruit qualified professionals and build high-performing teams. Our commitment is built on quality, rigour, and a deep understanding of each organization\'s needs.',
  'accueil.btnTalent': 'Find talent',
  'accueil.btnCv': 'Submit my résumé',

  /* CV form */
  'cv.infoTag': 'Submit your application',
  'cv.infoTitle': 'Join our talent network',
  'cv.infoText1': 'By submitting your résumé to Nobilis RH, you gain access to exclusive, discreet opportunities in your industry.',
  'cv.infoText2': 'We guarantee complete confidentiality throughout your search and treat every profile with the utmost care.',
  'cv.commitLabel': 'Our commitment',
  'cv.commitText': 'Absolute confidentiality · Response within 48 hours · Personalized support',
  'cv.formTitle': 'Submit your application',
  'cv.prenom': 'First name *',
  'cv.nom': 'Last name *',
  'cv.email': 'Email *',
  'cv.tel': 'Phone',
  'cv.secteur': 'Industry',
  'cv.secteurPlaceholder': 'e.g. Engineering, IT, Finance...',
  'cv.availability': 'Shift availability *',
  'cv.shiftDay': 'Day',
  'cv.shiftEvening': 'Evening',
  'cv.shiftNight': 'Night',
  'cv.shiftWeekend': 'Weekend',
  'cv.shiftAny': 'Any',
  'cv.shiftHint': 'Select the work shift that best suits you.',
  'cv.message': 'Message (optional)',
  'cv.messagePlaceholder': 'Briefly describe your profile...',
  'cv.file': 'Your résumé (optional — PDF, DOCX — max 5 MB)',
  'cv.fileHint': 'No résumé yet? You can still submit your application — an advisor will contact you.',
  'cv.consent': 'I agree that Nobilis RH may collect and use my résumé and personal information to support my career search, in accordance with its <a href="#confidentialite" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();">Privacy Policy</a>.',
  'cv.submit': 'Submit my application',
  'cv.sending': 'Sending…',
  'cv.success': '✓ Application submitted. We will contact you within 48 hours.',
  'cv.errorRequired': 'Please complete all required fields.',
  'cv.errorConsent': 'Please accept the Privacy Policy before submitting your application.',
  'cv.errorShift': 'Please select your shift availability.',
  'cv.errorUnavailable': 'The form is temporarily unavailable. Please try again later.',
  'cv.errorFileSize': 'The résumé must not exceed 5 MB.',

  /* Contact form */
  'con.heroTitle': 'The art of discretion',
  'con.heroText': 'Whether you are an executive seeking an exceptional profile or a senior leader in a confidential transition, our firm orchestrates your strategic meetings in the heart of Quebec City.',
  'con.infoTag': 'First conversation',
  'con.infoTitle': 'Start the dialogue',
  'con.infoText': 'Our consultations take place exclusively by individual appointment. We offer a highly secure, confidential environment to rigorously assess your long-term permanent recruitment needs.',
  'con.nom': 'Full name *',
  'con.nomPlaceholder': 'Jean Tremblay',
  'con.email': 'Professional email *',
  'con.emailPlaceholder': 'j.tremblay@company.ca',
  'con.tel': 'Direct phone',
  'con.telPlaceholder': '418-555-0199',
  'con.message': 'Your message (confidential) *',
  'con.messagePlaceholder': 'Briefly describe your needs or situation...',
  'con.submit': 'Submit request',
  'con.sending': 'Sending…',
  'con.success': '✓ Message sent. We will respond as soon as possible.',
  'con.errorRequired': 'Please complete all required fields.',
  'con.errorUnavailable': 'The form is temporarily unavailable. Please try again later.',

  /* Application modal form */
  'modal.apply': 'Apply',
  'modal.jobDesc': 'Job description',
  'modal.close': 'Close',
  'app.prenom': 'First name *',
  'app.nom': 'Last name *',
  'app.email': 'Email *',
  'app.tel': 'Phone',
  'app.lettre': 'Cover letter',
  'app.lettrePlaceholder': 'Why are you the ideal candidate?',
  'app.cv': 'Résumé (PDF, DOC, DOCX) *',
  'app.consent': 'I agree that Nobilis RH may collect and use my résumé and personal information to support my career search, in accordance with its <a href="#confidentialite" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation();">Privacy Policy</a>.',
  'app.submit': 'Apply',
  'app.sending': 'Sending…',
  'app.success': '✓ Application submitted successfully!',
  'app.errorRequired': 'Please complete all required fields.',
  'app.errorConsent': 'Please accept the Privacy Policy before submitting your application.',
  'app.errorCvRequired': 'Please attach your résumé.',
  'app.errorCvSize': 'The résumé must not exceed 10 MB.',
  'app.errorUploadUnavailable': 'Résumé upload is temporarily unavailable. Please try again later.',

  /* Job search */
  'job.heroTitle': 'Job Search',
  'job.heroText': 'Find opportunities based on your profile, a Canadian city, and the surrounding area.',
  'job.heroLabel': 'Job Search',
  'job.searchTitle': 'Job Search',
  'job.searchIntro': 'Enter a job title, select a Canadian city and a search radius to view nearby listings.',
  'job.poste': 'Job title',
  'job.postePlaceholder': 'Job title',
  'job.city': 'Canadian city',
  'job.allTypes': 'All types',
  'job.fullTime': 'Full-time',
  'job.partTime': 'Part-time',
  'job.permanent': 'Permanent',
  'job.perimeter': 'Search radius',
  'job.perimeter10': '10 km',
  'job.perimeter25': '25 km',
  'job.perimeter50': '50 km',
  'job.perimeter75': '75 km',
  'job.anywhere': 'Anywhere',
  'job.searchBtn': 'Search',
  'job.loading': 'Loading listings...',
  'job.calculating': 'Calculating distances...',
  'job.empty': 'No listings match your search.',
  'job.emptyLocal': 'Listings cannot load from a local file. Use npx vercel dev with a .env.local file.',
  'job.emptyConfig': 'Job listings configuration is missing. Add SHEET_CSV_URL to your Vercel environment variables.',
  'job.emptySheet': 'Unable to load listings from Google Sheets. Refresh (Ctrl+F5) or try again in a few moments.',
  'job.prev': 'Previous',
  'job.next': 'Next',
  'job.paginationInfo': 'Showing {start}–{end} of {total} listing{plural}',
  'job.apply': 'Apply',
  'job.selectCityAlert': 'Please select a Canadian city to use the radius filter.',

  /* Dynamic UI strings */
  'ui.sending': 'Sending…',
  'ui.apply': 'Apply',
  'ui.submitCv': 'Submit my application',
  'ui.submitContact': 'Submit request',
  'ui.errorRequired': 'Please complete all required fields.',
  'ui.errorConsent': 'Please accept the Privacy Policy before submitting your application.',
  'ui.errorShift': 'Please select your shift availability.',
  'ui.errorFormUnavailable': 'The form is temporarily unavailable. Please try again later.',
  'ui.errorCvRequired': 'Please attach your résumé.',
  'ui.errorCvSize5': 'The résumé must not exceed 5 MB.',
  'ui.errorCvSize10': 'The résumé must not exceed 10 MB.',
  'ui.errorUploadUnavailable': 'Résumé upload is temporarily unavailable. Please try again later.',
  'ui.errorSelectCity': 'Please select a Canadian city to use the radius filter.',
  'ui.errorGeneric': 'An error occurred while sending. Please try again.',
  'ui.errorNotConfigured': 'The form is not yet configured. Please try again later.',
  'ui.errorStorage': 'Résumé storage is not configured. Contact Nobilis RH.',
  'ui.errorSupabase': 'Unable to save the résumé. Check the Supabase configuration.',
  'ui.errorFormSend': 'Form submission error. Please try again in a few moments.',
  'ui.errorNetwork': 'Connection failed. Check your network and try again.',

  /* SEO */
  'seo.accueil.title': 'Nobilis RH — Recruitment and executive search in Quebec, Canada',
  'seo.accueil.description': 'Nobilis RH supports employers and candidates across Quebec and Canada: executive search, strategic recruitment, and placement of exceptional talent.',
  'seo.services.title': 'Recruitment services | Nobilis RH — Quebec, Canada',
  'seo.services.description': 'Permanent recruitment, executive search, and talent acquisition. Nobilis RH offers a rigorous methodology for organizations across Quebec and Canada.',
  'seo.entreprises.title': 'Recruitment for employers | Nobilis RH — Quebec, Canada',
  'seo.entreprises.description': 'Exclusive recruitment and executive search mandates for Quebec and Canadian organizations. Nobilis RH identifies top talent to support your growth.',
  'seo.candidats.title': 'Candidates and careers | Nobilis RH — Recruitment Quebec',
  'seo.candidats.description': 'Submit your résumé and access confidential opportunities in Quebec. Nobilis RH supports professionals in their job search across Canada.',
  'seo.job.title': 'Job search in Canada | Listings — Nobilis RH',
  'seo.job.description': 'Find job listings across Canada by city and radius. Nobilis RH — recruitment and staffing in Quebec and throughout Canada.',
  'seo.contact.title': 'Contact | Nobilis RH — Recruitment firm Quebec',
  'seo.contact.description': 'Contact Nobilis RH for a recruitment mandate or application. Quebec City office, confidential consultations across Canada.',
  'seo.confidentialite.title': 'Privacy Policy | Nobilis RH',
  'seo.confidentialite.description': 'Nobilis RH privacy policy regarding the collection and protection of personal information for candidates and clients.',

  /* Privacy hero */
  'privacy.title': 'Privacy Policy',
  'privacy.updated': 'Last updated: July 1, 2026'
};

const I18N_FR_STATIC = {
  'job.prev': 'Précédent',
  'job.next': 'Suivant',
  'job.paginationInfo': 'Affichage {start}–{end} sur {total} offre{plural}',
  'job.apply': 'Postuler',
  'job.selectCityAlert': 'Veuillez sélectionner une ville au Canada pour utiliser le filtre par périmètre.',
  'job.calculating': 'Calcul des distances...',
  'job.emptyLocal': 'Les offres ne peuvent pas se charger depuis un fichier local. Utilisez npx vercel dev avec un fichier .env.local.',
  'job.emptyConfig': 'Configuration des offres manquante. Ajoutez SHEET_CSV_URL dans les variables d\'environnement Vercel.',
  'job.emptySheet': 'Impossible de charger les offres depuis Google Sheets. Rafraîchissez (Ctrl+F5) ou réessayez dans quelques instants.',
  'ui.sending': 'Envoi en cours…',
  'ui.apply': 'Postuler',
  'ui.submitCv': 'Envoyer ma candidature',
  'ui.submitContact': 'Soumettre la demande',
  'ui.errorRequired': 'Veuillez remplir les champs obligatoires.',
  'ui.errorConsent': 'Veuillez accepter la Politique de confidentialité avant de déposer votre candidature.',
  'ui.errorShift': 'Veuillez sélectionner votre disponibilité horaire.',
  'ui.errorFormUnavailable': 'Formulaire temporairement indisponible. Réessayez plus tard.',
  'ui.errorCvRequired': 'Veuillez joindre votre CV.',
  'ui.errorCvSize5': 'Le CV ne doit pas dépasser 5 Mo.',
  'ui.errorCvSize10': 'Le CV ne doit pas dépasser 10 Mo.',
  'ui.errorUploadUnavailable': 'Téléversement de CV temporairement indisponible. Réessayez plus tard.',
  'ui.errorGeneric': 'Erreur lors de l\'envoi. Veuillez réessayer.',
  'ui.errorNotConfigured': 'Le formulaire n\'est pas encore configuré. Réessayez plus tard.',
  'ui.errorStorage': 'Espace de stockage CV non configuré. Contactez Nobilis RH.',
  'ui.errorSupabase': 'Impossible d\'enregistrer le CV. Vérifiez la configuration Supabase.',
  'ui.errorFormSend': 'Erreur d\'envoi du formulaire. Réessayez dans quelques instants.',
  'ui.errorNetwork': 'Connexion impossible. Vérifiez votre réseau et réessayez.'
};

function formatJobPagination(start, end, total) {
  const plural = total > 1 ? 's' : '';
  return t('job.paginationInfo')
    .replace('{start}', start)
    .replace('{end}', end)
    .replace('{total}', total)
    .replace('{plural}', plural);
}

const I18N_SECTIONS_EN = {
  'accueil-engagement': `<div class="tag-label" style="color:#9ca3af;font-size:.7rem;">Our methodology</div>
    <h2>Our commitment to excellence</h2>
    <p>At Nobilis RH, we believe every hire is a strategic investment. Our approach is built on understanding our clients' needs, rigorous candidate selection, and personalized support throughout the process.</p>
    <div class="engagement-cards">
      <div class="eng-card">
        <div class="eng-card-num">01 / Expertise</div>
        <div class="eng-card-title">Targeted recruitment</div>
        <p class="eng-card-text">We identify top talent through a proactive approach and an extensive network of qualified candidates.</p>
      </div>
      <div class="eng-card">
        <div class="eng-card-num">02 / Selection</div>
        <div class="eng-card-title">Rigorous evaluation</div>
        <p class="eng-card-text">Each candidate is assessed on skills, experience, and fit with the organization's culture.</p>
      </div>
      <div class="eng-card">
        <div class="eng-card-num">03 / Support</div>
        <div class="eng-card-title">Lasting partnership</div>
        <p class="eng-card-text">We support our clients and candidates in building durable, high-performing professional relationships.</p>
      </div>
      <div class="eng-card">
        <div class="eng-card-num">04 / Guarantee</div>
        <div class="eng-card-title">Assured satisfaction</div>
        <p class="eng-card-text">We offer a replacement guarantee to ensure the long-term success of every placement.</p>
      </div>
    </div>`,

  'accueil-performance': `<div class="acc-perf-left">
      <img src="resources/photo d'acceuil.png" alt="Performance commitment" style="width:100%;height:100%;object-fit:cover;border-radius:8px;"/>
    </div>
    <div class="acc-perf-right">
      <div class="acc-perf-right tag-label-sm" style="font-size:.7rem;color:#9ca3af;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.8rem;">Success guarantee</div>
      <h2 style="font-family:'Playfair Display',serif;font-size:clamp(1.8rem,2.5vw,2.4rem);font-weight:700;color:var(--navy);line-height:1.15;">A commitment to<br/>performance</h2>
      <p style="font-size:.85rem;color:var(--textgrey);line-height:1.75;margin-top:.8rem;max-width:400px;">We do not rely on generic databases. Our team immerses itself in your organization to understand your real challenges. This rigour allows us to offer an exclusive replacement guarantee on every permanent hire.</p>
      <div class="acc-star-wrap">
        <div class="star-medallion">
          <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path fill="#c9a84c" d="M60 6 L73.5 44.5 H114.5 L81.5 67.5 L93.5 108 L60 86 L26.5 108 L38.5 67.5 L5.5 44.5 H46.5 Z"/>
          </svg>
          <div class="star-medallion-inner">
            <span class="star-num">28</span>
            <span class="star-unit">days</span>
          </div>
        </div>
        <p class="star-caption">Average time to present a final shortlist of qualified candidates.</p>
      </div>
    </div>`,

  'accueil-cta': `<div class="tag-label" style="justify-content:center;color:rgba(255,255,255,.4);font-size:.7rem;">• Confidential consultation</div>
    <h2 style="font-family:'Playfair Display',serif;font-size:clamp(2rem,3.5vw,3rem);font-weight:700;color:#fff;margin-top:.5rem;">Secure your next leaders</h2>
    <p style="font-size:.88rem;color:rgba(255,255,255,.55);max-width:580px;margin:.8rem auto 0;line-height:1.7;">Let us discuss your permanent recruitment needs in complete discretion. Our partners support you with the rigour that defines our firm.</p>
    <div style="margin-top:2rem;">
      <button class="btn btn-outline-gold" onclick="showPage('contact')">Speak with a partner</button>
    </div>`,

  'services-hero': `<video autoplay muted loop playsinline class="bg-img" poster="resources/couverture.png">
      <source data-video="construction" type="video/mp4"/>
    </video>
    <div class="overlay" style="background:rgba(8,16,26,.55);"></div>
    <div class="hero-content" style="padding:0 4rem;">
      <div class="tag-label" style="color:var(--gold);">SELECTION FIRM</div>
      <h1 style="font-family:'Playfair Display',serif;font-size:clamp(2.5rem,5vw,4.2rem);font-weight:700;color:#fff;line-height:1.05;">The art of precision.</h1>
      <p style="font-size:.9rem;color:rgba(255,255,255,.7);max-width:620px;margin-top:1rem;line-height:1.75;">For Quebec organizations that cannot afford a hiring mistake, we design bespoke searches combining scientific rigour and absolute discretion.</p>
    </div>`,

  'services-talents': `<div class="svc-talents-left">
      <div class="tag-label" style="color:#888;font-size:.7rem;">→ Direct approach</div>
      <h2 style="font-family:'Playfair Display',serif;font-size:clamp(1.8rem,2.5vw,2.4rem);font-weight:700;color:var(--navy);line-height:1.1;">Exceptional talent<br/>is not always<br/>looking for work.</h2>
      <p style="font-size:.85rem;color:var(--textgrey);line-height:1.75;margin-top:1rem;">At Nobilis RH, we confidentially target and approach the most qualified professionals in their field. Through our network and proactive search methodology, we identify strategic candidates who bring real value to your organization.</p>
      <div style="margin-top:1.5rem;"><button class="btn btn-outline-gold" onclick="showPage('job')">Start a search</button></div>
    </div>
    <div class="svc-talents-right">
      <img src="resources/formulaire trouver talent/photo 1.jpg" alt="Exceptional talent"/>
    </div>`,

  'services-rigueur': `<div style="max-width:800px;margin:0 auto;">
      <div class="tag-label" style="justify-content:center;color:#9ca3af;font-size:.7rem;">Our methodology</div>
      <h2>The <em>rigour</em> of selection.</h2>
      <p>Our direct approach relies on a meticulous analysis of the local market. We leave nothing to chance in securing the indispensable talent that will drive your company's growth.</p>
      <hr/>
    </div>
    <div class="rigueur-cards">
      <div class="rig-card">
        <div class="rig-card-tag">01 / Mapping</div>
        <h3>Precision targeting</h3>
        <p>We methodically map target companies in the Quebec market to identify the most accomplished and respected professionals in your sector.</p>
      </div>
      <div class="rig-card">
        <div class="rig-card-tag">02 / Evaluation</div>
        <h3>Cultural alignment</h3>
        <p>Each candidate undergoes a rigorous assessment of professional achievements, leadership style, and fit with your organizational culture.</p>
      </div>
      <div class="rig-card">
        <div class="rig-card-tag">03 / Negotiation</div>
        <h3>Absolute discretion</h3>
        <p>We act as a trusted intermediary, protecting your company's identity and the confidentiality of discussions until the final negotiation phase.</p>
      </div>
    </div>`,

  'services-science': `<div class="tag-label" style="color:#9ca3af;font-size:.7rem;">SELECTION METHODOLOGY</div>
    <h2 style="font-family:'Playfair Display',serif;font-size:clamp(1.8rem,2.5vw,2.4rem);font-weight:700;color:var(--navy);">Scientific rigour</h2>
    <p>Our evaluation process eliminates uncertainty. We analyze technical fit and cultural alignment with mathematical precision.</p>
    <div class="science-grid">
      <div class="science-left">
        <div class="sci-item">
          <h4>Multidimensional evaluation</h4>
          <p>Beyond obvious technical skills, we measure behavioural alignment and long-term compatibility with your company values.</p>
        </div>
        <div class="sci-item">
          <h4>Capital preservation</h4>
          <p>By eliminating casting errors at the pre-selection stage, we protect your investments and stabilize your key teams.</p>
        </div>
      </div>
      <div class="science-right">
        <video autoplay muted loop playsinline poster="resources/notre démarche 03.png">
          <source data-video="lab" type="video/mp4"/>
        </video>
      </div>
    </div>`,

  'services-approches': `<div style="max-width:900px;margin:0 auto;">
      <div class="tag-label" style="color:var(--gold);font-size:.7rem;">OUR EXPERTISE</div>
      <h2 style="font-family:'Playfair Display',serif;font-size:clamp(1.8rem,2.5vw,2.4rem);font-weight:700;color:var(--gold);">Two exclusive approaches</h2>
      <p style="font-size:.82rem;color:rgba(255,255,255,.45);margin:.5rem 0 2rem;line-height:1.7;">Every mandate receives an in-depth methodology. We select our approach based on the role and desired level of advancement.</p>
      <div class="approches-cards">
        <div class="app-card">
          <h3>Recruitment and staffing</h3>
          <p>We identify and select qualified professionals who will contribute sustainably to your organization's growth and success.</p>
        </div>
        <div class="app-card">
          <h3>Talent acquisition</h3>
          <p>Advanced recruitment for rare technical, scientific, and engineering experts essential to your growth, under a strict confidentiality agreement.</p>
        </div>
      </div>
    </div>`,

  'services-faq': `<div class="svc-faq-grid" style="max-width:900px;margin:0 auto;">
      <div class="faq-left">
        <div style="font-size:.7rem;color:#9ca3af;letter-spacing:.1em;text-transform:uppercase;margin-bottom:.8rem;">Frequently asked questions</div>
        <h3>Precise answers</h3>
        <p>We operate exclusively on exclusive mandates to guarantee an unmatched level of service and discretion in the Quebec market.</p>
      </div>
      <div class="faq-right">
        <div class="faq-item">
          <h4>How do you guarantee discretion?</h4>
          <p>All initial approaches are anonymized. We reveal our clients' identity only after a strict confidentiality agreement.</p>
        </div>
        <div class="faq-item">
          <h4>Which sectors do you cover?</h4>
          <p>We serve a wide range of sectors, including engineering, construction, healthcare, technology, scientific research, industry, and other professional and technical fields.</p>
        </div>
      </div>
    </div>`,

  'entreprises-hero': `<video autoplay muted loop playsinline class="bg-img" poster="resources/formulaire trouver talent/photo 1.jpg">
      <source data-video="buildoze" type="video/mp4"/>
    </video>
    <div class="overlay" style="background:rgba(8,16,26,.55);"></div>
    <div class="hero-content">
      <div class="tag-label">Exclusive mandates</div>
      <h1>Your success depends on the right talent.</h1>
      <p class="ent-hero-lead">At <strong style="color:#fff;">Nobilis RH</strong>, we understand that every hire is a pivotal decision for your organization's growth. That is why we go well beyond simply sourcing candidates. We take the time to understand your company, culture, objectives, and sector-specific challenges to identify talent that will truly contribute to your success.</p>
      <p>Through our rigorous approach and network of qualified professionals, we present carefully selected candidates evaluated on both skills and their ability to integrate into your work environment.</p>
      <p>Whether you are looking for a manager, a technical specialist, or a key professional to support your development, our team accompanies you at every step with discretion, efficiency, and professionalism.</p>
      <p class="ent-hero-closing">Your growth deserves the best talent. Nobilis RH is your trusted partner to attract and recruit them.</p>
      <div class="ent-hero-cta"><button class="btn btn-gold" onclick="goToEntDemarche()">Our Process</button></div>
    </div>`,

  'entreprises-recrutement': `<video autoplay muted loop playsinline class="bg-img" poster="resources/couverture.png">
      <source data-video="construction" type="video/mp4"/>
    </video>
    <div class="overlay" style="background:rgba(8,16,26,.62);"></div>
    <div class="hero-content" style="padding:3rem 4rem;max-width:760px;">
      <div class="tag-label" style="color:var(--gold);justify-content:flex-start;">■ Strategic partner</div>
      <h2 style="font-family:'Playfair Display',serif;font-size:clamp(2rem,4vw,3.2rem);font-weight:700;color:#fff;line-height:1.05;margin-top:.5rem;">Precision permanent recruitment.</h2>
      <p class="body-text">At Nobilis RH, we believe top talent is the engine of business success. Our mission is to help organizations attract, evaluate, and recruit exceptional professionals who create lasting value.</p>
      <p class="body-text" style="margin-top:.8rem;">Through our proven methodology, extensive candidate network, and proactive approach, we identify the most sought-after profiles in the market — including those not actively job searching. We support our clients at every stage to ensure strategic, sustainable hires aligned with business objectives.</p>
      <p class="body-text" style="margin-top:.8rem;">With Nobilis RH, you benefit from a trusted partner dedicated to your company's growth and the success of your teams.</p>
      <div style="margin-top:2rem;"><button class="btn btn-outline-gold" onclick="showPage('contact')">Submit a need</button></div>
    </div>`,

  'entreprises-engagements': `<div style="max-width:960px;margin:0 auto;">
      <div class="tag-label" style="color:#9ca3af;font-size:.7rem;">Rigour &amp; Trust</div>
      <h2 style="font-family:'Playfair Display',serif;font-size:clamp(1.8rem,2.5vw,2.4rem);font-weight:700;color:var(--navy);">Our <em>contractual commitments.</em></h2>
      <p>Every mandate entrusted to our firm benefits from a rigorous protocol ensuring the longevity of your hires.</p>
      <div class="eng-contract-cards">
        <div class="eng-c-card">
          <h3>Absolute discretion</h3>
          <p>We protect your employer brand and strategic projects from our very first conversations.</p>
        </div>
        <div class="eng-c-card">
          <h3>Response within 24 hours</h3>
          <p>A lead advisor contacts you to precisely qualify the technical skills and cultural alignment required.</p>
        </div>
        <div class="eng-c-card">
          <h3>Placement guarantee</h3>
          <p>Every permanent hire is covered by a contractual guarantee, ensuring a long-term growth partnership.</p>
        </div>
      </div>
    </div>`,

  'entreprises-logo': `<img class="logo-img" src="resources/logo/01.png" alt="Nobilis RH"/>
    <p>At Nobilis RH, every mandate begins with a deep understanding of your business reality. Our recruitment process is designed to identify qualified candidates who meet not only your job requirements, but also your organization's culture and objectives.</p>`,

  'entreprises-approche': `<div class="tag-label" style="justify-content:center;font-size:.7rem;color:#9ca3af;">OUR PROCESS</div>
    <h2 style="font-family:'Playfair Display',serif;font-size:clamp(1.8rem,2.5vw,2.4rem);font-weight:700;">Our approach, <em style="font-style:italic;color:var(--gold);">your success.</em></h2>
    <p>A comprehensive process to identify top talent<br/>and build high-performing, sustainable teams.</p>
    <div class="steps-row" style="margin-top:3rem;">
      <div class="step-item">
        <div class="step-circle"><span>01</span></div>
        <div class="step-dot"></div>
        <div class="step-title">Needs<br/>analysis</div>
        <div class="step-desc">We understand your company, objectives, and required skills.</div>
      </div>
      <div class="step-item">
        <div class="step-circle"><span>02</span></div>
        <div class="step-dot"></div>
        <div class="step-title">Targeted<br/>search</div>
        <div class="step-desc">We identify and approach top talent through our network and market expertise.</div>
      </div>
      <div class="step-item">
        <div class="step-circle"><span>03</span></div>
        <div class="step-dot"></div>
        <div class="step-title">Rigorous<br/>evaluation</div>
        <div class="step-desc">Each candidate is assessed on skills, experience, and integration potential.</div>
      </div>
      <div class="step-item">
        <div class="step-circle"><span>04</span></div>
        <div class="step-dot"></div>
        <div class="step-title">Successful<br/>hire</div>
        <div class="step-desc">We present the best profiles and support you through the final decision.</div>
      </div>
      <div class="step-item">
        <div class="step-circle"><span>05</span></div>
        <div class="step-dot"></div>
        <div class="step-title">Post-hire<br/>follow-up</div>
        <div class="step-desc">We remain by your side after the hire to ensure a successful, lasting integration.</div>
      </div>
    </div>
    <p class="tagline">More than recruitment, <em>a partnership for your growth.</em></p>`,

  'candidats-hero': `<video autoplay muted loop playsinline class="bg-img" poster="resources/formulaire de condidat/01.png">
      <source data-video="meeting" type="video/mp4"/>
    </video>
    <div class="overlay" style="background:rgba(8,16,26,.5);"></div>
    <div class="hero-content">
      <div class="tag-label" style="justify-content:center;color:rgba(255,255,255,.5);font-size:.7rem;">EXCLUSIVE PORTAL</div>
      <h1 style="font-family:'Playfair Display',serif;font-size:clamp(2.2rem,5vw,4rem);font-weight:700;color:#fff;line-height:1.05;">Your next strategic<br/>career move</h1>
      <p style="font-size:.9rem;color:rgba(255,255,255,.65);max-width:560px;margin:.8rem auto 0;line-height:1.7;">Access unpublished executive and critical-role mandates in Quebec City. We protect your search with absolute rigour.</p>
      <div style="margin-top:2rem;"><button class="btn btn-dark" onclick="document.getElementById('cv-form-section').scrollIntoView({behavior:'smooth'})">Submit your résumé</button></div>
    </div>`,

  'candidats-split': `<div class="cand-split-item">
      <h3>Total discretion</h3>
      <p>No contact with your current employer. Your information remains encrypted and is shared only with your explicit consent.</p>
    </div>
    <div class="cand-split-item">
      <h3>Hidden market</h3>
      <p>More than sixty percent of our executive and expert mandates are never publicly advertised.</p>
    </div>`,

  'candidats-alignement': `<video autoplay muted loop playsinline class="bg-img" poster="resources/formulaire de condidat/02.png">
      <source data-video="hand" type="video/mp4"/>
    </video>
    <div class="overlay" style="background:rgba(8,16,26,.65);"></div>
    <div class="hero-content" style="padding:3rem;max-width:900px;">
      <div class="tag-label" style="justify-content:center;color:rgba(255,255,255,.4);font-size:.7rem;">OUR COMMITMENT</div>
      <h2 style="font-family:'Playfair Display',serif;font-size:clamp(1.8rem,3vw,2.8rem);font-weight:700;color:#fff;">The art of alignment</h2>
      <div class="align-cards">
        <div class="align-card">
          <h3>Rigorous selection</h3>
          <p>We thoroughly analyze the culture of your future organization. This rigour ensures lasting integration and perfect strategic alignment.</p>
        </div>
        <div class="align-card">
          <h3>Personalized support</h3>
          <p>A dedicated advisor guides you at every stage of your career transition. We ensure smooth, highly personalized mediation.</p>
        </div>
        <div class="align-card">
          <h3>Elite network</h3>
          <p>Gain direct access to key decision-makers at Quebec's leading companies. We open doors often inaccessible to the public.</p>
        </div>
      </div>
    </div>`,

  'candidats-confier': `<img class="logo-img" src="resources/logo/01.png" alt="Nobilis RH"/>
    <div class="tag-label" style="justify-content:center;color:#9ca3af;font-size:.7rem;">SECURE SUBMISSION</div>
    <h2>Entrust us with your professional journey in complete security.</h2>
    <p>Our recruitment and executive search specialists evaluate your profile with rigour, professionalism, and discretion. We take the time to understand your experience, values, and strengths to represent you to top employers and open doors to strategic opportunities.</p>`,

  'candidats-demarche': `<div class="cand-demarche-bg">
      <video autoplay muted loop playsinline>
        <source data-video="hand" type="video/mp4"/>
      </video>
      <div class="rel">
        <div class="tag-label" style="justify-content:center;color:var(--gold);font-size:.7rem;">OUR PROCESS</div>
        <h2>OUR PROCESS WITH CANDIDATES</h2>
        <p style="font-size:.82rem;color:var(--textgrey);text-align:center;margin:.5rem auto 0;max-width:400px;line-height:1.6;">Human, personalized support<br/>at every stage of your professional journey.</p>
        <div class="cand-steps">
          <div class="cand-step">
            <div class="cand-step-num">01</div>
            <div class="cand-step-title">Listening<br/>and analysis</div>
            <div class="cand-step-dot"></div>
            <div class="cand-step-desc">We take the time to understand your background, skills, and aspirations.</div>
          </div>
          <div class="cand-step">
            <div class="cand-step-num">02</div>
            <div class="cand-step-title">Targeted<br/>opportunities</div>
            <div class="cand-step-dot"></div>
            <div class="cand-step-desc">We present mandates aligned with your goals and values.</div>
          </div>
          <div class="cand-step">
            <div class="cand-step-num">03</div>
            <div class="cand-step-title">Preparation<br/>and support</div>
            <div class="cand-step-dot"></div>
            <div class="cand-step-desc">We support and equip you to showcase your profile and strengths.</div>
          </div>
          <div class="cand-step">
            <div class="cand-step-num">04</div>
            <div class="cand-step-title">Presentation<br/>to our clients</div>
            <div class="cand-step-dot"></div>
            <div class="cand-step-desc">We represent you professionally to our clients and facilitate discussions.</div>
          </div>
          <div class="cand-step">
            <div class="cand-step-num">05</div>
            <div class="cand-step-title">Follow-up and<br/>integration</div>
            <div class="cand-step-dot"></div>
            <div class="cand-step-desc">We remain by your side even after you start to ensure a successful, lasting integration.</div>
          </div>
        </div>
      </div>
    </div>`,

  'candidats-cv-info': `<div class="tag-label" style="color:#9ca3af;font-size:.7rem;">Submit your application</div>
        <h3>Join our talent network</h3>
        <p>By submitting your résumé to Nobilis RH, you gain access to exclusive, discreet opportunities in your industry.</p>
        <p>We guarantee complete confidentiality throughout your search and treat every profile with the utmost care.</p>
        <div class="cand-cv-commit">
          <div class="cand-cv-commit-label">Our commitment</div>
          <p>Absolute confidentiality · Response within 48 hours · Personalized support</p>
        </div>`,

  'contact-hero': `<img class="bg-img" src="resources/formulaire de condidat/02.png" alt="Contact Nobilis RH — Recruitment firm in Quebec City"/>
    <div class="overlay" style="background:rgba(8,16,26,.58);"></div>
    <div class="hero-content" style="padding:2rem;">
      <h1 style="font-family:'Playfair Display',serif;font-size:clamp(2.5rem,5vw,4rem);font-weight:700;color:#fff;">The art of discretion</h1>
      <p style="font-size:.9rem;color:rgba(255,255,255,.65);max-width:640px;margin:.8rem auto 0;line-height:1.7;">Whether you are an executive seeking an exceptional profile or a senior leader in a confidential transition, our firm orchestrates your strategic meetings in the heart of Quebec City.</p>
    </div>`,

  'contact-form-info': `<div class="tag-label" style="color:var(--gold);font-size:.7rem;">First conversation</div>
        <h2>Start the dialogue</h2>
        <p>Our consultations take place exclusively by individual appointment. We offer a highly secure, confidential environment to rigorously assess your long-term permanent recruitment needs.</p>`,

  'contact-presence': `<div class="con-presence-inner">
      <div class="tag-label" style="color:var(--gold);font-size:.7rem;">Our firm</div>
      <h2>Presence in Quebec City</h2>
      <p>Located on prestigious Grande Allée, our physical office offers a neutral, discreet, and refined setting for your most sensitive interviews and strategic decisions.</p>
      <hr/>
      <div class="bureau-grid">
        <div class="bureau-card">
          <h3>Quebec City Office</h3>
          <p>Grande Allée Est, Quebec City, QC, Canada.<br/>Our premises are designed to ensure complete confidentiality during your visits.</p>
          <hr/>
          <p>For urgent or highly strategic requests, our direct line connects you immediately with one of our lead partners.</p>
        </div>
        <div class="bureau-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2727.0!2d-71.2281!3d46.8139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb895e7b0a3a0b3%3A0x7!2sGrande+All%C3%A9e+Est%2C+Qu%C3%A9bec%2C+QC!5e0!3m2!1sen!2sca!4v1"
            allowfullscreen="" loading="lazy">
          </iframe>
        </div>
      </div>
    </div>`,

  'job-hero': `<img class="bg-img" src="resources/parler à un conseiller/01.png" alt="Job search in Canada — Nobilis RH"/>
    <div class="overlay" style="background:rgba(8,16,26,.6);"></div>
    <div class="hero-content" style="padding:2rem;z-index:2;">
      <h1 style="font-family:'Playfair Display',serif;font-size:clamp(2.5rem,5vw,4rem);font-weight:700;color:#fff;">Job Search</h1>
      <p style="font-size:.88rem;color:rgba(255,255,255,.65);max-width:520px;margin:.6rem auto 0;">Find opportunities based on your profile, a Canadian city, and the surrounding area.</p>
    </div>
    <div class="job-hero-label" style="position:absolute;bottom:0;left:0;right:0;background:rgba(0,0,0,.3);padding:.6rem 2rem;">
      <span style="font-family:'Playfair Display',serif;font-weight:700;font-size:1rem;color:#fff;">Job Search</span>
    </div>`,

  'job-search-intro': `<h2>Job Search</h2>
    <p>Enter a job title, select a Canadian city and a search radius to view nearby listings.</p>`,

  'privacy-body': `<p class="privacy-intro">At Nobilis RH, protecting your personal information is central to our values and professional obligations. In the course of our recruitment, talent search, and staffing activities in Quebec, we collect and process highly confidential data.</p>
    <p class="privacy-intro">This Privacy Policy is intended to transparently inform you about how we collect, use, disclose, retain, and protect your personal information, in accordance with Quebec's Act respecting the protection of personal information in the private sector (Bill 25).</p>

    <h2>1. What personal information do we collect?</h2>
    <p>We collect only the information necessary to provide our recruitment and career support services. This includes, in particular:</p>
    <ul>
      <li><strong>Identification information:</strong> Your first and last name, home address, email address, and phone number.</li>
      <li><strong>Professional data (your résumé):</strong> Your employment history, academic background, skills, professional certifications, affiliations, and distinctions.</li>
      <li><strong>Career preferences:</strong> Your salary expectations, desired role type, availability, and geographic or remote work preferences.</li>
      <li><strong>Assessments and follow-ups:</strong> Our interview notes, skills test results (where applicable), and comments from professional reference checks (always conducted with your prior consent).</li>
    </ul>

    <h2>2. How do we collect your information?</h2>
    <p>Your personal information is collected directly from you when:</p>
    <ul>
      <li>You apply to one of our job postings or submit a spontaneous application on our website;</li>
      <li>You communicate with one of our advisors by email, phone, or through professional platforms (e.g. LinkedIn);</li>
      <li>You participate in a selection interview with our team.</li>
    </ul>

    <h2>3. Why do we use your information? (Purposes)</h2>
    <p>Nobilis RH uses your data solely for legitimate purposes related to our recruitment services:</p>
    <ul>
      <li>Assessing your profile, skills, and suitability for open positions;</li>
      <li>Presenting employment opportunities that match your profile;</li>
      <li>Communicating with you to schedule interviews or follow up on applications;</li>
      <li>Presenting your profile to our client companies seeking talent (your résumé will only be shared after discussion with you);</li>
      <li>Maintaining our internal talent pool so we can contact you about future professional opportunities.</li>
    </ul>

    <h2>4. With whom do we share your information?</h2>
    <p>Strictly within the scope of our recruitment mandates, your personal information (your profile and résumé) may be shared with:</p>
    <ul>
      <li><strong>Our clients (potential employers):</strong> Companies located primarily in Quebec that have mandated Nobilis RH to fill positions and have contractually agreed to respect the confidentiality of your data.</li>
      <li><strong>Our technology providers:</strong> Trusted third parties that host our website, applicant tracking system (ATS), or communication tools. These providers are subject to strict confidentiality agreements and may not use your data for other purposes.</li>
    </ul>
    <p>Nobilis RH does not sell, rent, or otherwise commercialize your personal information to third parties.</p>

    <h2>5. Consent</h2>
    <p>By checking the consent box on our website when submitting your application, you expressly, freely, and knowingly consent to Nobilis RH collecting, using, and sharing your personal information in accordance with this policy.</p>
    <p>You may withdraw your consent at any time. However, withdrawing consent may prevent us from continuing to evaluate your application or presenting employment opportunities to you.</p>

    <h2>6. Data retention period</h2>
    <p>We retain your personal information for as long as necessary to deliver our recruitment services or comply with our legal obligations.</p>
    <p>If you no longer wish to be part of our talent pool, you may request at any time that we destroy your file (see section 9). Absent such a request, inactive profiles are reviewed, anonymized, or securely destroyed after three (3) years of continuous inactivity.</p>

    <h2>7. Data security</h2>
    <p>Nobilis RH implements rigorous physical, technical, and administrative security measures to protect your personal information against unauthorized access, loss, theft, modification, or inadvertent disclosure. Our servers and IT tools are secured, and access to your data is strictly limited to Nobilis RH employees who need it in the course of their duties.</p>

    <h2>8. Your rights (access, rectification, and portability)</h2>
    <p>Under Quebec law, you have the following rights regarding your personal information:</p>
    <ul>
      <li><strong>Right of access:</strong> The right to know whether we hold information about you and to obtain a copy.</li>
      <li><strong>Right of rectification:</strong> The right to have inaccurate or incomplete information corrected, updated, or completed.</li>
      <li><strong>Right to erasure:</strong> The right to request deletion of your personal information from our systems and talent pool.</li>
      <li><strong>Right to portability:</strong> The right to obtain your personal information in a structured, commonly used technological format.</li>
    </ul>

    <h2>9. Privacy officer</h2>
    <p>To exercise your rights, ask a question, or file a complaint regarding the handling of your personal information, you may contact our Privacy Officer in writing:</p>
    <div class="privacy-contact">
      <strong>Nobilis RH</strong><br/>
      Attention: Privacy Officer<br/>
      Email: <a href="mailto:confidentialite@nobilisrh.ca">confidentialite@nobilisrh.ca</a>
    </div>
    <p>We commit to responding to any access or rectification request within a maximum of thirty (30) business days of receipt, in accordance with the law.</p>

    <h2>10. Changes to this policy</h2>
    <p>Nobilis RH reserves the right to modify this Privacy Policy at any time to reflect changes in our practices or legal requirements. Any modification will be published on this page with the updated date.</p>`
};

function cacheI18nDefaults() {
  Object.assign(I18N_FR_CACHE, I18N_FR_STATIC);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key && I18N_FR_CACHE[key] === undefined) I18N_FR_CACHE[key] = el.textContent;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (key && I18N_FR_CACHE[key] === undefined) I18N_FR_CACHE[key] = el.innerHTML;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key && I18N_FR_CACHE[key] === undefined) I18N_FR_CACHE[key] = el.placeholder || '';
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (key && I18N_FR_CACHE[key] === undefined) I18N_FR_CACHE[key] = el.getAttribute('aria-label') || '';
  });
  document.querySelectorAll('[data-i18n-section]').forEach(el => {
    const key = el.getAttribute('data-i18n-section');
    if (key && I18N_SECTIONS_FR[key] === undefined) I18N_SECTIONS_FR[key] = el.innerHTML;
  });
}

function t(key) {
  if (siteLang === 'en') return I18N_EN[key] ?? I18N_FR_CACHE[key] ?? key;
  return I18N_FR_CACHE[key] ?? key;
}

function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (key) el.textContent = t(key);
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (!key) return;
    const val = siteLang === 'en' ? (I18N_EN[key] ?? I18N_FR_CACHE[key]) : I18N_FR_CACHE[key];
    if (val != null) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (key) el.placeholder = t(key);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (key) el.setAttribute('aria-label', t(key));
  });
  document.querySelectorAll('[data-i18n-section]').forEach(el => {
    const key = el.getAttribute('data-i18n-section');
    if (!key) return;
    if (siteLang === 'en' && I18N_SECTIONS_EN[key]) {
      el.innerHTML = I18N_SECTIONS_EN[key];
    } else if (I18N_SECTIONS_FR[key]) {
      el.innerHTML = I18N_SECTIONS_FR[key];
    }
  });
}

function getProvinceLabel(frProvince) {
  if (siteLang === 'en') return PROVINCE_EN[frProvince] || frProvince;
  return frProvince;
}

function refreshJobFilterLabels() {
  const ville = document.getElementById('search-ville');
  if (ville && ville.options.length) {
    const saved = ville.value;
    if (ville.options[0]) ville.options[0].textContent = t('job.city');
    if (typeof CANADIAN_CITIES !== 'undefined') {
      const ogs = ville.querySelectorAll('optgroup');
      CANADIAN_CITIES.forEach((group, i) => {
        if (ogs[i]) ogs[i].label = getProvinceLabel(group.province);
      });
    }
    ville.value = saved;
  }

  const type = document.getElementById('search-type');
  if (type && type.options.length >= 4) {
    const saved = type.value;
    type.options[0].textContent = t('job.allTypes');
    type.options[1].textContent = t('job.fullTime');
    type.options[2].textContent = t('job.partTime');
    type.options[3].textContent = t('job.permanent');
    type.value = saved;
  }

  const per = document.getElementById('search-perimetre');
  if (per && per.options.length >= 6) {
    const saved = per.value;
    per.options[0].textContent = t('job.perimeter');
    per.options[1].textContent = t('job.perimeter10');
    per.options[2].textContent = t('job.perimeter25');
    per.options[3].textContent = t('job.perimeter50');
    per.options[4].textContent = t('job.perimeter75');
    per.options[5].textContent = t('job.anywhere');
    per.value = saved;
  }

  const poste = document.getElementById('search-poste');
  if (poste) {
    poste.placeholder = t('job.postePlaceholder');
    poste.setAttribute('aria-label', t('job.poste'));
  }

  const searchBtn = document.querySelector('.search-bar button');
  if (searchBtn) searchBtn.textContent = t('job.searchBtn');

  const loading = document.getElementById('jobs-loading');
  if (loading) loading.textContent = t('job.loading');

  const empty = document.getElementById('jobs-empty');
  if (empty && empty.style.display !== 'none') empty.textContent = t('job.empty');
}

function getActivePageId() {
  const active = document.querySelector('.page.active');
  return active ? active.id.replace('page-', '') : 'accueil';
}

function setSiteLanguage(lang) {
  siteLang = lang === 'en' ? 'en' : 'fr';
  localStorage.setItem('nobilis-lang', siteLang);
  document.documentElement.lang = siteLang === 'en' ? 'en-CA' : 'fr-CA';

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === siteLang);
  });

  applyI18n();
  refreshJobFilterLabels();
  if (typeof loadVideosForActivePage === 'function') loadVideosForActivePage();

  const jobPage = document.getElementById('page-job');
  if (jobPage?.classList.contains('active') && typeof renderJobsPage === 'function') {
    renderJobsPage();
  }

  if (typeof updatePageSEO === 'function') {
    updatePageSEO(getActivePageId());
  }
}

window.setSiteLanguage = setSiteLanguage;
window.t = t;
window.siteLang = () => siteLang;
window.cacheI18nDefaults = cacheI18nDefaults;
window.getProvinceLabel = getProvinceLabel;
window.refreshJobFilterLabels = refreshJobFilterLabels;
window.formatJobPagination = formatJobPagination;
window.I18N_EN = I18N_EN;
window.I18N_SECTIONS_EN = I18N_SECTIONS_EN;
window.PROVINCE_EN = PROVINCE_EN;
