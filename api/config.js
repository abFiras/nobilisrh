module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'private, no-store');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  res.status(200).json({
    formspreeApplicationUrl: process.env.FORMSPREE_APPLICATION_URL || '',
    formspreeCandidatUrl: process.env.FORMSPREE_CANDIDAT_URL || '',
    formspreeContactUrl: process.env.FORMSPREE_CONTACT_URL || '',
    supabaseUrl: process.env.SUPABASE_URL || '',
    supabaseAnonKey: process.env.SUPABASE_ANON_KEY || '',
    sheetCsvUrl: process.env.SHEET_CSV_URL || '',
  });
};
