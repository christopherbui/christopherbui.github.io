import { useEffect } from 'react';

// Sets document.title for the current page. Shared across routes so each
// page gets an accurate tab title instead of the static one in index.html.
export function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}
