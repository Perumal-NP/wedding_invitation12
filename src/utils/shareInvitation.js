export async function shareInvitation({ title, text, url }) {
  if (navigator.share) {
    try {
      await navigator.share({ title, text, url });
      return { success: true, method: 'native' };
    } catch (err) {
      if (err.name !== 'AbortError') {
        return fallbackCopy(text, url);
      }
      return { success: false, method: 'cancelled' };
    }
  }
  return fallbackCopy(text, url);
}

async function fallbackCopy(text, url) {
  try {
    await navigator.clipboard.writeText([text, url].filter(Boolean).join('\n\n'));
    return { success: true, method: 'clipboard' };
  } catch {
    return { success: false, method: 'failed' };
  }
}
