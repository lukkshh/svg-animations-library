"use client";

import styles from "./Popup.module.scss";

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  iconName: string;
  svgCode: string;
};

export default function Popup({
  isOpen,
  onClose,
  iconName,
  svgCode,
}: PopupProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.popup} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>{iconName}</h3>
          <button onClick={onClose}>✕</button>
        </div>

        <div
          className={styles.preview}
          dangerouslySetInnerHTML={{ __html: svgCode }}
        />

        <div className={styles.codeBlock}>
          <pre>
            <code>{svgCode}</code>
          </pre>
        </div>

        <button
          className={styles.copyBtn}
          onClick={() => navigator.clipboard.writeText(svgCode)}
        >
          Copy SVG
        </button>
      </div>
    </div>
  );
}
