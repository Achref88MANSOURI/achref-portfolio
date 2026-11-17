import { useState } from 'react';
import { downloadBlob } from '@/lib/download-blob';
import { track } from '@/lib/track';

/** Runs a PDF build and saves the result, tracking the busy and "just downloaded" states for the button. */
export function usePdfDownload() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const download = async (build: () => Promise<{ blob: Blob; filename: string }>) => {
    setIsDownloading(true);
    setError(null);
    try {
      const { blob, filename } = await build();
      downloadBlob(blob, filename);
      track('pdf_download', { file: filename });
      setSucceeded(true);
      setTimeout(() => setSucceeded(false), 1800);
    } catch (err) {
      console.error('Failed to generate PDF:', err);
      setError('PDF generation failed. Please retry or contact me by email.');
    } finally {
      setIsDownloading(false);
    }
  };

  return { isDownloading, succeeded, error, download };
}
