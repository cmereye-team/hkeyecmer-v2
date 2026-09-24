/*
 * @Author: 谭洁莹
 * @Date: 2026-09-22 16:37:45
 * @LastEditTime: 2026-09-22 16:54:13
 * @FilePath: /plugins/gtm.client.ts
 * @Description: 
 */
export default defineNuxtPlugin(() => {
  // 安全获取根域名
  const getRootDomain = () => {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || /^\d+\.\d+\.\d+\.\d+$/.test(hostname)) return hostname;
    const parts = hostname.split('.');
    return parts.length > 2 ? `.${parts.slice(-2).join('.')}` : `.${hostname}`;
  };

  const setCookie = (name: string, value: string, maxAgeSeconds: number) => {
    const domain = getRootDomain();
    const domainStr = domain === 'localhost' ? '' : `;domain=${domain}`;
    document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${maxAgeSeconds}${domainStr};SameSite=Lax`;
  };

  const getCookie = (name: string) => {
    const match = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
  };

  const now = Math.floor(Date.now() / 1000);
  const maxAge = 90 * 24 * 60 * 60; // 90 天
  const params = new URLSearchParams(window.location.search);
  
  const gclid = params.get('gclid') || params.get('gbraid') || params.get('wbraid');
  const currentUrl = window.location.href;
  const currentPath = window.location.pathname;

  const KEYS = {
    GCLID: '_cmer_gclid',
    GCLID_TIME: '_cmer_gclid_time',
    FIRST_LANDING: '_first_landing_url',
    PAGE_TRAIL: '_page_trail'
  };

  // 1. 广告 ID 双重存储与 Google 官方 _gcl_aw 预铺
  if (gclid) {
    try {
      localStorage.setItem(KEYS.GCLID, gclid);
      localStorage.setItem(KEYS.GCLID_TIME, now.toString());
    } catch (e) {}

    setCookie(KEYS.GCLID, gclid, maxAge);
    setCookie('_gcl_aw', `GCL.${now}.${gclid}`, maxAge);
  } else {
    // 2. 自愈机制：从 localStorage 恢复 Cookie
    try {
      const cachedGclid = localStorage.getItem(KEYS.GCLID);
      if (cachedGclid) {
        if (!getCookie('_gcl_aw')) {
          const cachedTime = localStorage.getItem(KEYS.GCLID_TIME) || now;
          setCookie('_gcl_aw', `GCL.${cachedTime}.${cachedGclid}`, maxAge);
        }
        if (!getCookie(KEYS.GCLID)) {
          setCookie(KEYS.GCLID, cachedGclid, maxAge);
        }
      }
    } catch (e) {}
  }

  // 3. 记录首次着陆页与轨迹
  try {
    if (!localStorage.getItem(KEYS.FIRST_LANDING)) {
      localStorage.setItem(KEYS.FIRST_LANDING, currentUrl);
    }

    let trail: string[] = JSON.parse(localStorage.getItem(KEYS.PAGE_TRAIL) || '[]');
    if (trail.length === 0 || trail[trail.length - 1] !== currentPath) {
      trail.push(currentPath);
      if (trail.length > 5) trail.shift();
      localStorage.setItem(KEYS.PAGE_TRAIL, JSON.stringify(trail));
    }
  } catch (e) {}

  // 4. 数据推送 DataLayer
  (window as any).dataLayer = (window as any).dataLayer || [];
  let finalGclid = gclid;
  if (!finalGclid) {
    try { finalGclid = localStorage.getItem(KEYS.GCLID); } catch (e) {}
  }

  if (finalGclid) {
    (window as any).dataLayer.push({
      event: 'attribution_ready',
      original_gclid: finalGclid
    });
  }
});