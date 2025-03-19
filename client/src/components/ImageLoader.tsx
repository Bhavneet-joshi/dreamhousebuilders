import { useEffect, useState } from 'react';
import { checkImageLoad, imageUrls } from '@/lib/imageLoader';

export default function ImageLoader() {
  const [loadingStatus, setLoadingStatus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const checkImages = async () => {
      const status: Record<string, boolean> = {};
      for (const url of imageUrls) {
        status[url] = await checkImageLoad(url);
      }
      setLoadingStatus(status);
    };

    checkImages();
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50">
      <h3 className="font-semibold mb-2">Image Loading Status</h3>
      <div className="space-y-2">
        {Object.entries(loadingStatus).map(([url, isLoaded]) => (
          <div key={url} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${isLoaded ? 'bg-green-500' : 'bg-red-500'}`} />
            <span className="text-sm">{isLoaded ? 'Loaded' : 'Failed'}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 