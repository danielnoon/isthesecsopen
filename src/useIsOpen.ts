import { useEffect, useState } from 'react';

export function useIsOpen() {
  const [open, setIsOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      setIsOpen(false);
      setReady(true);
    })();
  }, []);

  return [open, ready];
}
