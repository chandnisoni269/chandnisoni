interface ImageFrameProps {
  label?: string;
  aspectRatio?: string;
  className?: string;
  circular?: boolean;
  size?: number;
}

export function ImageFrame({ label = "Work sample", aspectRatio = "16/9", className = "", circular = false, size }: ImageFrameProps) {
  if (circular && size) {
    return (
      <div
        className={`flex-shrink-0 flex items-center justify-center border-2 border-dashed border-[rgba(27,42,74,0.2)] bg-[#F5F3EF] ${className}`}
        style={{ width: size, height: size, borderRadius: "50%" }}
      >
        <div className="text-center">
          <div className="w-8 h-8 mx-auto mb-2 rounded-full border border-[rgba(27,42,74,0.2)] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="1.5">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
          </div>
          <p className="text-[9px] tracking-widest uppercase text-[#6B6B6B]">Photo</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center bg-[#F5F3EF] border border-dashed border-[rgba(27,42,74,0.2)] ${className}`}
      style={{ aspectRatio }}
    >
      <div className="text-center">
        <div className="w-10 h-10 mx-auto mb-3 border border-[rgba(27,42,74,0.2)] flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6B6B6B" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="1" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
        </div>
        <p className="text-[9px] tracking-[0.2em] uppercase text-[#6B6B6B]">{label}</p>
      </div>
    </div>
  );
}
