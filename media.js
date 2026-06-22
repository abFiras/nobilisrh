(function () {
  let cloudName = 'db4xlujhq';

  /**
   * ONLY edit this table when Cloudinary public IDs differ from the keys.
   * Keys (left) are used in HTML — never change those.
   * Values (right) must match the "Public ID" shown in Cloudinary Media Library.
   */
  const CLOUDINARY_VIDEOS = {
    construction: 'construction_n11cq6',
    lab: 'lab_cwdtqc',
    buildoze: 'buildoze_fjt4ue',
    meeting: 'meeting_sn9hit',
    hand: 'hand_hacewu',
    vertical: 'vertical_pytuqh',
  };

  function videoUrl(key) {
    const local = `videos/${key}.mp4`;
    const publicId = CLOUDINARY_VIDEOS[key];
    if (!publicId || !cloudName) return local;
    return `https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_mp4/${publicId}`;
  }

  function setMediaCloud(name) {
    const trimmed = (name || '').trim();
    if (trimmed) cloudName = trimmed;
  }

  function ensureVideoSource(sourceEl) {
    const key = sourceEl.getAttribute('data-video');
    if (!key) return;
    const url = videoUrl(key);
    if (sourceEl.getAttribute('src') === url) return;
    sourceEl.setAttribute('src', url);
    const video = sourceEl.closest('video');
    if (video) {
      video.setAttribute('preload', 'none');
      video.load();
    }
  }

  function loadVideosForPage(pageEl) {
    if (!pageEl) return;
    pageEl.querySelectorAll('source[data-video]').forEach(ensureVideoSource);
  }

  function loadVideosForActivePage() {
    const active = document.querySelector('.page.active');
    if (active) loadVideosForPage(active);
  }

  window.setMediaCloud = setMediaCloud;
  window.loadVideosForPage = loadVideosForPage;
  window.loadVideosForActivePage = loadVideosForActivePage;
  window.mediaVideoUrl = videoUrl;
})();
