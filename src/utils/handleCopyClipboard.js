import { toast } from "react-toastify";

export async function handleCopyClipboard(newClip) {
  try {
    await navigator.clipboard.writeText(newClip);
    console.log('Content copied to clipboard');
    /* Resolved - text copied to clipboard successfully */
    toast.success('Texto copiado')
  } catch (err) {
    console.error('Failed to copy: ', err);
    /* Rejected - text failed to copy to the clipboard */
  }
}