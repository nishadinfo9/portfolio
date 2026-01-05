import { Download } from 'lucide-react'

const DownloadResumeButton = () => {
  return (
    <a
      href="/Resume.pdf"
      download="Nishad_Hasan_Resume.pdf"
      className="flex items-center gap-2"
    >
      <Download
        className="h-4 w-4 transition-transform group-hover:translate-y-1"
        size={18}
      />
      Download Resume
    </a>
  )
}

export default DownloadResumeButton
